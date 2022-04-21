import logo from "./logo.svg";
import "./App.css";
import Toggle from "./components/Toggle";
import styled from "styled-components";
import { device, PC_MODE } from "./constants/standard";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./util/theme";
import { useRecoilValue } from "recoil";
import { themeMode } from "./util/atoms";

function App() {
  const mode = useRecoilValue(themeMode);
  return (
    <ThemeProvider theme={theme[mode]}>
      <div className="App">
        <Container>
          <Header />
          <Toggle />
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
  padding: 5px;
  transition: all 0.4s ease;
  color: ${(props) => props.theme.textColor};

  @media ${device.laptop} {
    max-width: 50%;
  }
  @media ${device.desktop} {
    max-width: 50%;
  }
`;
