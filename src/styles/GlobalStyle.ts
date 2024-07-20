import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Freesentation-1';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-1Thin.woff2') format('woff2');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'Freesentation-2';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-2ExtraLight.woff2') format('woff2');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Freesentation-3';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-3Light.woff2') format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Freesentation-4';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-4Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Freesentation-5';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-5Medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Freesentation-6';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-6SemiBold.woff2') format('woff2');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Freesentation-7';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-7Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Freesentation-8';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-8ExtraBold.woff2') format('woff2');
        font-weight: 800;
        font-style: normal;
    }

    @font-face {
        font-family: 'Freesentation-9';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-9Black.woff2') format('woff2');
        font-weight: 900;
        font-style: normal;
    }

    body {
        margin: 0;
        padding: 0;
        color: #191919;
        background-color: #f5f5f5;
        font-family: 'Freesentation-4', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
