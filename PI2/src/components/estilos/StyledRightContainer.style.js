import styled from "styled-components";

export const StyledRightContainer = styled.div`
  right: 50px;
  padding: 50px;
  margin-top: 10px;
  position: fixed;
  background-color: #f2f2f2;
  border-radius: 8%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);

  display: grid;
  align-items: center;

  & h2 {
    font-size: 30px;
    text-align: center;
  }

  & div {
    padding: 10px;
  }

  & .botao {
  padding: 17px 40px;
  margin-left: 30px;
  border-radius: 50px;
  cursor: pointer;
  border: 0;
  background-color: black;
  color: white;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all 0.5s ease;
}

& .botao:hover {
  letter-spacing: 3px;
  background-color: white;
  color: black;
  box-shadow: green 0px 7px 29px 0px;
}

& .botao:active {
  letter-spacing: 3px;
  background-color: white;
  color: black;
  box-shadow: green 0px 0px 0px 0px;
  transform: translateY(10px);
  transition: 100ms;
}
`;
