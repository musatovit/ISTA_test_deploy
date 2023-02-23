import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import LoadingAboutUs from './LoadingAboutUs';
import { initDescription } from '../../AboutUs/descriptionSlicer';

export default function DescriptionCardList(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const state = useSelector((store: RootState) => store.descriptions.descriptions);
  const dispatch = useAppDispatch();
  useLayoutEffect((): void => {
    dispatch(initDescription()).finally(() => setLoading(false));
  }, [dispatch]);
  return <div>{loading ? <div>Загрузка</div> : <LoadingAboutUs state={state} />}</div>;
}
