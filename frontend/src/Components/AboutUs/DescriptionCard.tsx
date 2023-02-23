import React from 'react';
import { Description } from './Types/type';

export default function DescriptionCard({
  description,
}: {
  description: Description;
}): JSX.Element {
  return (
    <div
      style={{
        width: '100%',
        border: '1px white solid',
        marginBottom: '1rem',
      }}
      className="max-w-sm rounded overflow-hidden shadow-lg"
    >
      <center>
        <img
          style={{
            width: '250px',
            height: '250px',
            marginTop: '1rem',
          }}
          className="w-full"
          src={description.img}
          alt="Sunset in the mountains"
        />

        <div className="px-6 py-4">
          <div
            style={{ color: 'black', fontFamily: 'IBM Plex Sans' }}
            className="font-bold text-xl mb-2"
          >
            {description.body}
          </div>
        </div>
      </center>
    </div>
  );
}
