import React from 'react';
import AnimalCard from './AnimalCard';
import './AnimalList.css';

export default function AnimalList({ animals }) {
  return (
    <div style={{ position: 'absolute', top: animals.top, left: animals.left }}>
      {
        animals.map((animal, i) => <AnimalCard key={animal.name + i} {...animal}/>)
      }
    </div>
  );
}