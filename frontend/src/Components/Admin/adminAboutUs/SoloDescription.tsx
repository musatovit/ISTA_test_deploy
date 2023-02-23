import React, { useState } from 'react';
import { Description } from '../../AboutUs/Types/type';
import { useAppDispatch } from '../../../store';
import { deleteDescriptions } from '../../AboutUs/descriptionSlicer';
import UpdatedDescription from './UpdateDescription';

export default function DescriptionSolo({
  description,
}: {
  description: Description;
}): JSX.Element {
  const [modal, setModal] = useState(false);
  const open = (): void => {
    setModal((prev) => !prev);
  };
  const dispatch = useAppDispatch();
  const del = (): void => {
    dispatch(deleteDescriptions(description.id));
  };
  return (
    <>
      {modal && <UpdatedDescription open={open} description={description} />}
      <div
        style={{
          height: '420px',
          width: '350px',
          border: '1px black solid',
          marginBottom: '1rem',
        }}
        className="max-w-sm rounded overflow-hidden "
      >
        <center>
          <img
            style={{ width: '250px', height: '250px', marginTop: '1rem' }}
            className="w-full"
            src={description.img}
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div style={{ color: 'gray' }} className="font-bold text-xl mb-2">
              {description.body}
            </div>
          </div>
        </center>
        <div className="flex justify-evenly">
          <button
            className=" py-2 px-2 bg-blue-700 text-white rounded hover:bg-blue-800"
            onClick={del}
            type="button"
          >
            Удалить
          </button>
          <button
            className=" py-2 px-2 bg-blue-700 text-white rounded hover:bg-blue-800"
            onClick={open}
            type="button"
          >
            Редактировать
          </button>
        </div>
      </div>
    </>
  );
}
