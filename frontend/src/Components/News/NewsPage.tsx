import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { initNews } from './NewsSlice';
import TryNews from './tryNews';

function NewsPage(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const state = useSelector((store: RootState) => store.news.news);
  const dispatch = useAppDispatch();
  useLayoutEffect((): void => {
    dispatch(initNews()).finally(() => setLoading(false));
  }, [dispatch]);
  return <div>{loading ? <div>Загрузка</div> : <TryNews state={state} />}</div>;
}

export default NewsPage;
