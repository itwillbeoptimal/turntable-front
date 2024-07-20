import styled from 'styled-components';
import {ReactComponent as Logo} from "../assets/images/logo.svg";
import {ReactComponent as MenuIcon} from "../assets/icons/menu.svg";
import {ReactComponent as SearchIcon} from "../assets/icons/search.svg";
import {ReactComponent as DiscIcon} from "../assets/icons/disc.svg";

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 45px;
    align-items: center;
    padding: 20px 30px 20px 30px;
    background-color: #EAE5E1;
    color: #fff;
`;

const LeftSection = styled.div`
    flex: 1;
`

const CenterSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const RightSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

interface HeaderProps {
    onDiscIconClick: () => void;
}

const Header: React.FC<HeaderProps> = ({onDiscIconClick}) => (
    <HeaderContainer>
        <LeftSection>
            <MenuIcon style={{cursor: "pointer"}}/>
        </LeftSection>
        <CenterSection>
            <Logo style={{cursor: "pointer"}}/>
        </CenterSection>
        <RightSection>
            <SearchIcon style={{marginRight: 20, cursor: "pointer"}}/>
            <DiscIcon style={{cursor: "pointer"}} onClick={onDiscIconClick}/>
        </RightSection>
    </HeaderContainer>
);

export default Header;
