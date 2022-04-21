import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { themeMode } from "../util/atoms";

const DarkModeSwitch = () => {
  const setIsDarkMode = useSetRecoilState(themeMode);

  const handleDarkMode = (e) => {
    const { checked } = e.target;
    if (checked) setIsDarkMode("dark");
    else setIsDarkMode("light");
  };

  return (
    <CheckBoxWrapper>
      <CheckBox id="switch" onChange={handleDarkMode} />
      <CheckBoxLabel htmlFor="switch" />
    </CheckBoxWrapper>
  );
};

export default DarkModeSwitch;

const CheckBoxWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.switchBgColor};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input.attrs({ type: "checkBox" })`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  background-color: ${(props) => props.theme.switchBgColor};

  &:checked + ${CheckBoxLabel} {
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      background: #000;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
