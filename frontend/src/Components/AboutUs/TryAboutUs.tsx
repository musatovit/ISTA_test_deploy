import React from 'react';
import DescriptionCard from './DescriptionCard';
import { Description } from './Types/type';

export default function TryAboutUs({ state }: { state: Description[] }): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      {state.map((description) => (
        <DescriptionCard key={description.id} description={description} />
      ))}
    </div>
  );
}
