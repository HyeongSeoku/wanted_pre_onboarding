import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { tabData } from "../../constants/componentsData";
import { device } from "../../constants/standard";
import NavItem from "./NavItem";

const Tab = () => {
  const [navItemWidth, setNavItemWidth] = useState(0);
  const [currentMenu, setCurrentMenu] = useState("");
  const [currentImg, setCurrentImg] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const navItemRef = useRef();

  useEffect(() => {
    setNavItemWidth(navItemRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    if (currentMenu !== "") {
      const data = tabData.find((i) => i.title === currentMenu);
      setCurrentImg(data.contents);
      return;
    }
  }, [currentMenu]);

  return (
    <TabContainer>
      <Nav>
        {tabData.map((item, idx) => (
          <NavItem
            key={idx}
            title={item.title}
            index={idx}
            currentMenu={currentMenu}
            setCurrentMenu={setCurrentMenu}
            navRef={navItemRef}
            setCurrentIdx={setCurrentIdx}
          />
        ))}
      </Nav>
      <SelectBar>
        <SelectSlider
          sliderWidth={navItemWidth}
          currentIdx={currentIdx}
        ></SelectSlider>
      </SelectBar>
      <ContentsArea>
        {currentMenu === "" ? (
          <div>메뉴를 탭해보세요</div>
        ) : (
          <Img imgSrc={currentImg} />
        )}
      </ContentsArea>
    </TabContainer>
  );
};

export default Tab;

const TabContainer = styled.div`
  width: 70%;
  @media ${device.laptop} {
    max-width: 50%;
  }
  @media ${device.desktop} {
    max-width: 50%;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;

const SelectBar = styled.div`
  background-color: ${(props) => props.theme.componentBgColor};
  height: 2px;
  position: relative;
`;

const SelectSlider = styled.span`
  display: inline-block;
  position: absolute;
  left: ${(props) =>
    props.currentIdx === 0
      ? "10px"
      : props.sliderWidth * props.currentIdx + "px"};
  top: 0;
  bottom: 0;
  width: ${(props) => props.sliderWidth + "px"};
  height: 100%;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 14px;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  transition: left 0.4s ease;
`;

const ContentsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  max-height: 400px;
  overflow: hidden;
  text-align: center;
`;

const Img = styled.img.attrs((props) => ({
  src: props.imgSrc,
}))`
  max-width: 30%;
  margin-top: 20px;
`;
