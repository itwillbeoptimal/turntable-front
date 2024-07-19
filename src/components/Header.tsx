import styled from 'styled-components';
import Logo from "../assets/images/logo.png"
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
    background-color: #000;
    color: #fff;
`;

const LeftSection = styled.div `
    flex: 1;
`

const CenterSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const RightSection = styled.div `
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

const Header = () => (
    <HeaderContainer>
            <LeftSection>
                <MenuIcon/>
            </LeftSection>
            <CenterSection>
                <img src={Logo} alt="turntable logo" style={{width: 100}} />
            </CenterSection>
            <RightSection>
                <SearchIcon style={{marginRight: 20}}/>
                <DiscIcon/>
            </RightSection>
    </HeaderContainer>
);

export default Header;
