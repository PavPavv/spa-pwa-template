import React from 'react';

import BigTimer from '../widgets/BigTimer';

const MainPage = (): JSX.Element => {
  return (
    <div style={{ height: '100vh', background: 'lightskyblue' }}>
      <section
        style={{ maxWidth: 700, margin: '0 auto', padding: '50px 0 0 0' }}
      >
        <h1>Main page</h1>
        <h2>PWA</h2>
        <BigTimer />
      </section>
    </div>
  );
};

export default MainPage;
