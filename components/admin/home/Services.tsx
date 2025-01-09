'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface Service {
  title: string;
  description: string;
}

interface Category {
  title: string;
  subtitle: string;
  services: Service[];
}

interface ServicesData {
  categories: Category[];
}

interface AlertState {
  type: 'success' | 'error';
  message: string;
}

export default function Services() {
  const [servicesData, setServicesData] = useState<ServicesData>({
    categories: [{
      title: '',
      subtitle: '',
      services: [{
        title: '',
        description: ''
      }]
    }]
  });
  const [alert, setAlert] = useState<AlertState | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const { data: homeData, isError, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/home");
      const data = await response.json();
      console.log('Services Data:', data.about[0].services);
      return data.about[0].services || {
        categories: [{
          title: '',
          subtitle: '',
          services: [{
            title: '',
            description: ''
          }]
        }]
      };
    },
  });

  useEffect(() => {
    if (homeData) {
      setServicesData(homeData);
    }
  }, [homeData]);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const updateServiceDescription = (categoryIndex: number, serviceIndex: number, description: string) => {
    setServicesData(prev => {
      const newCategories = [...prev.categories];
      const newServices = [...newCategories[categoryIndex].services];
      newServices[serviceIndex] = { ...newServices[serviceIndex], description };
      newCategories[categoryIndex] = { ...newCategories[categoryIndex], services: newServices };
      return { ...prev, categories: newCategories };
    });
  };

  const updateCategoryField = (categoryIndex: number, field: keyof Category, value: string | Service[]) => {
    setServicesData(prev => {
      const newCategories = [...prev.categories];
      newCategories[categoryIndex] = { 
        ...newCategories[categoryIndex], 
        [field]: field === 'services' ? JSON.parse(value as string) : value 
      };
      return { ...prev, categories: newCategories };
    });
  };

  const addNewCategory = () => {
    setServicesData(prev => ({
      categories: [...prev.categories, {
        title: '',
        subtitle: '',
        services: [{
          title: '',
          description: ''
        }]
      }]
    }));
  };

  const addNewService = (categoryIndex: number) => {
    setServicesData(prev => {
      const newCategories = [...prev.categories];
      newCategories[categoryIndex].services.push({
        title: '',
        description: ''
      });
      return { ...prev, categories: newCategories };
    });
  };

  const removeCategory = (categoryIndex: number) => {
    setServicesData(prev => ({
      categories: prev.categories.filter((_, index) => index !== categoryIndex)
    }));
  };

  const removeService = (categoryIndex: number, serviceIndex: number) => {
    setServicesData(prev => {
      const newCategories = [...prev.categories];
      newCategories[categoryIndex] = {
        ...newCategories[categoryIndex],
        services: newCategories[categoryIndex].services.filter((_, index) => index !== serviceIndex)
      };
      return { ...prev, categories: newCategories };
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const response = await fetch("http://localhost:8000/home/services/update?id=1", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          categories: servicesData.categories
        }),
      });

      if (!response.ok) throw new Error('Failed to update services');
      setAlert({ type: 'success', message: 'Services updated successfully!' });
    } catch (error: unknown) {
      setAlert({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'An unknown error occurred' 
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#13123A]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-200 text-lg font-medium">Loading services, please wait...</p>
        </div>
      </div>
    );
  }

  if (isError || !servicesData) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#13123A]">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-red-500">Oops! Something went wrong</h2>
          <p className="text-gray-300">
            We were unable to load the services. Please try again later or contact support.
          </p>
          <button
            onClick={() => location.reload()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        {alert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-4 right-4 left-4 md:left-auto z-50 md:w-96 p-4 rounded-lg ${
              alert.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
            } backdrop-blur-sm border ${
              alert.type === 'success' ? 'border-emerald-500/20' : 'border-red-500/20'
            } flex items-center space-x-2`}
          >
            {alert.type === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span>{alert.message}</span>
          </motion.div>
        )}

        {servicesData.categories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="bg-[#1E1D4C] rounded-xl shadow-lg p-6 space-y-6 border border-[#2E2D5C] relative group"
          >
            <button
              type="button"
              onClick={() => removeCategory(categoryIndex)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-red-500/10 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/20"
              title="Remove Category"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 011.414.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="space-y-4">
              <input
                type="text"
                value={category.title}
                onChange={(e) => updateCategoryField(categoryIndex, 'title', e.target.value)}
                className="w-full text-2xl font-bold bg-transparent border-b border-[#2E2D5C] focus:border-blue-500 outline-none px-2 py-1 text-white"
                placeholder="Category Title"
              />
              <input
                type="text"
                value={category.subtitle}
                onChange={(e) => updateCategoryField(categoryIndex, 'subtitle', e.target.value)}
                className="w-full text-gray-300 bg-transparent border-b border-[#2E2D5C] focus:border-blue-500 outline-none px-2 py-1"
                placeholder="Category Subtitle"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.isArray(category.services) && category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: serviceIndex * 0.05 }}
                  className="p-6 rounded-lg bg-[#1E1D4C]/50 shadow-lg backdrop-blur-sm border border-[#2E2D5C] relative group"
                >
                  <button
                    type="button"
                    onClick={() => removeService(categoryIndex, serviceIndex)}
                    className="absolute top-2 right-2 p-1.5 rounded-lg bg-red-500/10 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/20"
                    title="Remove Service"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>

                  <div className="space-y-4">
                    <input
                      type="text"
                      value={service.title}
                      onChange={(e) => {
                        const newServices = [...category.services];
                        newServices[serviceIndex] = { ...service, title: e.target.value };
                        updateCategoryField(categoryIndex, 'services', JSON.stringify(newServices));
                      }}
                      className="w-full text-xl font-semibold bg-transparent border-b border-[#2E2D5C] focus:border-blue-400 outline-none px-2 py-1 text-white placeholder-gray-400"
                      placeholder="Service Title"
                    />
                    <textarea
                      value={service.description}
                      onChange={(e) => updateServiceDescription(categoryIndex, serviceIndex, e.target.value)}
                      className="w-full h-32 text-white bg-transparent border border-[#2E2D5C] rounded-lg focus:border-blue-400 outline-none p-2 placeholder-gray-400 resize-none"
                      placeholder="Service Description"
                    />
                  </div>
                </motion.div>
              ))}
              <motion.button
                type="button"
                onClick={() => addNewService(categoryIndex)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-full min-h-[200px] p-6 rounded-lg border-2 border-dashed border-[#2E2D5C] flex items-center justify-center text-gray-400 hover:text-gray-200 hover:border-[#3E3D6C] transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  <span>Add New Service</span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        ))}

        <motion.button
          type="button"
          onClick={addNewCategory}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-6 text-gray-400 font-medium rounded-lg border-2 border-dashed border-[#2E2D5C] hover:text-gray-200 hover:border-[#3E3D6C] transition-colors"
        >
          <div className="flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            <span>Add New Category</span>
          </div>
        </motion.button>

        <motion.button
          type="submit"
          disabled={isSaving}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 px-6 text-white font-medium rounded-lg ${
            isSaving ? 'bg-blue-600/50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          } transition-all duration-200 backdrop-blur-sm`}
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </motion.button>
      </form>
    </div>
  );
}