'use client';

import { motion } from 'framer-motion';
import { Plus, MoreVertical, Edit2, Trash2, Eye } from 'lucide-react';
import Link from 'next/link';

interface Blog {
  id: number;
  title: string;
  status: string;
  created_at: string;
  author: {
    name: string;
  };
  views: number;
  comments: number;
}

// Static blog data
const staticBlogs: Blog[] = [
  {
    id: 1,
    title: "Introduction to IC&I",
    status: "Published",
    created_at: "2024-01-01",
    author: {
      name: "Admin"
    },
    views: 150,
    comments: 5
  },
  {
    id: 2,
    title: "Our Services",
    status: "Published",
    created_at: "2024-01-15",
    author: {
      name: "Admin"
    },
    views: 120,
    comments: 3
  },
  {
    id: 3,
    title: "Latest Projects",
    status: "Draft",
    created_at: "2024-02-01",
    author: {
      name: "Admin"
    },
    views: 0,
    comments: 0
  }
];

export default function BlogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
          <p className="text-gray-400 mt-1">Manage your blog content</p>
        </div>
        <Link 
          href="/admin/blogs/new"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Post
        </Link>
      </div>

      <div className="bg-[#0f1035] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#1a1b4b] text-gray-200">
            <tr>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Author</th>
              <th className="px-6 py-3 text-center">Views</th>
              <th className="px-6 py-3 text-center">Comments</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2a2d52]">
            {staticBlogs.map((blog) => (
              <motion.tr
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-300 hover:bg-[#1a1b4b] transition-colors"
              >
                <td className="px-6 py-4">{blog.title}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    blog.status === 'Published' 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-yellow-500/20 text-yellow-500'
                  }`}>
                    {blog.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {new Date(blog.created_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">{blog.author.name}</td>
                <td className="px-6 py-4 text-center">{blog.views}</td>
                <td className="px-6 py-4 text-center">{blog.comments}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-end space-x-2">
                    <button className="p-1 hover:text-blue-500 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-1 hover:text-yellow-500 transition-colors">
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button className="p-1 hover:text-red-500 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {staticBlogs.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No blog posts found. Create your first post!
        </div>
      )}
    </div>
  );
}