import styled from "styled-components";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <Div>
      <span>헤더영역</span>
      <DarkModeSwitch />
    </Div>
  );
};

export default Header;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
