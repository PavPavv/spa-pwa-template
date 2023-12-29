import React, { lazy } from 'react';

import './styles/index.scss';

const MainPage = lazy(() => import('../pages/MainPage'));

const App = (): JSX.Element => {
  return (
    <>
      <MainPage />
    </>
  );
};

export default App;
