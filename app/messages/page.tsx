"use client";
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

// Fetch function
const fetchMessages = async (): Promise<MessageData[]> => {
  const { data } = await axios.get("http://localhost:3001/message/messages"); // Replace with your API endpoint
  return data;
};

const MessagesTable: React.FC = () => {
  // Use `useQuery` to fetch and cache data
  const {
    data: messages,
    isLoading,
    isError,
    error,
  } = useQuery<MessageData[], Error>(
    {
      queryKey: ["messages"], // Query key
      queryFn: fetchMessages,
    } // Fetch function}
  );

  if (isLoading) {
    return <p className="text-center text-blue-500">Loading...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">
        Error: {(error as Error).message}
      </p>
    );
  }

  return (
    <div className="overflow-x-auto p-4">
      <table className="table-auto w-full border-collapse border border-gray-200 shadow-md">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="px-4 py-2 border border-gray-300">ID</th>
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">Email</th>
            <th className="px-4 py-2 border border-gray-300">Subject</th>
            <th className="px-4 py-2 border border-gray-300">Message</th>
            <th className="px-4 py-2 border border-gray-300">Created At</th>
          </tr>
        </thead>
        <tbody>
          {messages?.map(
            (message: {
              id:
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | Promise<React.AwaitedReactNode>
                | React.Key
                | null
                | undefined;
              name:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<React.AwaitedReactNode>
                | null
                | undefined;
              email:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<React.AwaitedReactNode>
                | null
                | undefined;
              subject:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<React.AwaitedReactNode>
                | null
                | undefined;
              message:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<React.AwaitedReactNode>
                | null
                | undefined;
              created_at: string | number | Date;
            }) => (
              <tr key={message.id} className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {message.id}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {message.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {message.email}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {message.subject}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {message.message}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {new Date(message.created_at).toLocaleString()}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MessagesTable;
