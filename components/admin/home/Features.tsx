'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

interface AlertState {
  type: 'success' | 'error';
  message: string;
}

export default function Features() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [alert, setAlert] = useState<AlertState | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const { data: homeData, isError, isLoading } = useQuery({
    queryKey: ["features"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/home");
      const data = await response.json();
      return data;
    },
  });

  useEffect(() => {
    if (homeData?.about?.[0]) {
      setFeatures(homeData.about[0].features);
    }
  }, [homeData]);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const updateFeatureDescription = (index: number, description: string) => {
    setFeatures(prev => {
      const newFeatures = [...prev];
      newFeatures[index] = { ...newFeatures[index], description };
      return newFeatures;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const response = await fetch("http://localhost:8000/home/features/update?id=1", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ features }),
      });

      if (!response.ok) {
        throw new Error("Failed to update features");
      }

      setAlert({ type: 'success', message: 'Features updated successfully!' });
    } catch (error) {
      console.error("Error updating features:", error);
      setAlert({ 
        type: 'error', 
        message: `Error updating features: ${error instanceof Error ? error.message : 'Unknown error'}` 
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-red-500 mb-2">Error Loading Features</h3>
        <p className="text-gray-400">Failed to load features. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {alert && (
        <div className="fixed top-4 right-4 left-4 md:left-auto z-50 md:w-96">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`p-4 rounded-lg shadow-lg ${
              alert.type === 'success' 
                ? 'bg-green-600 text-white' 
                : 'bg-red-600 text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              {alert.type === 'success' ? (
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
              )}
              <p className="text-sm font-medium">{alert.message}</p>
            </div>
          </motion.div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Features Section</h2>
          <p className="text-gray-400 mt-1">Edit feature descriptions</p>
        </div>
        <button
          onClick={handleSubmit}
          disabled={isSaving}
          className={`inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg transition-all ${
            isSaving ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          {isSaving ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
              Saving...
            </div>
          ) : (
            'Save Changes'
          )}
        </button>
      </div>

      <div className="grid gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 bg-[#1a1f4b] rounded-xl shadow-lg border-l-4 ${feature.gradient}`}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Description
              </label>
              <textarea
                value={feature.description}
                onChange={(e) => updateFeatureDescription(index, e.target.value)}
                rows={3}
                className="w-full px-4 py-2 bg-[#2e3267] border border-gray-700 rounded-lg text-white"
                placeholder="Feature description..."
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}