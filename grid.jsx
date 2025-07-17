import React from 'react';
import './grid.css'; // Import external CSS

const landmarks = [
  { name: 'Eiffel Tower', location: 'Paris', country: 'France' },
  { name: 'Great Wall of China', location: 'Beijing', country: 'China' },
  { name: 'Colosseum', location: 'Rome', country: 'Italy' },
  { name: 'Statue of Liberty', location: 'New York', country: 'USA' },
  { name: 'Taj Mahal', location: 'Agra', country: 'India' },
  { name: 'Machu Picchu', location: 'Cusco', country: 'Peru' }
];

const LandmarkGrid = () => {
  return (
    <div className="landmark-grid">
      {landmarks.map((landmark, index) => (
        <div className="landmark-card" key={index}>
          <h3>{landmark.name}</h3>
          <p>{landmark.location}, {landmark.country}</p>
        </div>
      ))}
    </div>
  );
};

export default grid;
