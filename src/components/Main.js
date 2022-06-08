import React from 'react';
import AnimalList from './AnimalList';
import backgroundImg from '../background.png';

export default function Main({ animals }) {
  return (
    <div style={{ backgroundImage: `url(${backgroundImg})` }}>
      < AnimalList animals={animals}/>
    </div>
  );
}