import styled from "styled-components";
import DarkModeSwitch from "./darkModeSwitch/DarkModeSwitch";
import LogoSrc from "../imgs/logo.png";
import { device } from "../constants/standard";

const Header = () => {
  const onClickLogo = () => {
    window.location.reload(false);
  };

  return (
    <HeaderTag>
      <Logo onClick={onClickLogo}>
        <LogoImg />
      </Logo>
      <DarkModeSwitch />
    </HeaderTag>
  );
};

export default Header;

const HeaderTag = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 8px;
  position: sticky;
  box-sizing: border-box;
  padding: 10px 0px;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.headerBgColor};
`;

const Logo = styled.div``;

const LogoImg = styled.img.attrs({
  src: LogoSrc,
})`
  width: 70px;

  @media ${device.laptop} {
    width: 100px;
  }
  @media ${device.desktop} {
    width: 100px;
  }
`;
