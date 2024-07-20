import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as LikeIcon } from "../assets/icons/like.svg";
import { ReactComponent as UnlikeIcon } from "../assets/icons/unlike.svg";

const PlayListContainer = styled.div`
    position: absolute;
    top: 85px;
    right: 0;
    width: 25%;
    min-width: 250px;
    height: 100%;
    background-color: #F9F9F9;
    padding: 20px;
    border-top: 1px solid #EAE5E1;
    z-index: 1000;
    overflow-y: auto;
`;

const PlayListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid rgba(196, 196, 196, 0.5);
`;

const RepresentativeCover = styled.div<{ imageUrl: string }>`
    width: 55px;
    height: 55px;
    border-radius: 8px;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    margin-right: 15px;
    filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.12));
    flex-shrink: 0;
`;

const PlayListDetail = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 14px;

    .upper-content {
        font-weight: bold;
        margin-bottom: 3px;
    }

    .lower-content {
        display: flex;
        justify-content: space-between;

        .left-content {
            flex: 4;
            margin-right: 5px;
            color: #555;
        }

        .right-content {
            flex: 1;
            margin-left: 5px;
            text-align: right;
            color: #9e9e9e
        }
    }
`;

interface PlayListItemProps {
    imageUrl: string;
    title: string;
    description: string;
    playingTime: string;
    liked: boolean;
}

interface PlayListProps {
    items: PlayListItemProps[];
}

const PlayList: React.FC<PlayListProps> = ({ items }) => {
    const [playListItems, setPlayListItems] = useState(items);

    useEffect(() => {
        setPlayListItems(items);
    }, [items]);

    const toggleLike = (index: number) => {
        setPlayListItems(prevItems =>
            prevItems.map((item, i) =>
                i === index ? { ...item, liked: !item.liked } : item
            )
        );
    };

    return (
        <PlayListContainer>
            <div style={{ fontFamily: 'Freesentation-5', marginBottom: '5px' }}>플레이리스트</div>
            {playListItems.map((item, index) => (
                <PlayListItem key={index}>
                    <RepresentativeCover imageUrl={item.imageUrl}/>
                    <PlayListDetail>
                        <div className="upper-content">
                            {item.title}
                        </div>
                        <div className="lower-content">
                            <div className="left-content">
                                {item.description}
                            </div>
                            <div className="right-content">
                                {item.playingTime}
                            </div>
                        </div>
                    </PlayListDetail>
                    <div style={{cursor: "pointer", marginLeft: 20, marginRight: 2}} onClick={() => toggleLike(index)}>
                        {item.liked ? <LikeIcon/> : <UnlikeIcon/>}
                    </div>
                </PlayListItem>
            ))}
        </PlayListContainer>
    );
}

export default PlayList;
