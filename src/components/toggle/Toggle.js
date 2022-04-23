import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { device } from "../../constants/standard";
import { toggleData } from "../../constants/componentsData";

const Toggle = () => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderLeft, setSliderLeft] = useState(0);
  const [select, setSelect] = useState("");
  const labelRef = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    if (select === "기본") {
      setSliderLeft(0);
      return;
    }
    if (select === "상세") {
      setSliderLeft(sliderWidth - 1);
      return;
    }
  }, [select]);

  const handleToggle = (e) => {
    const { value } = e.target.dataset;
    setSliderWidth(labelRef.current.offsetWidth - 1);
    setSelect(value);
  };

  return (
    <Container>
      <Title>토글</Title>
      <ToggleContainer>
        <RadioGroup>
          {toggleData.map((item, idx) => (
            <Label key={idx} ref={labelRef}>
              <RadioBtn type="radio" name="radio" value={item} id={item} />
              <RadioText
                htmlFor={item}
                data-value={item}
                onClick={handleToggle}
              >
                {item}
              </RadioText>
            </Label>
          ))}
          <ToggleSlider
            ref={sliderRef}
            sliderWidth={sliderWidth}
            sliderLeft={sliderLeft}
          ></ToggleSlider>
        </RadioGroup>
      </ToggleContainer>
    </Container>
  );
};

export default Toggle;

const Container = styled.div`
  width: 100%;
`;

const ToggleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RadioGroup = styled.div`
  width: 70%;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.componentBgColor};
  transition: all 0.3s ease;

  @media ${device.laptop} {
    width: 25%;
  }

  @media ${device.desktop} {
    max-width: 25%;
  }
`;

const RadioText = styled.span`
  position: relative;
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  min-height: 30px;
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
`;

const ToggleSlider = styled.span`
  display: inline-block;
  position: absolute;
  background-color: ${(props) => props.theme.toggleColor};
  margin: 1px;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: ${(props) => props.sliderLeft + "px"};
  border-radius: 14px;
  &:hover {
    cursor: pointer;
  }
  width: ${(props) => props.sliderWidth + "px"};
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  transition: left 0.4s ease;
`;

const RadioBtn = styled.input`
  & + ${RadioText} {
    opacity: 0.4;
  }
  &:checked + ${RadioText} {
    opacity: 1;
  }
  &:checked {
    background: none;
    display: none;
  }

  display: none;
`;

const Label = styled.label`
  width: 50%;
`;

const Title = styled.div`
  display: block;
  margin-bottom: 30px;
  font-weight: bold;
`;
