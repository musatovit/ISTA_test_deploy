import React from 'react';
import DescriptionCardPage from './DescriptionCardPage';

export default function AboutUs(): JSX.Element {
  return (
    <div>
      <div style={{ margin: '7em 2em 3em' }}>
        <h1
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: '35px',
            fontFamily: 'IBM Plex Sans',
          }}
        >
          Почему вам стоит выбрать нас?
        </h1>
        <h5 style={{ color: 'black', fontFamily: 'IBM Plex Sans' }}>
          Мы - маркетинговое агентство для сферы недвижимости с 2-х летним опытом и
          множеством успешных кейсов.
        </h5>
      </div>
      <center>
        <h2
          style={{
            fontWeight: 'bold',
            color: 'black',
            marginTop: '25px',
            fontSize: '30px',
            fontFamily: 'IBM Plex Sans',
          }}
        >
          Наши инструменты
        </h2>
        <br />
        <br />
      </center>
      <DescriptionCardPage />
    </div>
  );
}
