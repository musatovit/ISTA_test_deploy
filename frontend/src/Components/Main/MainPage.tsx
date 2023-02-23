import React from 'react';
import Modal from '../Modal/Modal';

export default function MainPage(): JSX.Element {
  return (
    <>
      <img
        style={{ position: 'absolute', height: '700px', right: '0', marginTop: '3rem' }}
        src="/img/4.png"
        alt=""
      />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1
            className="clients md:text-5xl mt-20  "
            style={{
              position: 'absolute',
              top: '5rem',
              left: '7%',
              color: 'black',
              fontWeight: 'bolder',
              fontFamily: 'IBM Plex Sans',
            }}
          >
            Ваши клиенты вас найдут
          </h1>
          <h5
            className="md:text-base mt-20 "
            style={{
              position: 'absolute',
              top: '13rem',
              left: '7%',
              color: 'black',
              fontSize: '25px',
              fontFamily: 'IBM Plex Sans',
            }}
          >
            сотрудничаем с застройщиками,
          </h5>
          <h5
            className="md:text-base mt-20 absolute"
            style={{
              top: '15rem',
              left: '7%',
              color: 'black',
              fontSize: '25px',
              fontFamily: 'IBM Plex Sans',
            }}
          >
            риэлторскими агенствами и отелями
          </h5>
        </div>
        <div style={{ marginBottom: '7%', marginTop: '-5%' }}>
          <Modal />
        </div>
      </div>
    </>
  );
}
