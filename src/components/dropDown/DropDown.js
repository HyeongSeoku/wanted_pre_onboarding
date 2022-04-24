import { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../../constants/standard";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dropDownData } from "../../constants/componentsData";

const DropDown = () => {
  const [selected, setSelected] = useState("All Teams");
  const [searchWord, setSearchWord] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState(dropDownData);

  useEffect(() => {
    if (!isMenuOpen) setSearchWord("");
  }, [isMenuOpen]);

  useEffect(() => {
    if (searchWord === "") {
      setData(dropDownData);
      return;
    } else {
      const newData = dropDownData.filter((i) =>
        i.replace(/ /g, "").toLowerCase().startsWith(searchWord.toLowerCase())
      );
      setData(newData);
    }
  }, [searchWord]);

  const onClickSelecter = () => {
    setIsMenuOpen((current) => !current);
  };

  const onChangeSearch = (e) => {
    const { value } = e.target;
    setSearchWord(value);
  };

  const handleSelectItem = (e) => {
    const { symbol } = e.target.dataset;
    setSearchWord(symbol);
    setSelected(symbol);
    setIsMenuOpen(false);
  };

  return (
    <Container>
      <Title>드롭 다운</Title>
      <SelectedDiv onClick={onClickSelecter}>
        <SelectedSpan>{selected}</SelectedSpan>
        <Icon>
          <FontAwesomeIcon icon={faCaretDown} />
        </Icon>
      </SelectedDiv>
      {isMenuOpen && (
        <DropDownContainer>
          <SearchDiv>
            <SearchIcon>
              <FontAwesomeIcon icon={faSearch} />
            </SearchIcon>
            <SearchInput
              placeholder="Search Teams"
              autoFocus
              value={searchWord}
              onChange={onChangeSearch}
            />
          </SearchDiv>
          <DropDownItemContainer>
            {data.map((item, idx) => (
              <DropDownItem
                key={idx}
                data-symbol={item}
                onClick={handleSelectItem}
              >
                {item}
              </DropDownItem>
            ))}
          </DropDownItemContainer>
        </DropDownContainer>
      )}
    </Container>
  );
};
export default DropDown;

const Container = styled.div`
  width: 80%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
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
  margin-top: 10px;
  font-weight: bold;
`;

const SelectedDiv = styled.div`
  width: 80%;
  height: 35px;
  border: 1px solid ${(props) => props.theme.componentBgColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 0px;
  border-radius: 4px;

  margin-top: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const SelectedSpan = styled.span`
  margin-left: 10px;
  font-size: 17px;
`;

const Icon = styled.div`
  margin-left: auto;
  margin-right: 10px;
`;

const DropDownContainer = styled.div`
  width: 80%;
  border: 1px solid ${(props) => props.theme.componentBgColor};
  box-sizing: border-box;
  padding: 5px 0px;
  margin-top: 3px;
  border-radius: 4px;
  overflow: scroll;
`;

const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.componentBgColor};
`;

const SearchInput = styled.input`
  width: 90%;
  box-sizing: border-box;
  padding: 5px 10px;
  border: none;
  background: transparent;
  color: ${(props) => props.theme.textColor};

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.div`
  width: 10%;
  margin-left: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.componentTextColor};
`;

const DropDownItemContainer = styled.div`
  width: 100%;
  max-height: 200px;
  overflow: scroll;
`;

const DropDownItem = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-size: 15px;
  padding: 7px 15px;
  text-align: start;
  color: ${(props) => props.theme.componentTextColor};
  &:hover {
    background-color: ${(props) => props.theme.componentBgColor};
  }
`;
