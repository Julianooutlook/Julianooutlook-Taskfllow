import styled from "styled-components";
// import backgroundImg from "../image/lampada.avif";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(90deg, #0d1717, #145050, #0d1717);
    box-sizing: border-box;
    font-family: "League Spartan", sans-serif;
    font-optical-sizing: auto;
    font-weight: weight;
    font-style: normal;
  }`
;


export const StyledButton = styled.button`
  background-color: #000000;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 2rem;
  letter-spacing: 1px;

  &:hover {
    background-color: #0f0f0ff0;
  }
`;

export const StyledButtonRegister = styled.button`
  background-color: #000000;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 2rem;
  letter-spacing: 1px;

  &:hover {
    background: linear-gradient(to right, rgb(0, 0, 0), rgb(0, 191, 255));
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  justify-content: center;
`;

export const StyledH2 = styled.h2`
  color: #e0ffff;
  position: absolute;
  font-size: 2rem;
`;

export const StyledDivLogin = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;

`;
export const StyledDivInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
export const StyledInputs = styled.input`
  display: flex;
  padding: 1rem;
  border: none;
  border-radius: 5px;
`;
export const StyledDivInputsRegister = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledErrorMessage = styled.div`
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000;
  color: #ccc;
  border: 1px solid rgb(0, 7, 100);
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
