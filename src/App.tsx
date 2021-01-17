import React from 'react';
import GlobalStyle from './styles/global';
import Login from './pages/Login';

import AppProvider from './hooks';
// import Register from './pages/Register';

const App: React.FC = () => (
  <>
    <GlobalStyle />

    <AppProvider>
      <Login />
    </AppProvider>
  </>
);

export default App;
