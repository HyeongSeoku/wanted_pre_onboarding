import styled from "styled-components";

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
`;

const NavText = styled.span``;
