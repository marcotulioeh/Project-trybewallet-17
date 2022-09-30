import styled from 'styled-components';

export const SectionBody = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #2f363e;
`;

export const DivStyle = styled.div`
  position: relative;
  width: 350px;
  min-height: 250px;
  aling-items: center;
  background: #2f363e;
  box-shadow: 25px 25px 25px rgba(0, 0, 0, 0.25),
  10px 10px 70px rgba(0, 0, 0, 0.25),
  inset 5px 5px 10px rgba(0, 0, 0, 0.5),
  inset 5px 5px 20px rgba(255, 255, 255, 0.2),
  inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  border-radius: 30px;
  padding: 50px;
`;

export const FormStyle = styled.form`
  position: relative;
  width: 100%;
`;

export const ButtonStyle = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  width: 97%;
  border: none;
  outline: none;
  padding: 20px;
  padding-left: 5px;
  border-radius: 30px;
  margin: 20px;
  margin-left: 5px;
  background: #1f83f2;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25),
  inset 2px 2px 5px rgba(255, 255, 255, 0.35),
  inset -3px -3px 5px rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-top: 10px;
  :hover {
    filter: brightness(1.1);
  }
`;

export const InputStyle = styled.input`
position: relative;
display: flex;
justify-content: center;
width: 90%;
border: none;
outline: none;
padding: 20px;
padding-left: 5px;
border-radius: 10px;
margin: 30px;
margin-top: 30px;
margin-left: 5px;
box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25),
inset 2px 2px 5px rgba(255, 255, 255, 0.35),
inset -3px -3px 5px rgba(0, 0, 0, 0.5);
`;
