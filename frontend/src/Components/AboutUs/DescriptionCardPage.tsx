import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { initDescription } from './descriptionSlicer';
import TryAboutUs from './TryAboutUs';

export default function DescriptionCardPage(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const state = useSelector((store: RootState) => store.descriptions.descriptions);
  const dispatch = useAppDispatch();
  useLayoutEffect((): void => {
    dispatch(initDescription()).finally(() => setLoading(false));
  }, [dispatch]);
  return <div>{loading ? <div>Загрузка</div> : <TryAboutUs state={state} />}</div>;
}
