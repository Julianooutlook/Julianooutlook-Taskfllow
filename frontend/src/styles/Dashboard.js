import styled from 'styled-components';
import { motion } from 'framer-motion';


export const DashboardTheme = styled.div` 
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  box-sizing: border-box;

  @media (max-width: 768) {
    flex-direction: column;
    padding: 10px;
  }
  
  `;

export const AnimatedTitle = styled(motion.span)` 
  font-size: 2rem;
  color: #011222;

`;

export const StyledTitle = styled.h2`
  font-size: 2rem;
  color: #363636;
 `;

export const StyledInput = styled.input`
 padding: 4px;
 border: 1px solid #ccc;
 border-radius: 3px;
 height: 2rem;
 `;

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  `;

export const StyledSelect = styled.select`
  height: 2rem;
  border: transparent;
  border-radius: 6px;
  color: #fff;
  background-color: #011222;

  &:hover {
    background-color: #363636;
  }
`;

export const StyledSpan = styled.span`
  color: #363636;
  font-weight: bolder;
`;

export const StyledDivForm = styled.div`
 display: flex;
 align-items: flex-end;
 margin-left: 20px;
 gap: 2px;`

export const StyledButton = styled(motion.button)`
  padding: 10px 20px;
  background-color: #011222;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  animation: 1;

  &:hover {
    background-color: #363636;
  }
`;

export const StyledSection = styled(motion.div)`
 display: flex;
 gap: 20px;
 margin-top: 20px; 
 
 `;

export const StyledStrongTitle = styled.strong`
  text-decoration: underline;
  font-size: 1.2rem;
  color: #4682B4;
`;

export const StyledPriority = styled.strong`
  color: ${({ $priority }) => $priority === 'alta' ? 'red' : $priority === 'media' ? 'orange' : 'green'};
`;

export const StyledButtoms = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 6px;
  justify-content: flex-end;
`;

export const StyledButtonFayeIcon = styled.button`
 padding: 10px 20px;
 border: none;
 border-radius: 8px;
 background-color: #011222;
 color: white;
 cursor: pointer;
 
 &:hover {
  background-color: #363636;
 }`
 ;

export const StyledButtonDel = styled.button`
 padding: 10px 20px;
 border: none;
 border-radius: 8px;
 background-color: #8B0000;
 color: white;
 cursor: pointer;
 
 &:hover {
  background-color: #B22222;
 }`
;

export const StyledButtonNext = styled.button`
 padding: 10px 20px;
 border: none;
 border-radius: 8px;
 background-color: #4682B4;
 color: white;
 cursor: pointer;
 
 &:hover {
  background-color:rgb(1, 139, 121);
 }`

export const StyledButtonUpdate = styled.button`
 padding: 10px 20px;
 border: none;
 border-radius: 8px;
 background-color: #2F4F4F;
 color: white;
 cursor: pointer;
 
 &:hover {
  background-color: #5F9EA0;
 }`
;

export const StyledButtonBack = styled.button`
 padding: 10px 20px;
 border: none;
 border-radius: 8px;
 background-color: #2F4F4F;
 color: white;
 cursor: pointer;
 
 &:hover {
  background-color: #5F9EA0;
 }`;

export const StyledButtonCancel = styled(motion.button)`
    padding: 10px 20px;
  background-color: #011222;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  animation: 1;

  &:hover {
    background-color: #363636;
  }`
;

export const StyledFeedContainer = styled.div`
  position: absolute;
  right: 2vw;
  top: 0vh;
  height: 28vh;
  overflow-y: auto;
  padding: 8px;
 `;

export const StyledH3 = styled.h3`
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  background-color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000
 
`;

export const StyledList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;`
;

export const StyledLi = styled.li`
    padding: 8px;
  background: #eee;
  margin-bottom: 8px;
  border-radius: 8px;`
;

export const variants = {
  hdden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export const WelcomeTitle = styled(motion.h2)`
  font-size: 1.5rem;
  color:rgb(0, 79, 153, 0.8);
  margin-top: 2rem;
  font-weight: 2px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);`
;

export const StyledDescription = styled(motion.p)`
  background-color: #fafafa;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-size: 1.125rem; 

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.02);
  }`;

export const StyledLogoutButton = styled(motion.button)`
  background-color: #011222;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  
  &:active {
    transform: scale()(0.95);
  }

  &:hover {
    background-color: #363636;
  };`
;
