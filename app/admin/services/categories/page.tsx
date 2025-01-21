'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  AlertTriangle,
} from 'lucide-react';
import React from 'react';

interface Category {
  id: string;
  name: string;
  title: string;
  description: string;
  overview: {
    title: string;
    content: string;
  };
  published: boolean;
  created_at: string;
  updated_at: string;
}

interface Alert {
  type: 'success' | 'error' | 'info';
  message: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 'bpo',
      name: 'Business Process Outsourcing',
      title: 'Business Outsourcing',
      description: 'IC&I HR outsourcing services is one of our core strengths. Our scalable services are crafted to deliver optimal efficiency and support your business\'s evolving needs.',
      overview: {
        title: 'Market Leading HR Solutions',
        content: 'We are the Syrian market leader with the largest market share in providing full recruitment services in UN agencies, NPO\'s and NGO\'s. Our comprehensive HR outsourcing solutions are designed to streamline your operations and drive organizational success through effective talent management.'
      },
      published: true,
      created_at: '2024-01-20T10:00:00Z',
      updated_at: '2024-01-20T10:00:00Z'
    },
    {
      id: 'ict',
      name: 'ICT Solutions',
      title: 'Information and Communication Technology',
      description: 'Comprehensive ICT solutions tailored for modern business needs.',
      overview: {
        title: 'Enterprise Technology Solutions',
        content: 'From infrastructure to software solutions, we provide end-to-end ICT services that drive digital transformation.'
      },
      published: true,
      created_at: '2024-01-20T10:00:00Z',
      updated_at: '2024-01-20T10:00:00Z'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [alert, setAlert] = useState<Alert | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{ show: boolean; categoryId: string | null }>({
    show: false,
    categoryId: null
  });

  const showAlert = (type: Alert['type'], message: string) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 3000);
  };

  const initiateDelete = (id: string) => {
    setDeleteConfirm({ show: true, categoryId: id });
  };

  const handleDelete = () => {
    if (deleteConfirm.categoryId) {
      setCategories(categories.filter(category => category.id !== deleteConfirm.categoryId));
      setDeleteConfirm({ show: false, categoryId: null });
      showAlert('success', 'Category deleted successfully');
    }
  };

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filter === 'all' ? true :
                         filter === 'published' ? category.published :
                         !category.published;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1035] to-[#2e3267] p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Alert Component */}
        <AnimatePresence mode="wait">
          {alert && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center space-x-2 z-50 ${
                alert.type === 'success' ? 'bg-green-500' :
                alert.type === 'error' ? 'bg-red-500' :
                'bg-blue-500'
              }`}
            >
              {alert.type === 'success' && <CheckCircle className="w-5 h-5 text-white" />}
              {alert.type === 'error' && <XCircle className="w-5 h-5 text-white" />}
              {alert.type === 'info' && <AlertCircle className="w-5 h-5 text-white" />}
              <p className="text-white font-medium">{alert.message}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {deleteConfirm.show && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-[#1a1f4b] p-6 rounded-lg shadow-lg max-w-md w-full mx-4"
              >
                <div className="flex items-start mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Delete Category</h3>
                    <p className="text-gray-400">
                      Are you sure you want to delete this category? This action cannot be undone.
                    </p>
                  </div>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setDeleteConfirm({ show: false, categoryId: null })}
                    className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-500 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Categories</h1>
          <Link
            href="/admin/services/categories/new"
            className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-white"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Category
          </Link>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-[#1a1f4b] rounded-xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#2e3267] text-gray-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('published')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === 'published'
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#2e3267] text-gray-400 hover:text-white'
                }`}
              >
                Published
              </button>
              <button
                onClick={() => setFilter('draft')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === 'draft'
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#2e3267] text-gray-400 hover:text-white'
                }`}
              >
                Draft
              </button>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-[#1a1f4b] rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-1">{category.name}</h2>
                  <h3 className="text-gray-400 text-sm">{category.title}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <Link
                    href={`/admin/services/categories/new?id=${category.id}`}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Pencil className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => initiateDelete(category.id)}
                    className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <p className="text-gray-400 mb-4 line-clamp-2">{category.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-400">
                  <Clock className="w-4 h-4 mr-1" />
                  {new Date(category.updated_at).toLocaleDateString()}
                </div>
                <div
                  className={`px-2 py-1 rounded-full text-xs ${
                    category.published
                      ? 'bg-green-900/50 text-green-400'
                      : 'bg-gray-900/50 text-gray-400'
                  }`}
                >
                  {category.published ? 'Published' : 'Draft'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
