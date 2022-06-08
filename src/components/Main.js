import React from 'react';
import AnimalCard from './AnimalCard';

export default function Main(animals) {
  return (
    <div>
      < AnimalCard animals={animals}/>
    </div>
  );
}