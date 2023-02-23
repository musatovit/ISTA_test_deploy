import React from 'react';
import NewsCard from './NewsCard';
import { OneNews } from './Types/types';

export default function TryNews({ state }: { state: OneNews[] }): JSX.Element {
  return (
    <div style={{ margin: '6rem 1rem 9rem 6rem' }} className="container">
      {state.map((oneNews) => (
        <NewsCard key={oneNews.id} oneNews={oneNews} />
      ))}
    </div>
  );
}
