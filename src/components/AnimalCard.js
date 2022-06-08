import React from 'react';

export default function AnimalCard({ name, type, says }) {
  return (
    <div>
      <p>{name}</p>
      <p>{type}</p>
      <p>{says}</p>
    </div>
  );
}
