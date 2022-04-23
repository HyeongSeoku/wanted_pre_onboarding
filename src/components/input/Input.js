import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { device } from "../../constants/standard";
import {
  faCheckCircle,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [pwd, setPwd] = useState("");
  const [pwdVisible, setPwdVisible] = useState(false);
  const emailRef = useRef();
  const pwdRef = useRef();

  const onChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
    isEmail(value) ? setEmailValid(true) : setEmailValid(false);
  };

  const onFocusEmail = (e) => {
    setEmailFocus(true);
  };

  const onBlurEmail = (e) => {
    setEmailFocus(false);
  };

  const isEmail = (asValue) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(asValue);
  };

  const onChangePwd = (e) => {
    const { value } = e.target;
    setPwd(value);
  };

  const onClickEyeIcon = () => {
    pwdRef.current.focus();
    setPwdVisible((current) => !current);
  };

  return (
    <Container>
      <Title>인풋</Title>
      <TagContainer>
        <Tag>E-mail</Tag>
      </TagContainer>
      <InputContainer>
        <EmailInput
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
          ref={emailRef}
          onFocus={onFocusEmail}
          onBlur={onBlurEmail}
        />
        <EmailIcon isEmail={emailValid}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </EmailIcon>
      </InputContainer>

      <EmailMsg email={email} emailValid={emailValid} emailFocus={emailFocus}>
        Invalid email address
      </EmailMsg>

      <TagContainer>
        <Tag>Password</Tag>
      </TagContainer>
      <InputContainer>
        <PwdInput
          placeholder="Password"
          value={pwd}
          onChange={onChangePwd}
          ref={pwdRef}
          pwdVisible={pwdVisible}
        />
        <PwdIcon pwdVisible={pwdVisible} onClick={onClickEyeIcon}>
          {pwdVisible ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </PwdIcon>
      </InputContainer>
    </Container>
  );
};

export default Input;

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 200px;
  max-height: 300px;
  align-items: center;
  @media ${device.laptop} {
    width: 40%;
  }

  @media ${device.desktop} {
    max-width: 40%;
  }
`;

const TagContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10px;
`;

const Title = styled.div`
  display: block;
  margin-top: 5px;
  font-weight: bold;
`;

const EmailIcon = styled.span`
  opacity: ${(props) => (props.isEmail ? 1 : 0.4)}!important;
  color: ${(props) =>
    props.isEmail ? props.theme.mainColor : props.theme.textColor};
`;

const PwdIcon = styled.span`
  opacity: ${(props) => (props.isEmail ? 1 : 0.4)}!important;
  color: ${(props) =>
    props.pwdVisible ? props.theme.mainColor : props.theme.textColor};
`;

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

const EmailInput = styled.input`
  border: none;
  width: 88%;
  background-color: rgba(255, 255, 255, 0);
  color: ${(props) => props.theme.textColor};
  &::placeholder {
    color: ${(props) => props.theme.textColor};
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`;

const EmailMsg = styled.div`
  color: red;
  font-size: small;
  visibility: ${(props) =>
    props.email !== "" && !props.emailValid && !props.emailFocus
      ? "visibility"
      : "hidden"};
`;

const Tag = styled.span`
  display: inline-block;
  margin-left: 5px;
  font-size: 15px;
`;

const PwdInput = styled.input.attrs((props) => ({
  type: props.pwdVisible ? "text" : "password",
}))`
  border: none;
  width: 88%;
  background-color: rgba(255, 255, 255, 0);
  color: ${(props) => props.theme.textColor};
  &::placeholder {
    color: ${(props) => props.theme.textColor};
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`;
