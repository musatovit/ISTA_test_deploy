import React from 'react';
import { OneNews } from './Types/types';

function NewsCard({ oneNews }: { oneNews: OneNews }): JSX.Element {
  return (
    <div
      style={{ marginTop: '2rem' }}
      className="card lg:card-side bg-base-100 shadow-xl"
    >
      <figure>
        <a href={oneNews.url}>
          <img
            style={{ width: '300px', height: '200px' }}
            src={oneNews.img}
            alt="Album"
          />
        </a>
      </figure>
      <div className="card-body">
        <a className="hover:text-blue-800" href={oneNews.url}>
          <h2 className="card-title" style={{ fontFamily: 'IBM Plex Sans' }}>
            {oneNews.title}
          </h2>
        </a>
        <p style={{ fontFamily: 'IBM Plex Sans' }}>{oneNews.description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
