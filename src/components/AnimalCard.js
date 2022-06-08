import React from 'react';

export default function AnimalCard({ name, type, says, top, left }) {
  return (
    <div className='animal'>
      <p>{name}</p>
      <p>{type}</p>
      <p>{says}</p>
      <img src={`/animals/${type}.svg`}/>
    </div>
  );
}
