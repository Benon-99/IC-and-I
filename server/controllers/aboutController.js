import { log } from "console";
import prisma from "../prisma/client.js"

export const getAbout = async (req, res) => {
    try {
        const about = await prisma.home.findMany({
            where: {
                id: 1
            }
        });

        console.log('Raw DB Data:', about[0]);

        // Ensure content is always an array
        if (about[0]?.aboutUs?.content) {
            about[0].aboutUs.content = Array.isArray(about[0].aboutUs.content) 
                ? about[0].aboutUs.content 
                : [about[0].aboutUs.content];
        }

        // Ensure features is always an array
        if (about[0]?.features) {
            about[0].features = Array.isArray(about[0].features) 
                ? about[0].features 
                : [about[0].features];
        }

        // Ensure aboutUs exists
        if (!about[0].aboutUs) {
            about[0].aboutUs = {};
        }

        

        if (about[0]?.stats) {
            about[0].stats = Array.isArray(about[0].stats) 
                ? about[0].stats 
                : [about[0].stats];
        }
        console.log('Processed Data:', about[0]);

        res.json({ about });
    } catch (error) {
        console.error('Error getting about:', error);
        res.status(500).json({ error: 'Failed to get about section' });
    }
};

export const updateAbout = async (req, res) => {
    try {
        const { id } = req.query;
        const photo = req.file ? req.file.path : null;
        console.log("aewqerqeqr  : ",req.body.features);
        
        const { img, content: contentString, features: featuresString, stats: statsString, ...rest } = req.body;

        console.log('Received stats:', statsString);

        // Parse the content array from the JSON string
        let content;
        try {
            content = contentString ? JSON.parse(contentString) : [];
            content = Array.isArray(content) ? content : [content];
        } catch (error) {
            console.error('Error parsing content:', error);
            content = contentString ? [contentString] : [];
        }


        const aboutData = await prisma.home.findFirst({
            where: { id: parseInt(id) }
        });

        // Handle the update with either uploaded file or image URL
        const about = await prisma.home.update({
            where: { id: parseInt(id) },
            data: {
                aboutUs: {
                    ...rest,
                    content,
                    features:featuresString,
                    stats  :statsString,
                    img: photo ? `http://localhost:8000/${photo.split('\\')[1]}` : (img || aboutData?.aboutUs?.img)
                },
            }
        });

        console.log('Updated about:', about);
        res.json({ about });
    } catch (error) {
        console.error('Error updating about:', error);
        res.status(500).json({ error: 'Failed to update about section' });
    }
};