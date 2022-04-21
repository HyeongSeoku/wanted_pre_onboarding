import logo from "./logo.svg";
import "./App.css";
import Toggle from "./components/toggle/Toggle";
import styled from "styled-components";
import { device, PC_MODE } from "./constants/standard";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./util/theme";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { themeMode } from "./util/atoms";
import Tab from "./components/tab/Tab";

function App() {
  const mode = useRecoilValue(themeMode);

  return (
    <ThemeProvider theme={theme[mode]}>
      <div className="App">
        <Container>
          <Header />
          <ComponentArea>
            <Toggle />
          </ComponentArea>
          <ComponentArea>
            <Tab />
          </ComponentArea>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  box-sizing: border-box;
  padding: 10px 15px;
  transition: all 0.4s ease;
  color: ${(props) => props.theme.textColor};
  font-size: 1.2rem;
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
