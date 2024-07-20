import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    margin-bottom: 5px;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const CommentInput = styled.input`
    width: calc(95% - 150px);
    padding: 15px;
    margin-left: 15px;
    border: 1px solid #9e9e9e;
    border-radius: 30px;
    font-family: 'Freesentation-4', sans-serif;
    font-size: 14px;
    color: #191919;
    padding-right: 70px; 
`;

const InputButton = styled.button`
    padding: 6px 12px;
    border: none;
    border-radius: 30px;
    background-color: #5280EC;
    color: #fff;
    cursor: pointer;
    font-family: 'Freesentation-5', sans-serif;
    font-size: 14px;
    position: absolute;
    right: calc(2% + 12px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Comment = styled.div`
    display: flex;
    margin-top: 15px;
    width: calc(75% + 55px);
    padding: 17px 20px;
    background-color: #fff;
    border-radius: 4px;
`;

const UserProfileImage = styled.div<{ imageUrl: string }>`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
`;

const CommentContent = styled.div`
    display: flex;
    width: calc(100% - 60px);
    flex-direction: column;
    justify-content: center;
    margin-left: 14px;
`;

const UpperContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const rtf = new Intl.RelativeTimeFormat('ko', {numeric: 'auto'});

    if (seconds < 60) {
        return '방금 전';
    }

    const timeUnits: { unit: Intl.RelativeTimeFormatUnit, divisor: number }[] = [
        {unit: 'week', divisor: 60 * 60 * 24 * 7},
        {unit: 'day', divisor: 60 * 60 * 24},
        {unit: 'hour', divisor: 60 * 60},
        {unit: 'minute', divisor: 60},
        {unit: 'second', divisor: 1}
    ];

    for (const {unit, divisor} of timeUnits) {
        const value = seconds / divisor;
        if (Math.abs(value) >= 1) {
            return rtf.format(Math.floor(-value), unit);
        }
    }

    return '방금 전';
};

interface CommentProps {
    imageUrl: string;
    username: string;
    content: string;
    uploadTime: Date;
}

const CommentItem: React.FC<CommentProps> = ({imageUrl, username, content, uploadTime}) => (
    <Comment>
        <UserProfileImage imageUrl={imageUrl}/>
        <CommentContent>
            <UpperContent>
                <div style={{color: "#5280ec", fontSize: 14, fontFamily: 'Freesentation-6', marginBottom: 7}}>
                    @{username}
                </div>
                <div style={{color: "#9e9e9e", fontSize: 14, textAlign: "right", marginBottom: 7}}>
                    {formatRelativeTime(uploadTime)}
                </div>
            </UpperContent>
            <div style={{fontSize: 14}}>{content}</div>
        </CommentContent>
    </Comment>
);

interface CommentSectionProps {
    imageUrl: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({imageUrl}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
    };

    return (
        <Container>
            <InputContainer>
                <UserProfileImage imageUrl={imageUrl}/>
                <CommentInput
                    placeholder="방명록을 작성하세요 (100자 이내 작성 가능)"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                {inputValue && <InputButton onClick={handleButtonClick}>등록</InputButton>}
            </InputContainer>
            <CommentItem
                imageUrl="assets/images/profile_image2.webp"
                username="onegqueen"
                content="주인장 감성 미쳤다"
                uploadTime={new Date(new Date().getTime() - 5 * 60 * 1000)}
            />
            <CommentItem
                imageUrl="assets/images/profile_image3.jpeg"
                username="l4o5z6"
                content="검정치마 노래 좋아하세요?"
                uploadTime={new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000)}
            />
        </Container>
    );
};

export default CommentSection;
