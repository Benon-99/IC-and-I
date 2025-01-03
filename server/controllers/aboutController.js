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

        res.json({ about});
    } catch (error) {
        console.error('Error getting about:', error);
        res.status(500).json({ error: 'Failed to get about section' });
    }
};

export const updateAbout = async (req, res) => {
    try {
        const { id } = req.query;
        const { title, description } = req.body;
        const image = req.file?.filename;

        const updateData = {
            title,
            description,
            ...(image && { image })
        };

        const updatedAbout = await prisma.home.update({
            where: { id: parseInt(id) },
            data: updateData
        });

        res.json({ 
            message: 'About section updated successfully', 
            data: updatedAbout 
        });
    } catch (error) {
        console.error('Error updating about section:', error);
        res.status(500).json({ error: 'Failed to update about section' });
    }
};