import styled from "styled-components";
import { device } from "../../constants/standard";

const NavItem = ({
  title,
  index,
  currentMenu,
  setCurrentMenu,
  navRef,
  setCurrentIdx,
}) => {
  const onClickNavMenu = (e) => {
    const { value } = e.currentTarget.dataset;
    setCurrentMenu(value);
    setCurrentIdx(index);
  };

  return (
    <NavItemContainer
      data-value={title}
      onClick={onClickNavMenu}
      isSelected={currentMenu === title}
      ref={navRef}
    >
      <NavText>{title}</NavText>
    </NavItemContainer>
  );
};

export default NavItem;

const NavItemContainer = styled.li`
  list-style: none;
  width: 33%;
  opacity: ${(props) => (props.isSelected ? 1 : 0.5)};

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  @media ${device.mobileM} {
    font-size: 15px;
  }
  @media ${device.mobileS} {
    font-size: 15px;
  }
`;

const NavText = styled.span``;
