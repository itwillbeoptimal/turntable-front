import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import AlbumDisplay from '../components/AlbumDisplay';
import CommentSection from '../components/CommentSection';

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px 30px;
`;

interface MainPageProps {
    username: string;
}

const MainPage: React.FC<MainPageProps> = ({ username }) => (
    <>
        <Header />
        <Container>
            <div style={{fontFamily: 'Freesentation-7', fontSize: 24, paddingTop: 20, paddingBottom: 20}}>@{username}</div>
            <AlbumDisplay
                imageUrl="https://musicmeta-phinf.pstatic.net/album/002/840/2840793.jpg?type=r360Fll&v=20230608184200"
                title="그늘은 그림자로"
                artist="검정치마"
            />
            <CommentSection imageUrl="assets/images/profile_image1.jpg"/>
        </Container>
    </>
);

export default MainPage;
