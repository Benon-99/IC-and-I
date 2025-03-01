'use client';

import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface MessageData {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
  subject: string;
}

const fetchMessages = async (): Promise<MessageData[]> => {
  const { data } = await axios.get("http://localhost:3001/message/messages");
  return data;
};

export default function MessagesPage() {
  const {
    data: messages,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: fetchMessages,
  });

  return (
    <div className="p-6">
      {isLoading && (
        <div className="text-center text-blue-500">Loading messages...</div>
      )}
      
      {isError && (
        <div className="text-center text-red-500">
          Error: {error.message}
        </div>
      )}
      
      {messages && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-[#0a0b2e] rounded-lg overflow-hidden">
            <thead className="bg-[#1a1b4b] text-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Subject</th>
                <th className="px-6 py-3 text-left">Message</th>
                <th className="px-6 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2d52]">
              {messages.map((message) => (
                <tr
                  key={message.id}
                  className="text-gray-300 hover:bg-[#1a1b4b] transition-colors"
                >
                  <td className="px-6 py-4">{message.id}</td>
                  <td className="px-6 py-4">{message.name}</td>
                  <td className="px-6 py-4">{message.email}</td>
                  <td className="px-6 py-4">{message.subject}</td>
                  <td className="px-6 py-4">{message.message}</td>
                  <td className="px-6 py-4">
                    {new Date(message.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
