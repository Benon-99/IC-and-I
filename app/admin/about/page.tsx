'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Save,
  X,
  Plus,
  Trash2,
  AlertCircle,
  CheckCircle,
  Globe,
  Target,
  Compass,
  Shield,
  Users,
  Heart,
  ArrowLeft,
  Server,
  Network,
  Database,
  Code,
  Briefcase,
  Layout,
  ImageIcon
} from 'lucide-react';
import Link from 'next/link';
import React, { useRef } from 'react';

interface Feature {
  icon: string;
  title: string;
  text: string;
}

interface Stat {
  number: string;
  label: string;
}

interface Alert {
  type: 'success' | 'error';
  message: string;
}

const iconOptions = [
  { value: 'Server', icon: Server },
  { value: 'Network', icon: Network },
  { value: 'Users', icon: Users },
  { value: 'Database', icon: Database },
  { value: 'Code', icon: Code },
  { value: 'Globe', icon: Globe },
  { value: 'Target', icon: Target },
  { value: 'Compass', icon: Compass },
  { value: 'Shield', icon: Shield },
  { value: 'Heart', icon: Heart },
  { value: 'Briefcase', icon: Briefcase },
  { value: 'Layout', icon: Layout }
];

export default function AboutPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [alert, setAlert] = useState<Alert | null>(null);

  const [values, setValues] = useState<Feature[]>([
    { 
      icon: 'Globe', 
      title: "Global Standards", 
      text: "UN Global Compact signatory since 2023"
    },
    { 
      icon: 'Target', 
      title: "Mission-Driven", 
      text: "Preferred strategic partner for consultancy and services"
    },
    { 
      icon: 'Compass', 
      title: "Clear Vision", 
      text: "Driving innovation and exceptional performance"
    },
    { 
      icon: 'Shield', 
      title: "Strong Ethics", 
      text: "Highest standards of integrity and professionalism"
    },
    { 
      icon: 'Users', 
      title: "Client Focus", 
      text: "Building lasting partnerships through collaboration"
    },
    { 
      icon: 'Heart', 
      title: "Core Values", 
      text: "Transparency, respect, innovation, and unwavering commitment to excellence"
    }
  ]);

  const [stats, setStats] = useState<Stat[]>([
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Expert Team Members" },
    { number: "98%", label: "Client Satisfaction" }
  ]);

  const [content, setContent] = useState({
    title: "About IC&I",
    subtitle: "Empowering Progress Through Innovation",
    description: [
      "IC&I is a leading provider of integrated solutions in Syria, specializing in ICT solutions and business process outsourcing. With over 15 years of experience, we've established ourselves as a trusted partner for organizations seeking innovative and reliable services.",
      "Our commitment to excellence and customer satisfaction has made us the preferred choice for businesses looking to optimize their operations and drive growth. We combine industry expertise with cutting-edge technology to deliver solutions that create lasting value for our clients."
    ],
    mission: "To empower organizations through innovative solutions and exceptional service, driving sustainable growth and success in an evolving digital landscape.",
    vision: "To be the leading technology and business solutions provider in Syria, recognized for our innovation, reliability, and commitment to client success.",
    img: ''
  });

  const [imagePreview, setImagePreview] = useState<string>('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleValueChange = (index: number, field: keyof Feature, value: string) => {
    const newValues = [...values];
    newValues[index] = { ...newValues[index], [field]: value };
    setValues(newValues);
  };

  const addValue = () => {
    setValues([...values, {
      icon: 'Layout',
      title: '',
      text: ''
    }]);
  };

  const removeValue = (index: number) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };

  const handleStatChange = (index: number, field: keyof Stat, value: string) => {
    const newStats = [...stats];
    newStats[index] = { ...newStats[index], [field]: value };
    setStats(newStats);
  };

  const handleContentChange = (field: keyof typeof content, value: string | string[]) => {
    setContent(prev => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        setContent(prev => ({ ...prev, img: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAlert({
        type: 'success',
        message: 'About page content updated successfully'
      });
    } catch (error) {
      setAlert({
        type: 'error',
        message: 'Failed to update content'
      });
    } finally {
      setIsSaving(false);
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
              <h1 className="text-3xl font-bold text-white mb-2">Edit About Page</h1>
              <p className="text-gray-400">Configure your about page content and features</p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/admin"
                className="inline-flex items-center px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-[#2e3267] transition-colors"
              >
                <X className="w-5 h-5 mr-2" />
                Cancel
              </Link>
              <button
                onClick={handleSubmit}
                disabled={isSaving}
                className={`inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg transition-all transform hover:scale-105 ${
                  isSaving ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSaving ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Saving...
                  </div>
                ) : (
                  <>
                    <Save className="w-5 h-5 mr-2" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Title and Subtitle */}
            <div className="bg-[#1a1f4b] rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Main Content</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={content.title}
                    onChange={(e) => handleContentChange('title', e.target.value)}
                    className="w-full px-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subtitle</label>
                  <input
                    type="text"
                    value={content.subtitle}
                    onChange={(e) => handleContentChange('subtitle', e.target.value)}
                    className="w-full px-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-[#1a1f4b] rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Description</h2>
              <div className="space-y-4">
                {content.description.map((paragraph, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Paragraph {index + 1}
                    </label>
                    <textarea
                      value={paragraph}
                      onChange={(e) => {
                        const newDescription = [...content.description];
                        newDescription[index] = e.target.value;
                        handleContentChange('description', newDescription);
                      }}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-[#1a1f4b] rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-300">
                  Statistics
                </label>
                <button
                  type="button"
                  onClick={() => setStats([...stats, { number: '', label: '' }])}
                  className="inline-flex items-center px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Stat
                </button>
              </div>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-[#2e3267] rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-white font-medium">Statistic {index + 1}</h4>
                      <button
                        type="button"
                        onClick={() => {
                          const newStats = [...stats];
                          newStats.splice(index, 1);
                          setStats(newStats);
                        }}
                        className="text-red-400 hover:text-red-300"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Number</label>
                        <input
                          type="text"
                          value={stat.number}
                          onChange={(e) => handleStatChange(index, 'number', e.target.value)}
                          className="w-full px-3 py-2 bg-[#1a1f4b] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., 15+"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Label</label>
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                          className="w-full px-3 py-2 bg-[#1a1f4b] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., Years Experience"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="bg-[#1a1f4b] rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Mission & Vision</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mission</label>
                  <textarea
                    value={content.mission}
                    onChange={(e) => handleContentChange('mission', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Vision</label>
                  <textarea
                    value={content.vision}
                    onChange={(e) => handleContentChange('vision', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="bg-[#1a1f4b] rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Featured Image</h2>
              <div
                onClick={() => !showUrlInput && fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  imagePreview || content.img
                    ? "border-blue-500 hover:border-blue-400"
                    : "border-gray-600 hover:border-gray-500"
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
                {(imagePreview || content.img) ? (
                  <div className="relative aspect-video">
                    <img
                      src={imagePreview || content.img}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setImagePreview("");
                        setImageUrl("");
                        setShowUrlInput(false);
                        setContent(prev => ({ ...prev, img: '' }));
                        if (fileInputRef.current) {
                          fileInputRef.current.value = "";
                        }
                      }}
                      className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    {showUrlInput ? (
                      <div onClick={(e) => e.stopPropagation()} className="space-y-2">
                        <input
                          type="text"
                          value={imageUrl}
                          onChange={(e) => setImageUrl(e.target.value)}
                          placeholder="Enter image URL"
                          className="w-full px-4 py-2 bg-[#2e3267] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setShowUrlInput(false)}
                            className="px-3 py-1 text-sm text-gray-300 hover:text-white"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              if (imageUrl) {
                                setImagePreview(imageUrl);
                                setContent(prev => ({ ...prev, img: imageUrl }));
                                setShowUrlInput(false);
                              }
                            }}
                            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                          >
                            Add URL
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="mt-2">
                          <p className="text-sm text-gray-300">
                            Drop your featured image here or{" "}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowUrlInput(true);
                              }}
                              className="text-blue-400 hover:text-blue-300"
                            >
                              paste a URL
                            </button>
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Values/Features */}
            <div className="bg-[#1a1f4b] rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-300">
                  Values
                </label>
                <button
                  type="button"
                  onClick={addValue}
                  className="inline-flex items-center px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Value
                </button>
              </div>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="bg-[#2e3267] rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-white font-medium">Value {index + 1}</h4>
                      <button
                        type="button"
                        onClick={() => removeValue(index)}
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
                              onClick={() => handleValueChange(index, 'icon', option.value)}
                              className={`p-4 rounded-lg border-2 ${
                                value.icon === option.value
                                  ? 'border-blue-500 bg-blue-500/20'
                                  : 'border-gray-700 hover:border-gray-600'
                              }`}
                            >
                              {React.createElement(option.icon, {
                                size: 24,
                                className: value.icon === option.value ? 'text-blue-500' : 'text-gray-400'
                              })}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Title</label>
                        <input
                          type="text"
                          value={value.title}
                          onChange={(e) => handleValueChange(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 bg-[#1a1f4b] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Value title..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Description</label>
                        <textarea
                          value={value.text}
                          onChange={(e) => handleValueChange(index, 'text', e.target.value)}
                          rows={2}
                          className="w-full px-3 py-2 bg-[#1a1f4b] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Value description..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Alert Component */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={alert ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center space-x-2 z-50 ${
            alert?.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {alert?.type === 'success' ? (
            <CheckCircle className="w-5 h-5 text-white" />
          ) : (
            <AlertCircle className="w-5 h-5 text-white" />
          )}
          <p className="text-white font-medium">{alert?.message}</p>
          <button
            onClick={() => setAlert(null)}
            className="text-white hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}