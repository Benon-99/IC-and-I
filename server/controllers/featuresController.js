import prisma from '../prisma/client.js';

export const updateFeatures = async (req, res) => {
    try {
        const { id } = req.query;
        const { title, subtitle, features } = req.body;

        if (!features || !Array.isArray(features)) {
            return res.status(400).json({ error: 'Invalid features data. It must be an array.' });
        }

        // Ensure the `advantages` field has the correct structure
        const advantages = {
            title,
            subtitle,
            features,
        };

        const updatedHome = await prisma.home.update({
            where: { id: parseInt(id) },
            data: {
                advantages,
            },
        });

        res.json({ message: 'Advantages section updated successfully', data: updatedHome });
    } catch (error) {
        console.error('Error updating advantages section:', error);
        res.status(500).json({ error: 'Failed to update advantages section' });
    }
};
