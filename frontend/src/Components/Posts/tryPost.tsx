import React from 'react';

import PostCard from './PostCard';
import { Post } from './Types/types';

export default function TryPost({ state }: { state: Post[] }): JSX.Element {
  return (
    <>
      <div
        className="flex justify-center"
        style={{
          marginTop: '11rem',
          marginBottom: '-5rem',
          fontSize: '30px',
          fontFamily: 'IBM Plex Sans',
        }}
      >
        <h1>Наши кейсы</h1>
      </div>
      <center>
        <div
          style={{
            marginLeft: '5rem',
            marginRight: '5rem',
            marginTop: '10rem',
            marginBottom: '10rem',
          }}
        >
          <div className="carousel carousel-center w-full p-4 space-x-4 bg-white rounded-box">
            {state.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </center>
    </>
  );
}
