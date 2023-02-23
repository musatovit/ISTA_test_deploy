import React, { useState } from 'react';

import { useAppDispatch } from '../../../store';
import { Description } from '../../AboutUs/Types/type';
import { updateDescriptions } from '../../AboutUs/descriptionSlicer';

export default function UpdatedDescription({
  open,
  description,
}: {
  description: Description;
  open: () => void;
}): JSX.Element {
  const [img, setImg] = useState(description.img);
  const [body, setBody] = useState(description.body);

  const dispatch = useAppDispatch();
  const updatedDescriptionOne = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(updateDescriptions({ id: description.id, img, body }));
    open();
  };

  return (
    <div
      className="fixed z-10  top-0 w-full left-0 overflow-y-auto hover:overflow-scroll"
      id="modal"
    >
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity ">
          <div className="absolute inset-0 bg-gray-900 opacity-75 " />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          className="inline-block align-center bg-white rounded-lg text-left  transform transition-all sm:my-8 sm:align-middle sm:max-w-lg lg:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <form onSubmit={updatedDescriptionOne}>
            <center>
              <div className="relative mb-12 mt-14" data-te-input-wrapper-init>
                <textarea
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    border: 'solid black 1px',
                    padding: '2px',
                    resize: 'none',
                  }}
                  id="img"
                  placeholder="Вставьте ссылку на картинку"
                  name="img"
                  defaultValue={img}
                  onChange={(e) => setImg(e.target.value)}
                  className="w-96"
                  rows={4}
                />
              </div>
              <div className="relative mb-12" data-te-input-wrapper-init>
                <textarea
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    border: 'solid black 1px',
                    padding: '2px',
                    resize: 'none',
                  }}
                  id="body"
                  placeholder="Описание"
                  name="body"
                  defaultValue={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="w-96"
                  rows={3}
                />
              </div>
              <div className="flex justify-evenly">
                <button
                  className=" py-2 px-7 bg-blue-700 text-white rounded hover:bg-blue-800 mb-10"
                  type="submit"
                >
                  Изменить
                </button>
                <button
                  className=" py-2 px-7 bg-blue-700 text-white rounded hover:bg-blue-800 mb-10"
                  type="button"
                  onClick={open}
                >
                  Закрыть
                </button>
              </div>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
