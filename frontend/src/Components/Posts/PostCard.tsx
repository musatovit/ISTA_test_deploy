import React from 'react';

import { Post } from './Types/types';

function PostCard({ post }: { post: Post }): JSX.Element {
  return (
    <div className="carousel-item">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          style={{ margin: '1rem 0rem 0rem 1rem', width: '250px', height: '250px' }}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={post.img}
          alt="..."
        />
        <div className="flex flex-col justify-around p-4 leading-normal">
          <h5
            style={{ fontFamily: 'IBM Plex Sans' }}
            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {post.title}
          </h5>
          <p
            style={{ fontFamily: 'IBM Plex Sans' }}
            className="mb-3 font-normal text-gray-700 dark:text-gray-400"
          >
            {post.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
