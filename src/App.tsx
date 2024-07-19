import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/MainPage';

const App: React.FC = () => (
    <>
        <GlobalStyle />
        <MainPage username="turntable_official" />
    </>
);

export default App;
