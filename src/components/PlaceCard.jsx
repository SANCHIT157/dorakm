// src/components/PlaceCard.jsx
import React from 'react';

const PlaceCard = ({ name, image, description }) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    <img
      src={image}
      alt={name}
      className="w-full h-40 object-cover rounded-md mb-4"
      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/ADD8E6/000000?text=Image"; }}
    />
    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">{name}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
  </div>
);

export default PlaceCard;