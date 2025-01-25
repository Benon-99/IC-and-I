import prisma from '../prisma/client.js';

class ServicesRepository {
    async createService(serviceDTO) {
        try {
            // Check if category exists
            const categoryExists = await prisma.categories.findUnique({
                where: { id: parseInt(serviceDTO.categoryID) }
            });

            if (!categoryExists) {
                throw new Error('Category does not exist');
            }

            return await prisma.services.create({
                data: {
                    name: serviceDTO.name,
                    title: serviceDTO.title,
                    subtitle: serviceDTO.subtitle,
                    description: serviceDTO.description,
                    subContent: serviceDTO.subContent,
                    services: serviceDTO.services,
                    categoryID: parseInt(serviceDTO.categoryID)
                }
            });
        } catch (error) {
            console.error('Error creating service:', error);
            throw error;
        }
    }

    async updateService(id, serviceDTO) {
        if (!id) throw new Error('ID is required for updating a service');
        
        try {
            const serviceId = parseInt(id);
            if (isNaN(serviceId)) throw new Error('Invalid service ID format');

            // Check if category exists if categoryID is being updated
            if (serviceDTO.categoryID) {
                const categoryExists = await prisma.categories.findUnique({
                    where: { id: parseInt(serviceDTO.categoryID) }
                });

                if (!categoryExists) {
                    throw new Error('Category does not exist');
                }
            }

            return await prisma.services.update({
                where: { id: serviceId },
                data: {
                    name: serviceDTO.name,
                    title: serviceDTO.title,
                    subtitle: serviceDTO.subtitle,
                    description: serviceDTO.description,
                    subContent: serviceDTO.subContent,
                    services: serviceDTO.services,
                    categoryID: serviceDTO.categoryID ? parseInt(serviceDTO.categoryID) : undefined
                }
            });
        } catch (error) {
            console.error('Error updating service:', error);
            throw error;
        }
    }

    async getServiceById(id) {
        if (!id) throw new Error('ID is required to fetch a service');
        
        try {
            const serviceId = parseInt(id);
            if (isNaN(serviceId)) throw new Error('Invalid service ID format');

            const service = await prisma.services.findUnique({
                where: { id: serviceId }
            });

            if (!service) {
                throw new Error('Service not found');
            }

            return service;
        } catch (error) {
            console.error('Error getting service by ID:', error);
            throw error;
        }
    }

    async getServiceByName(name) {
        if (!name) throw new Error('Service name is required');

        try {
            const service = await prisma.services.findUnique({
                where: { name }
            });

            if (!service) {
                return null;
            }

            return service;
        } catch (error) {
            console.error('Error getting service by name:', error);
            throw error;
        }
    }

    async getServicesByCategory(categoryId) {
        if (!categoryId) throw new Error('Category ID is required');

        try {
            const parsedCategoryId = parseInt(categoryId);
            if (isNaN(parsedCategoryId)) throw new Error('Invalid category ID format');

            return await prisma.services.findMany({
                where: { categoryID: parsedCategoryId },
                orderBy: { name: 'asc' }
            });
        } catch (error) {
            console.error('Error getting services by category:', error);
            throw error;
        }
    }

    async getAllServices() {
        try {
            return await prisma.services.findMany({
                orderBy: {
                    name: 'asc'
                }
            });
        } catch (error) {
            console.error('Error getting all services:', error);
            throw error;
        }
    }

    async deleteService(id) {
        if (!id) throw new Error('ID is required to delete a service');
        
        try {
            const serviceId = parseInt(id);
            if (isNaN(serviceId)) throw new Error('Invalid service ID format');

            const service = await prisma.services.findUnique({
                where: { id: serviceId }
            });

            if (!service) {
                throw new Error('Service not found');
            }

            return await prisma.services.delete({
                where: { id: serviceId }
            });
        } catch (error) {
            console.error('Error deleting service:', error);
            throw error;
        }
    }
}

// Create a single instance of the repository
const servicesRepository = new ServicesRepository();

// Export the instance
export { servicesRepository };