import { useEffect, useState } from "react";
import styled from "styled-components";
import { sliderData } from "../../constants/componentsData";
import { device } from "../../constants/standard";

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {}, []);

  const onChangeSlider = (e) => {
    const { value } = e.target;
    setSliderValue(value);
  };

  const onClickTag = (e) => {
    const { tag } = e.target.dataset;
    setSliderValue(tag);
  };

  return (
    <Container>
      <Title>슬라이더</Title>
      <Board>
        <BoardText>{sliderValue}</BoardText>
        <BoardPercent>%</BoardPercent>
      </Board>
      <SliderInput
        type="range"
        min="0"
        max="100"
        list="tickmarks"
        onChange={onChangeSlider}
        value={sliderValue}
      />
      <TagContainer>
        {sliderData.map((item, idx) => (
          <TagSpan key={idx} data-tag={item} onClick={onClickTag}>
            {item}%
          </TagSpan>
        ))}
      </TagContainer>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    max-width: 50%;
    font-size: 1.1rem;
  }
  @media ${device.desktop} {
    max-width: 50%;
    font-size: 1.1rem;
  }
`;

const Title = styled.div`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const BoardText = styled.span`
  margin-left: auto;
  margin-right: 10px;
  font-weight: bold;
`;

const BoardPercent = styled.span`
  font-size: 15px;
`;

const Board = styled.div`
  width: 93%;
  height: 40px;
  border: 1px solid;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 5px;
`;

const SliderInput = styled.input`
  width: 93%;
  color: ${(props) => props.theme.mainColor};

  /* &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${(props) => props.theme.sliderMainColor};
    margin-top: -4px;
  } */
`;

const TagContainer = styled.div`
  width: 93%;
  display: flex;
  margin-top: 3px;
  flex-direction: row;
  justify-content: space-between;
`;

const TagSpan = styled.span`
  width: 33px;
  height: 20px;
  font-size: 12px;
  text-align: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.componentBgColor};
  color: ${(props) => props.theme.textColor};
  padding: 1px;
  opacity: 0.5;
  &:hover {
    background-color: ${(props) => props.theme.mainColor};
    opacity: 1;
    cursor: pointer;
  }
`;
