import logo from "./logo.svg";
import "./App.css";
import Toggle from "./components/toggle/Toggle";
import styled from "styled-components";
import { device } from "./constants/standard";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./util/theme";
import { useRecoilValue } from "recoil";
import { themeMode } from "./util/atoms";
import Tab from "./components/tab/Tab";
import Input from "./components/input/Input";
import Slider from "./components/slider/Slider";
import DropDown from "./components/dropDown/DropDown";

function App() {
  const mode = useRecoilValue(themeMode);

  return (
    <ThemeProvider theme={theme[mode]}>
      <div className="App">
        <ContentsContainer>
          <Header />
          <ComponentArea>
            <Toggle />
          </ComponentArea>
          <ComponentArea>
            <Tab />
          </ComponentArea>
          <ComponentArea>
            <Slider />
          </ComponentArea>
          <ComponentArea>
            <Input />
          </ComponentArea>
          <ComponentArea>
            <DropDown />
          </ComponentArea>
        </ContentsContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const ContentsContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  box-sizing: border-box;
  padding: 10px 15px;
  transition: all 0.4s ease;
  color: ${(props) => props.theme.textColor};
  font-size: 1.2rem;
  overflow: scroll;

  @media ${device.laptop} {
    max-width: 50%;
    font-size: 1.1rem;
  }
  @media ${device.desktop} {
    max-width: 50%;
    font-size: 1.1rem;
  }
`;

const ComponentArea = styled.div`
  min-height: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset;
  background-color: ${(props) => props.theme.componentAreaBgColor};
  margin-bottom: 15px;
  padding: 10px;
`;
