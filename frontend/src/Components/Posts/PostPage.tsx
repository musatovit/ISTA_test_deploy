import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { initPosts } from './PostSlice';
import TryPost from './tryPost';

function PostPage(): JSX.Element {
  const [modal, setModal] = useState(true);
  const state = useSelector((store: RootState) => store.posts.posts);
  const dispatch = useAppDispatch();
  useLayoutEffect((): void => {
    dispatch(initPosts()).finally(() => setModal(false));
  }, [dispatch]);
  return (
    <div>
      {modal ? (
        <div style={{ width: '1000px', height: '1000px' }}> Загрузка</div>
      ) : (
        <TryPost state={state} />
      )}
    </div>
  );
}

export default PostPage;
