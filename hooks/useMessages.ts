import { useState, useEffect } from 'react';
import { Message } from '@/types/message';

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/messages');
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const markAsRead = async (id: number) => {
    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ read: true }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to mark message as read');
      }
      
      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, read: true } : msg
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const deleteMessage = async (id: number) => {
    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete message');
      }
      
      setMessages(messages.filter(msg => msg.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return {
    messages,
    loading,
    error,
    markAsRead,
    deleteMessage,
    refetch: fetchMessages,
  };
}
