import React from 'react';
import AnimalList from './AnimalList';
import backgroundImg from '../background.png';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})`, position: 'relative' }}>
      < AnimalList animals={animals}/>
    </main>
  );
}