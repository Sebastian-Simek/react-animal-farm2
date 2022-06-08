import React from 'react';
import AnimalCard from './AnimalCard';

export default function AnimalList({ animals }) {
  return (
    <div>
      {
        animals.map((animal, i) => <AnimalCard key={animal.name + i} {...animal}/>)
      }
    </div>
  );
}