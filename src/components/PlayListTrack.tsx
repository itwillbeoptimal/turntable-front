import React from 'react';
import styled from 'styled-components';
import {ReactComponent as PrevIcon} from "../assets/icons/prev.svg";

const TrackContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TrackHeader = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    font-size: 16px;
    text-align: left;
    padding: 0;
    font-family: 'Freesentation-7';
`;


const TrackList = styled.ul`
    list-style-type: none;
    padding: 0;
    font-family: 'Freesentation-5';
    font-size: 16px;
    color: #555;
`;

const TrackItem = styled.li`
    padding: 5px 0;
    border-bottom: 1px solid #EAE5E1;

    &:last-child {
        border-bottom: none;
    }
`;

interface PlayListItemProps {
    title: string;
    tracks: { title: string; duration: string; }[];
}

interface PlayListTrackProps {
    item: PlayListItemProps;
    onBack: () => void;
}

const PlayListTrack: React.FC<PlayListTrackProps> = ({ item, onBack }) => {
    return (
        <TrackContainer>
            <TrackHeader>
                <PrevIcon style={{marginRight: 5, cursor: "pointer"}} onClick={onBack}/>
                {item.title}
                </TrackHeader>
            <TrackList>
                {item.tracks.map((track, index) => (
                    <TrackItem key={index}>
                        {track.title} - {track.duration}
                    </TrackItem>
                ))}
            </TrackList>
        </TrackContainer>
    );
};

export default PlayListTrack;
