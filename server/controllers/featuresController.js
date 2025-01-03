import prisma from '../prisma/client.js';

export const updateFeatures = async (req, res) => {
    try {
        const { id } = req.query;
        const { features } = req.body;

        // Validate the `features` data
        if (!features || !Array.isArray(features)) {
            return res.status(400).json({ error: 'Invalid features data. It must be an array.' });
        }

        // Update the `features` field in the database
        const updatedHome = await prisma.home.update({
            where: { id: parseInt(id) },
            data: {
                features: features, // Only update the `features` field
            },
        });

        // Log and return the updated data
        console.log('Updated Home Data:', updatedHome);
        res.json({ message: 'Features updated successfully', data: updatedHome });
    } catch (error) {
        console.error('Error updating features:', error);
        res.status(500).json({ error: 'Failed to update features' });
    }
};
