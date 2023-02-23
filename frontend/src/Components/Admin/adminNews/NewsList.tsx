import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import LoadingNews from './LoadingNews';
import { initNews } from '../../News/NewsSlice';

function NewsList(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const state = useSelector((store: RootState) => store.news.news);
  const dispatch = useAppDispatch();
  useLayoutEffect((): void => {
    dispatch(initNews()).finally(() => setLoading(false));
  }, [dispatch]);
  return <div>{loading ? <div>Загрузка</div> : <LoadingNews state={state} />}</div>;
}

export default NewsList;
