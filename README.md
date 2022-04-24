# wanted_pre_onboarding

원티드 프리온보딩 프론트엔드 4차 코스 과제 레포지토리입니다.

## [🚀데모](https://hyeongseoku.github.io/wanted_pre_onboarding)

## 사용 기술 스택

- React
- JavaScript
- styled-component
- recoil
- fontAwesome (library for icon)

## 디렉토리 구조

```
.
├── App.css
├── App.js
├── components
│   ├── Header.js
│   ├── darkModeSwitch
│   │   └── DarkModeSwitch.js
│   ├── dropDown
│   │   └── DropDown.js
│   ├── input
│   │   └── Input.js
│   ├── slider
│   │   └── Slider.js
│   ├── tab
│   │   ├── NavItem.js
│   │   └── Tab.js
│   └── toggle
│       └── Toggle.js
├── constants
│   ├── componentsData.js
│   └── standard.js
├── imgs
│   ├── cury.png
│   ├── logo.png
│   ├── potato.png
│   └── sweetPotato.png
├── index.css
├── index.js
├── logo.svg
├── src.txt
└── util
    ├── atoms.js
    └── theme.js

10 directories, 22 files
```

- components : 컴포넌트들을 담아두는 디렉토리
- constants : 과제 구현에 필요한 각종 상수 데이터를 담아둔 디렉토리 입니다.
- util : 리코일을 위한 atom.js와 테마를 위한 theme.js 파일이 있는 디렉토리입니다.
- imgs : 각종 이미지를 위한 디렉토리입니다.

<br>

---

## 구현 완료 목록

- [x] Toggle.js

  - [x] 핵심 요소 : 버튼을 누를 때마다 선택된 항목이 변한다.
  - [x] 부가 요소 : 슬라이드 애니메이션

- [x] Tab.js

  - [x] 핵심 요소 : 버튼을 누를 때 마다 선택된 탭이 변한다.
  - [x] 부가 요소 : 슬라이드 애니메이션

- [x] Slider.js

  - [x] 핵심 요소 : 슬라이더를 움직이면 상단의 값이 자동으로 변한다.
  - [x] 부가 요소 : 하단 버튼과 미려한 픽셀 매칭

- [x] Input.js

  - [x] 핵심 요소 : 인풋창에 이메일과 비밀번호 입력이 가능하다
  - [x] 부가 요소 : 이메일 형식에 맞을 경우 자동으로 체크 표시
  - [x] 부가 요소 : 비밀번호 입력란 우측 눈 표시를 누르면 비밀번호가 노출된다

- [x] Dropdown.js

  - [x] 핵심 요소 : 드롭다운을 누르면 선택창이 펼쳐지고, 아무거나 골라 클릭하면 선택된 항목으로 변경됨
  - [x] 부가 요소 : 키워드 필터 기능 구현

  <br>

  ***

  <br>

## 구현 세부 설명

### **Toggle.js**

