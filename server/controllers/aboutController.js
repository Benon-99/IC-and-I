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

        // Ensure stats exists and is an array
        if (!Array.isArray(about[0].aboutUs.stats)) {
            about[0].aboutUs.stats = about[0].aboutUs.stats ? [about[0].aboutUs.stats] : [];
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

        // Parse the features array from the JSON string
        let features;
        try {
            features = featuresString ? JSON.parse(featuresString) : [];
            features = Array.isArray(features) ? features : [features];
        } catch (error) {
            console.error('Error parsing features:', error);
            features = featuresString ? [featuresString] : [];
        }

        // Parse the stats array from the JSON string
        let stats;
        try {
            stats = statsString ? JSON.parse(statsString) : [];
            // Ensure stats is an array
            stats = Array.isArray(stats) ? stats : [stats];
            console.log('Parsed stats:', stats);
        } catch (error) {
            console.error('Error parsing stats:', error);
            stats = [];
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
                    stats,
                    img: photo ? `http://localhost:8000/${photo.split('\\')[1]}` : (img || aboutData?.aboutUs?.img)
                },
                features
            }
        });

        console.log('Updated about:', about);
        res.json({ about });
    } catch (error) {
        console.error('Error updating about:', error);
        res.status(500).json({ error: 'Failed to update about section' });
    }
};