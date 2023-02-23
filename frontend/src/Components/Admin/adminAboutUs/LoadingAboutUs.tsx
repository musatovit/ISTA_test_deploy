import React from 'react';
import DescriptionSolo from './SoloDescription';
import { Description } from '../../AboutUs/Types/type';

export default function LoadingAboutUs({ state }: { state: Description[] }): JSX.Element {
  return (
    <div
      className="grid grid-cols-3 gap-4 justify-center"
      style={{ marginLeft: '5rem', marginRight: '5rem' }}
    >
      {state.map((description) => (
        <DescriptionSolo key={description.id} description={description} />
      ))}
    </div>
  );
}
