import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import AlbumDisplay from '../components/AlbumDisplay';
import CommentSection from '../components/CommentSection';
import PlayList from "../components/PlayList";

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px 30px;
`;

interface MainPageProps {
    username: string;
}

const playListItems = [
    {
        imageUrl: "https://musicmeta-phinf.pstatic.net/album/002/014/2014761.jpg?type=r360Fll&v=20230608184159",
        title: "Playlist 1",
        description: "description 1",
        playingTime: "3:45",
        liked: true,
        tracks: [
            { title: "Track 1", duration: "3:00" },
            { title: "Track 2", duration: "2:45" },
        ],
    },
    {
        imageUrl: "https://musicmeta-phinf.pstatic.net/album/002/005/2005984.jpg?type=r360Fll&v=20230331144254",
        title: "Playlist 2",
        description: "description 2",
        playingTime: "4:05",
        liked: false,
        tracks: [
            { title: "Track A", duration: "4:00" },
            { title: "Track B", duration: "3:55" },
        ],
    },
];

const MainPage: React.FC<MainPageProps> = ({ username }) => {
    const [showPlayList, setShowPlayList] = useState(false);

    return (
        <>
            <Header onDiscIconClick={() => setShowPlayList(!showPlayList)} />
            {showPlayList && <PlayList items={playListItems} />}
            <Container>
                <div style={{ fontFamily: 'Freesentation-7', fontSize: 24, paddingTop: 20, paddingBottom: 20 }}>@{username}</div>
                <AlbumDisplay
                    imageUrl="https://musicmeta-phinf.pstatic.net/album/002/840/2840793.jpg?type=r360Fll&v=20230608184200"
                    title="그늘은 그림자로"
                    artist="검정치마"
                />
                <CommentSection imageUrl={`${process.env.PUBLIC_URL}/assets/images/profile_image1.jpg`} />
            </Container>
        </>
    );
};

export default MainPage;
