'use client';
import { trpc } from '@/utils/trpc';
import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
  onRegister?: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  description,
  imageUrl,
  onRegister,
}) => {
  const { data: user, isLoading, error } = trpc.event.findMany.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden">
      {imageUrl && (
        <img className="w-full h-48 object-cover" src={imageUrl} alt={imageUrl} />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{user[4].name}</h3>
        <div className="text-sm text-gray-600 mb-2">
          <span className="font-medium">📅 {date}</span>
        </div>
        <div className="text-sm text-gray-600 mb-4">
          <span className="font-medium">📍 {location}</span>
        </div>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <button
          onClick={onRegister}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Присоединиться
        </button>
      </div>
    </div>
  );
};
