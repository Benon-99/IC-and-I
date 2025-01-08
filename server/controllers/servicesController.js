import prisma from '../prisma/client.js';

export const updateServices = async (req, res) => {
    try {
        const { id } = req.query;
        const { categories } = req.body;

        if (!categories || !Array.isArray(categories)) {
            return res.status(400).json({ error: 'Invalid services data. It must be an array of categories.' });
        }

        // Find the first home record
        const home = await prisma.home.findFirst();

        if (!home) {
            return res.status(404).json({ error: 'Home data not found.' });
        }

        // Update the services field
        const updatedHome = await prisma.home.update({
            where: { id: home.id },
            data: { 
                services: { categories } 
            },
        });

        res.json({ message: 'Services updated successfully', data: updatedHome });
    } catch (error) {
        console.error('Error updating services:', error);
        res.status(500).json({ error: 'Failed to update services' });
    }
};

