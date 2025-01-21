'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Save,
  Server,
  Network,
  Users,
  Database,
  Code,
  Briefcase,
  X,
  Layout,
  Tag,
  LucideIcon,
  Plus
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

interface Category {
  id: string;
  name: string;
}

interface SubService {
  icon: string;
  title: string;
  description: string;
}

interface Service {
  id?: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  category: Category;
  published: boolean;
  subServices?: SubService[];
  overview?: string;
  overviewTitle?: string;
}

const iconOptions: { value: string; icon: LucideIcon }[] = [
  { value: 'Server', icon: Server },
  { value: 'Network', icon: Network },
  { value: 'Users', icon: Users },
  { value: 'Database', icon: Database },
  { value: 'Code', icon: Code },
  { value: 'Briefcase', icon: Briefcase },
];

export default function NewServicePage({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories] = useState<Category[]>([
    { id: 'ict', name: 'ICT Solutions' },
    { id: 'business', name: 'Business Outsourcing' }
  ]);

  const [formData, setFormData] = useState<Partial<Service>>({
    title: '',
    description: '',
    icon: 'Server',
    link: '',
    category: categories[0],
    published: false,
    subServices: [],
    overview: '',
    overviewTitle: ''
  });

  useEffect(() => {
    const fetchService = async () => {
      if (searchParams.id) {
        try {
          const response = await fetch(`/api/services/${searchParams.id}`);
          if (response.ok) {
            const service = await response.json();
            setFormData({
              ...service,
              category: categories.find(c => c.id === service.category.id) || categories[0]
            });
          }
        } catch (error) {
          console.error('Error fetching service:', error);
        }
      }
    };

    fetchService();
  }, [searchParams.id, categories]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const url = searchParams.id ? `/api/services/${searchParams.id}` : '/api/services';
      const method = searchParams.id ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/services');
        router.refresh();
      } else {
        throw new Error('Failed to save service');
      }
    } catch (error) {
      console.error('Error saving service:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1035] to-[#2e3267] p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {searchParams.id ? 'Edit Service' : 'Create New Service'}
              </h1>
              <p className="text-gray-400">Configure your service details and appearance</p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/admin/services"
                className="inline-flex items-center px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-[#2e3267] transition-colors"
              >
                <X className="w-5 h-5 mr-2" />
                Cancel
              </Link>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg transition-all transform hover:scale-105 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Saving...
                  </div>
                ) : (
                  <>
                    <Save className="w-5 h-5 mr-2" />
                    {searchParams.id ? 'Update Service' : 'Create Service'}
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-[#1a1f4b] rounded-xl shadow-lg p-6">
              <div className="mb-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter service title..."
                />
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your service..."
                />
              </div>

              <div className="mb-6">
                <label htmlFor="link" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Link
                </label>
                <input
                  type="text"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="/services/your-service"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="overviewTitle" className="block text-sm font-medium text-gray-300 mb-2">
                  Overview Title
                </label>
                <input
                  type="text"
                  id="overviewTitle"
                  name="overviewTitle"
                  value={formData.overviewTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter overview title..."
                />
              </div>

              <div className="mb-6">
                <label htmlFor="overview" className="block text-sm font-medium text-gray-300 mb-2">
                  Overview Content
                </label>
                <textarea
                  id="overview"
                  name="overview"
                  value={formData.overview}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Provide a detailed overview of your service..."
                />
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Features/Sub-services
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({
                        ...prev,
                        subServices: [
                          ...(prev.subServices || []),
                          {
                            icon: 'Server',
                            title: '',
                            description: ''
                          }
                        ]
                      }));
                    }}
                    className="inline-flex items-center px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Feature
                  </button>
                </div>
                <div className="space-y-4">
                  {formData.subServices?.map((subService, index) => (
                    <div key={index} className="bg-[#2e3267] rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-white font-medium">Feature {index + 1}</h4>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              subServices: prev.subServices?.filter((_, i) => i !== index)
                            }));
                          }}
                          className="text-red-400 hover:text-red-300"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Icon</label>
                          <div className="grid grid-cols-6 gap-4">
                            {iconOptions.map((option) => (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                  setFormData(prev => ({
                                    ...prev,
                                    subServices: prev.subServices?.map((s, i) => 
                                      i === index ? { ...s, icon: option.value } : s
                                    )
                                  }));
                                }}
                                className={`p-4 rounded-lg border-2 ${
                                  subService.icon === option.value
                                    ? 'border-blue-500 bg-blue-500/20'
                                    : 'border-gray-700 hover:border-gray-600'
                                }`}
                              >
                                {React.createElement(option.icon, {
                                  size: 24,
                                  className: subService.icon === option.value ? 'text-blue-500' : 'text-gray-400'
                                })}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Title</label>
                          <input
                            type="text"
                            value={subService.title}
                            onChange={(e) => {
                              setFormData(prev => ({
                                ...prev,
                                subServices: prev.subServices?.map((s, i) => 
                                  i === index ? { ...s, title: e.target.value } : s
                                )
                              }));
                            }}
                            className="w-full px-3 py-2 bg-[#1a1f4b] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Feature title..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Description</label>
                          <textarea
                            value={subService.description}
                            onChange={(e) => {
                              setFormData(prev => ({
                                ...prev,
                                subServices: prev.subServices?.map((s, i) => 
                                  i === index ? { ...s, description: e.target.value } : s
                                )
                              }));
                            }}
                            rows={2}
                            className="w-full px-3 py-2 bg-[#1a1f4b] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Feature description..."
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-[#1a1f4b] rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Service Settings</h2>
              
              <div className="space-y-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Layout className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-white">Icon</p>
                      <p className="text-xs text-gray-400">Choose an icon for your service</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 mt-2">
                    {iconOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, icon: option.value }))}
                        className={`p-4 rounded-lg border-2 ${
                          formData.icon === option.value
                            ? 'border-blue-500 bg-blue-500/20'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        {React.createElement(option.icon, {
                          size: 24,
                          className: formData.icon === option.value ? 'text-blue-500' : 'text-gray-400'
                        })}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Tag className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-white">Category</p>
                      <p className="text-xs text-gray-400">Select a category for your service</p>
                    </div>
                  </div>
                  <select
                    name="category"
                    value={formData.category?.id}
                    onChange={(e) => {
                      const category = categories.find(c => c.id === e.target.value);
                      setFormData(prev => ({ ...prev, category }));
                    }}
                    className="w-full px-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#2e3267] rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${formData.published ? 'bg-green-500' : 'bg-gray-500'}`} />
                    <div>
                      <p className="text-sm font-medium text-white">Status</p>
                      <p className="text-xs text-gray-400">{formData.published ? 'Published' : 'Draft'}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, published: !prev.published }))}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      formData.published
                        ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {formData.published ? 'Published' : 'Draft'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
