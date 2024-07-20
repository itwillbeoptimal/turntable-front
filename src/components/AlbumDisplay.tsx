import React from 'react';
import styled, { keyframes } from 'styled-components';
import LPImage from '../assets/images/lp.png';
import SoundWave from "./SoundWave";

const LPContainer = styled.div`
    position: relative;
    width: 320px;
    height: 250px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Optional: Remove or adjust filter if necessary */
    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));
`;

const AlbumArt = styled.div<{ imageUrl: string }>`
    position: absolute;
    left: 0;
    top: 15px;
    width: 215px;
    height: 210px;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    z-index: 2;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const LP = styled.img`
    position: absolute;
    width: 207px;
    right: 0;
    top: 17px;
    z-index: 1;
    animation: ${rotate} 10s linear infinite;
`;

const MusicInfo = styled.div`
    display: flex;
    width: 320px;
    margin: 10px auto;
    justify-self: center;
    align-self: center;
`;

const TextInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-left: 15px;
`;

interface AlbumDisplayProps {
    imageUrl: string;
    title: string;
    artist: string;
}

const AlbumDisplay: React.FC<AlbumDisplayProps> = ({ imageUrl, title, artist }) => (
    <>
        <LPContainer>
            <AlbumArt imageUrl={imageUrl} />
            <LP src={LPImage} alt="LP" />
        </LPContainer>
        <MusicInfo>
            <SoundWave />
            <TextInfo>
                <div style={{ fontFamily: 'Freesentation-5' }}>{artist}</div>
                <div style={{ color: '#9e9e9e' }}>{title}</div>
            </TextInfo>
        </MusicInfo>
    </>
);

export default AlbumDisplay;
