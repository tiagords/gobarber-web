import React from 'react';
import GlobalStyle from './styles/global';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
// import Register from './pages/Register';

const App: React.FC = () => (
  <>
    <GlobalStyle />

    <AuthProvider>
      <Login />
    </AuthProvider>
  </>
);

export default App;
