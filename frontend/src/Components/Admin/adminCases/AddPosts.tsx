import React, { useState } from 'react';

import { useAppDispatch } from '../../../store';
import { addPosts } from '../../Posts/PostSlice';

export default function AddPostss(): JSX.Element {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useAppDispatch();
  const addPost = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addPosts({ img, title, description }));
    setTitle('');
    setDescription('');
    setImg('');
  };
  return (
    <div
      style={{ border: '1px solid', marginTop: '1rem', marginBottom: '1rem' }}
      className="block w-2/4 rounded-lg bg-white p-25"
    >
      <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}>
        Форма добавления кейсов
      </h3>
      <form onSubmit={addPost}>
        <div className="relative mb-5 " data-te-input-wrapper-init>
          <input
            className="placeholder w-96"
            style={{ color: 'black', backgroundColor: 'white' }}
            type="text"
            id="img"
            name="img"
            value={img}
            onChange={(e) => setImg(String(e.target.value))}
            placeholder="Ссылка на картинку"
          />
        </div>
        <div className="relative mb-6 " data-te-input-wrapper-init>
          <input
            className="placeholder w-96"
            style={{ color: 'black', backgroundColor: 'white' }}
            maxLength={Number(20)}
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(String(e.target.value))}
            placeholder="Заголовок"
          />
        </div>
        <div className="relative mb-6 " data-te-input-wrapper-init>
          <input
            className="placeholder w-96"
            style={{ color: 'black', backgroundColor: 'white' }}
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Описание"
          />
        </div>
        <div style={{ marginBottom: '1rem' }} className="flex justify-center">
          <button
            type="submit"
            className="py-2 px-7 bg-blue-700 text-white rounded hover:bg-blue-800"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
}