![wanted_toggle_demo](https://user-images.githubusercontent.com/48541850/164887033-f4ca5bb0-b2b0-4388-804d-b411a8d5dcf4.gif)

### 💡 구현 전 구상

- 라디오 버튼을 만들어서 클릭된 값의 배경 색상을 변경해야겠다!

### 😢 어려웠던 점

- 구상한 아이디어가 클릭된 배경 색상이 애니메이션으로 왔다갔다하며 바뀌는 방식이 아니라서 애를 먹었다..

### 🔥 해결 방법

- 애니메이션을 담당하는 요소를 만들고 클릭되지 않으면 뜨지 않도록하고 클릭된 값에 따라 left 값을 바꿔서 좌우로 이동하도록 구현 하였다

  ```js
  //토글 애니메이션을 담당하는 요소
  ...
  <ToggleSlider
              ref={sliderRef}
              sliderWidth={sliderWidth}
              sliderLeft={sliderLeft}
            ></ToggleSlider>
  ...

  //토글 애니메이션을 담당하는 요소의 css

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

  ```

---

### **Tab.js**

![wanted_tab_demo](https://user-images.githubusercontent.com/48541850/164887024-f36897cb-24b8-45dd-96f5-8e0774d5ff4a.gif)

### 💡 구현 전 구상

- nav 태그에 데이터에 따라 탭을 랜더링하는 NavItem이라는 컴포넌트를 만들어서 랜더링 해야겠다

### 😢 어려웠던 점

- 크게 어려웠던 점은 없고 애니메이션은 위의 Toggle과 동일하게 작동하도록 작성했습니다.

### ⭐️ 자랑할 점

- 탭에 따라 이미지가 바뀌도록 구현해봤습니다.

  ```js
  //Tab 컴포넌트의 구조
  <TabContainer>
    <Title>탭</Title>
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
        currentMenu={currentMenu}
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
  </TabContainer>;

  //선택된 메뉴에 따라서 하단의 컨텐츠(그림)이 바뀌도록 구현
  useEffect(() => {
    if (currentMenu !== "") {
      const data = tabData.find((i) => i.title === currentMenu);
      setCurrentImg(data.contents);
      return;
    }
  }, [currentMenu]);
  ```

---

### **Slider.js - 난이도 4~30**

![wanted_slider_demo](https://user-images.githubusercontent.com/48541850/164887111-025130fe-4fba-4cf6-ba8b-ef311b8634ff.gif)

### 💡 구현 전 구상

- input type에 range 속성을 줘서 구현하고 value가 바뀔때마다 state를 바꿔주고 하단의 태그들에는 해당된 숫자만큼의 값을 주고 클릭시 해당 값으로 state가 바뀌도록 구현하면 될 것 같다.

### 😢 어려웠던 점

- -webkit-slider-runnable-track 과 -webkit-slider-thumb CSS를 바꾸는 방법을 정확히 모르겠어서 구현하지 못했습니다..

```js
//slider 의 구조
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
```

---

### **Input.js - 난이도 4~12**

![wanted_input_demo](https://user-images.githubusercontent.com/48541850/164886964-d4f3b237-86d0-46c7-b415-c908c19e6bb9.gif)

### 💡 구현 전 구상

- input을 두개 만들고 , email을 담당하는 input에는 이메일 체크 정규식을 활용하여 입력 값이 정확한지 validation을 표현하도록하고 password를 담당하는 input에는 type을 password로 준 뒤 아이콘이 클릭됨에 따라 type을 text로 바꿨다 원래대로 돌아왔다 하도록 구현하면 되겠다.

- onFoucs와 onBlur를 사용하여 이메일을 입력중일때는 invalid massage가 뜨지 않도록 구현하였습니다.

### 😢 어려웠던 점

- 크게 어려웠던 점은 없습니다. InputContainer의 opacity 때문에 조금 시간이 걸렸던 것을 제외한다면,

### 🔥 해결 방법

```js
//with-in을 이용하여 InputContainer의 자식인 input이 foucs인지 판단하여 opacity 변경
const InputContainer = styled.div`
  width: 75%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 3px 5px;
  opacity: 0.4;
  background-color: ${(props) => props.theme.componentBgColor};
  &:focus-within {
    opacity: 1;
  }
`;

//이메일이 유효한지 확인하여 opacity 변경
const EmailIcon = styled.span`
  opacity: ${(props) => (props.isEmail ? 1 : 0.4)}!important;
  color: ${(props) =>
    props.isEmail ? props.theme.mainColor : props.theme.textColor};
`;
```

---

### **Dropdown.js**

![wanted_dropDown_demo](https://user-images.githubusercontent.com/48541850/164886954-97136076-81d3-485e-aa14-0de6eba65f80.gif)

### 💡 구현 전 구상

- `selected` state값에 따라 text 값이 바뀌도록 바뀌도록 구현하고, `selected` state를 All Teams로 초기화, `data`state값에 따라 DropDown으로 펼쳐질 요소들을 랜더링 하면 되겠다.
- `search`state로 search input의 값을 저장하고. 모든 데이터가 담긴`dropDownData`에서 `search`값을 includes 하는 값들을 filter로 다시 `data`state에 저장해주면 되겠다.

### 😢 어려웠던 점

- 구현해봤던 컴포넌트라서 크게 어려웠던 점은 없었습니다.

### ⭐️ 자랑할 점

- 데이터에 공백도 제거하여 set 해준점

  ```js
  useEffect(() => {
    if (searchWord === "") {
      setData(dropDownData);
      return;
    } else {
      const newData = dropDownData.filter((i) =>
        i.replace(/ /g, "").toLowerCase().includes(searchWord.toLowerCase())
      );
      setData(newData);
    }
  }, [searchWord]);
  ```

- 메뉴 열림이 닫힘(false)일 경우 `search`state 초기화
  ```js
  useEffect(() => {
    if (!isMenuOpen) setSearchWord("");
  }, [isMenuOpen]);
  ```

```js
//DropDown 의 구조
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
          <DropDownItem key={idx} data-symbol={item} onClick={handleSelectItem}>
            {item}
          </DropDownItem>
        ))}
      </DropDownItemContainer>
    </DropDownContainer>
  )}
</Container>
```

---

## 소감 및 추가 정보

### 소감

구현하면서 굉장히 즐거웠고 최대한 주석이 없이도 코드를 알아볼 수 있도록 클린코드 형식을 지향하여 작성하였습니다.

비록 아직 미흡하여 클린코드를 완벽히 따르진 못하였을 수 있지만 상수화 데이터를 따로 관리하고 변수 이름들을 최대한 의미있게 작성하는데 시간을 많이 쏟았습니다.

추가적으로 다양한 디바이스에서도 볼 수 있도록 device에 따른 UI들의 배치를 신경써서 작성하였습니다.

또한 다크모드까지 완벽하게 지원하도록 작성하여 사용자의 편의성을 높였습니다.

<br>

### 추가 정보

**다크모드**
![wanted_darkmode_demo](https://user-images.githubusercontent.com/48541850/164890160-deff46ab-8f74-4bac-9a69-86f76075f914.gif)

**모바일**
![wanted_mobile_demo](https://user-images.githubusercontent.com/48541850/164890157-b30316a5-a4ec-46d5-85d2-4a0cc2d3d545.gif)
