import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as LikeIcon } from "../assets/icons/like.svg";
import { ReactComponent as UnlikeIcon } from "../assets/icons/unlike.svg";
import { ReactComponent as OptionIcon } from "../assets/icons/option.svg";
import PlayListTrack from './PlayListTrack';

const PlayListContainer = styled.div`
    position: absolute;
    top: 85px;
    right: 0;
    width: 33%;
    min-width: 275px;
    height: 100%;
    background-color: #F9F9F9;
    padding: 20px;
    border-top: 1px solid #EAE5E1;
    z-index: 1000;
    overflow-y: auto;
`;

const PlayListItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 10px;
    border-bottom: 1px solid rgba(196, 196, 196, 0.5);
    cursor: pointer;
    list-style: none;
    
    &:last-child {
        border: none;
    }
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

const PlayListDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 14px;

    .upper-content {
        font-family: 'Freesentation-6';
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
            color: #9e9e9e;
        }
    }
`;

interface PlayListItemProps {
    imageUrl: string;
    title: string;
    description: string;
    playingTime: string;
    liked: boolean;
    tracks: { title: string; duration: string; }[];
}

interface PlayListProps {
    items: PlayListItemProps[];
}

const PlayList: React.FC<PlayListProps> = ({ items }) => {
    const [playListItems, setPlayListItems] = useState(items);
    const [selectedItem, setSelectedItem] = useState<PlayListItemProps | null>(null);

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

    const handleItemClick = (item: PlayListItemProps) => {
        setSelectedItem(item);
    };

    const handleBackClick = () => {
        setSelectedItem(null);
    };

    if (selectedItem) {
        return (
            <PlayListContainer>
                <PlayListTrack item={selectedItem} onBack={handleBackClick} />
            </PlayListContainer>
        );
    }

    return (
        <PlayListContainer>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <div style={{ fontFamily: 'Freesentation-5' }}>플레이리스트</div>
                <div style={{
                    background: "#191919",
                    color: "white",
                    padding: "0 8px",
                    height: 18,
                    marginLeft: 5,
                    borderRadius: 15,
                    fontFamily: "Freesentation-7",
                    fontSize: 12,
                    display: "inline-flex",
                    alignItems: "center"
                }}>{playListItems.length}</div>
            </div>
            <ul style={{listStyle: "none", padding: 0}}>
                {playListItems.map((item, index) => (
                    <PlayListItem key={index} onClick={() => handleItemClick(item)}>
                        <RepresentativeCover imageUrl={item.imageUrl} />
                        <PlayListDetailContainer>
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
                        </PlayListDetailContainer>
                        <div style={{ cursor: "pointer", marginLeft: 20, marginRight: 2 }}
                             onClick={(e) => { e.stopPropagation(); toggleLike(index); }}>
                            {item.liked ? <LikeIcon /> : <UnlikeIcon />}
                        </div>
                        <div style={{ cursor: "pointer", marginLeft: 10 }}>
                            <OptionIcon />
                        </div>
                    </PlayListItem>
                ))}
            </ul>
        </PlayListContainer>
    );
}

export default PlayList;
