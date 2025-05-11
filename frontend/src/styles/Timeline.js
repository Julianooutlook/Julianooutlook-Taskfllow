import styled from 'styled-components';
import { motion } from 'framer-motion';


export const StyledContainerTimeline = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6vw;
  padding: 1rem;
  height: 100vh;
  font-family: "Space Grotesk", sans-serif;
  border-radius: 10px;
`
;

export const StyledTitle = styled(motion.h2)`
  display: flex;
  font-size: 32px;
  font-weight: bold;
  color: #ccc;
  margin-bottom: 16px;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  
  `
;

export const StyledDivLista = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6rem;
  border-radius: 10px;
  box-sizing: border-box;


`
;

export const StyledUl = styled(motion.ul)`
  list-style: none;
  display: flex;
  gap: 1rem; 
  align-items: center; 
  text-align: start;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow: visible;
  `
;

export const StyledLi = styled(motion.li)`
  position: relative;
  background-color: #f5f5f5;
  width: 250px;
  height: 200px;
  /* justify-content: space-between; */
  font-weight: bolder;
  border-radius: 10px;
  color: #0d1717;
  word-break: break-word;
  overflow-wrap: anywhere;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 4px;
  }

`
; 

export const StyledbuttonPlus = styled(motion.button)`
  padding: 12px 24px;
  background: linear-gradient(135deg, #6c63ff, #48c6ef);
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-radius: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.98);
  }
`
;

export const StyledInputPlus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  `
;

export const StyledInput = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  min-height: 80px;
  padding: 12px 16px;
  font-size: 14px;
  font-family: inherit;
  color: #e0f0f0;
  background-color: #0d1717;
  border: 1px solid #1f2e2e;
  border-radius: 8px;
  resize: none;
  outline: none;
  line-height: 1.5;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: border 0.2s, box-shadow 0.2s;

  &:focus {
    border: 1px solid #4cd4d4;
    box-shadow: 0 0 0 2px rgba(76, 212, 212, 0.3);
  }

  &::placeholder {
    color: #799a9a
  }
  `
;


export const GroupButtosEditCancel = styled.div`
  display: flex;
  justify-content: space-between;
  `
;


export const StyledButtonSaveTaks = styled.button`
  margin-left: 10px;
  cursor:pointer;
  margin-top: 2px;
  padding: 8px 3px;
  border-radius: 6px;
  background-color:rgba(7, 59, 18, 0.44);
  color: white;

 `
;

export const StyledButtonCancelEditTaks = styled.button`
  cursor:pointer;
  margin-top: 2px;
  padding: 8px 3px;
  border-radius: 6px;
  background-color:rgba(7, 59, 18, 0.44);
  color: white;
`;



export const StyledInputTasks = styled.textarea`

  font-size: 16px;
  padding: 18px;
  height: 120px;
  color: #000000;
  resize: none;
  border-radius: 10px;
  border: 1px solid #ccc;
  line-height: 1.4;
  text-align: left;
  vertical-align: top;
  box-sizing: border-box;
`
;

export const StyledSpan = styled.p`
  /* display: flex; */
  position: absolute;
  top: 10px;
  right: 10px;


`
;

export const StyledButtonTaskDiv = styled.div`
  display: flex;
  gap: 30px;
  align-self: flex-start; 
  padding: 8px;
  
`;

export const StyledCheckBox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  top: 27vh;
  left: 13rem;
  transform: scale(1.2);
  cursor: pointer;

  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #4caf50;
  border-radius: 6px;
  display: grid;
  place-content: center;
  transition: background-color 0.2s ease-out, border-color 0.2s;

  &:checked {
    background-color: #4caf50;
    border-color: #4caf50;
  }

  &:checked::before {
    content: '✓';
    color: black;
    font-size: 18px;
  }

  &:hover {
    border-color: #388e3c;
  }

`
;
export const StyledEdit = styled.button`
  display: flex;
  height: 36px;
  width: 36px;
  background-color: #5F9EA0;
  border-radius: 10px;
  cursor: pointer;
  padding: 4px;
  color: white;
 
 `
;

export const StyledButtonTaskDelete = styled.button`
  /* align-items: flex-end;
  margin-top: 110px; */
  display: flex;
  height: 36px;      
  width: 36px;   
  background-color: #8B0000;
 color: white;
 cursor: pointer;
 border-radius: 10px;
 padding: 4px;
`
;

