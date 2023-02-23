import React from 'react';
import { OneNews } from '../../News/Types/types';
import NewsSolo from './SoloNew';

export default function LoadingNews({ state }: { state: OneNews[] }): JSX.Element {
  return (
    <div
      className="grid grid-cols-3 gap-4 justify-center"
      style={{ marginLeft: '5rem', marginRight: '5rem' }}
    >
      {state.map((oneNews) => (
        <NewsSolo key={oneNews.id} oneNews={oneNews} />
      ))}
    </div>
  );
}
