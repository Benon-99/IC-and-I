"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Message {
  id: number;
  email: string;
  name: string;
  subject: string;
  message: string;
  created_at: string; // Should be an ISO string
}

const MessageTable: React.FC = () => {
  const [data, setData] = useState<Message[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    try {
      const response = await axios.get<Message[]>(
        "http://localhost:3001/message/messages"
      );
      const serializedData = JSON.parse(JSON.stringify(response.data)); 
      setData(serializedData);
      setIsLoading(false);
    } catch (err) {
      setError("Failed to fetch messages");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Name</th>
          <th>Subject</th>
          <th>Message</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((message) => (
          <tr key={message.id}>
            <td>{message.id}</td>
            <td>{message.email}</td>
            <td>{message.name}</td>
            <td>{message.subject}</td>
            <td>{message.message}</td>
            <td>{new Date(message.created_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MessageTable;
