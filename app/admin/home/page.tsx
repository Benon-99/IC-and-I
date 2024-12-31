'use client';

import { useState, useRef, useEffect } from 'react';
import { Save, X, Image as ImageIcon, Plus, Trash2, AlertCircle, CheckCircle } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AboutContent {
  title: string;
  subtitle: string;
  content: string[];
  img?: string;
}

interface AlertState {
  type: 'success' | 'error';
  message: string;
}

export default function HomePage() {
  const [formData, setFormData] = useState<AboutContent>({
    title: '',
    subtitle: '',
    content: [''],
    img: ''
  });
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isSaving, setIsSaving] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [alert, setAlert] = useState<AlertState | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: aboutData, isLoading } = useQuery<{ about: { aboutUs: AboutContent }[] }>(
    {
      queryKey: ["about"],
      queryFn: async () => {
        const response = await fetch("http://localhost:8000/about");
        const data = await response.json();
        return data;
      },
    }
  );

  useEffect(() => {
    if (aboutData?.about?.[0]) {
      const { aboutUs } = aboutData.about[0];
      setFormData({
        title: aboutUs.title || '',
        subtitle: aboutUs.subtitle || '',
        content: Array.isArray(aboutUs.content) 
          ? aboutUs.content 
          : aboutUs.content 
            ? [aboutUs.content] 
            : [''],
        img: aboutUs.img || ''
      });
    }
  }, [aboutData]);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('content[')) {
      const index = parseInt(name.match(/\[(\d+)\]/)?.[1] || '0');
      setFormData(prev => ({
        ...prev,
        content: prev.content.map((item, i) => i === index ? value : item)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const addContentField = () => {
    setFormData(prev => ({
      ...prev,
      content: [...prev.content, '']
    }));
  };

  const removeContentField = (index: number) => {
    if (formData.content.length > 1) {
      setFormData(prev => ({
        ...prev,
        content: prev.content.filter((_, i) => i !== index)
      }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("subtitle", formData.subtitle);
      formDataToSend.append("content", JSON.stringify(formData.content));

      if (fileInputRef.current?.files?.[0]) {
        formDataToSend.append("photo", fileInputRef.current.files[0]);
      } else if (formData.img) {
        formDataToSend.append("img", formData.img);
      }

      const response = await fetch("http://localhost:8000/about/update?id=1", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to update about content");
      }

      let responseData;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        responseData = await response.json();
      } else {
        const text = await response.text();
        responseData = { message: text };
      }

      console.log('Content updated successfully');
      setAlert({ type: 'success', message: 'About section updated successfully!' });
    } catch (error) {
      console.error("Error updating content:", error);
      setAlert({ type: 'error', message: `Error updating about section: ${error instanceof Error ? error.message : 'Unknown error'}` });
    } finally {
      setIsSaving(false);
    }
  };

  const showAlert = (type: AlertState['type'], message: string) => {
    setAlert({ type, message });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1035] to-[#2e3267] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          {alert && (
            <div className={`mb-4 transition-all duration-300 ease-in-out ${alert ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <Alert variant={alert.type === 'error' ? 'destructive' : 'default'}>
                {alert.type === 'success' ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <AlertCircle className="h-4 w-4" />
                )}
                <AlertDescription>{alert.message}</AlertDescription>
              </Alert>
            </div>
          )}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Update About Section</h1>
              <p className="text-gray-400">Manage your about page content</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="bg-[#1a1f4b] rounded-xl shadow-lg p-6">
            <div className="space-y-6">
              {/* About Section */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">About Section</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-gray-300 text-sm font-bold mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subtitle" className="block text-gray-300 text-sm font-bold mb-2">
                      Subtitle
                    </label>
                    <input
                      type="text"
                      id="subtitle"
                      name="subtitle"
                      value={formData.subtitle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2">
                      Content
                    </label>
                    <div className="space-y-4">
                      {formData.content.map((content, index) => (
                        <div key={index} className="flex gap-2">
                          <textarea
                            name={`content[${index}]`}
                            value={content}
                            onChange={handleChange}
                            rows={4}
                            className="flex-1 px-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                          {formData.content.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeContentField(index)}
                              className="self-start p-2 text-red-400 hover:text-red-300 transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addContentField}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        Add Content Block
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                onClick={() => !showUrlInput && fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  imagePreview || formData.img
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
                {(imagePreview || formData.img) ? (
                  <div className="relative aspect-video">
                    <img
                      src={imagePreview || formData.img}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setImagePreview("");
                        setImageUrl("");
                        setShowUrlInput(false);
                        setFormData(prev => ({ ...prev, img: undefined }));
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
                                setFormData(prev => ({ ...prev, img: imageUrl }));
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

              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  disabled={isSaving}
                  className={`inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg transition-all transform hover:scale-105 ${
                    isSaving ? "opacity-75 cursor-not-allowed" : "hover:bg-blue-700"
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
          </form>
        </div>
      </div>
    </div>
  );
}
