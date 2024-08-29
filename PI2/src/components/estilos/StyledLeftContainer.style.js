import styled from "styled-components";

export const StyledLeftContainer = styled.div`
  margin-top: 10px;
  background-color: #f2f2f2;
  width: 75%;
  float: left;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  padding: 10px;
  display: grid;

  & ul {
    list-style-type: none;
    font-size: 20px;
    
  }

  & h2 {
    padding-left: 100px;
  }

  & li {
    padding-left: 300px;
    font-weight: bold;
    font-size: 23px;
  }

  & .btnRemover {
    padding: 17px 40px;
    margin-left: 20px;
    margin-top: 10px;
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

  & .btnRemover:hover {
    letter-spacing: 3px;
    background-color: red;
    color: black;
    box-shadow: red 0px 7px 29px 0px;
  }

  &btnRemover:active {
    letter-spacing: 3px;
    background-color: red;
    color: black;
    box-shadow: red 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }

  & .btnEmAndamento {
    padding: 17px 40px;
    margin-left: 20px;
    margin-top: 10px;
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

  & .btnEmAndamento:hover {
    letter-spacing: 3px;
    background-color: yellow;
    color: black;
    box-shadow: yellow 0px 7px 29px 0px;
  }

  & .btnEmAndamento:active {
    letter-spacing: 3px;
    background-color: yellow;
    color: black;
    box-shadow: yellow 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }

  & .btnConcluido {
    padding: 17px 40px;
    margin-left: 20px;
    margin-top: 10px;
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

  & .btnConcluido:hover {
    letter-spacing: 3px;
    background-color: green;
    color: black;
    box-shadow: green 0px 7px 29px 0px;
  }

  & .btnConcluido:active {
    letter-spacing: 3px;
    background-color: greenn;
    color: black;
    box-shadow: green 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }

  & .btnNaoIni {
   padding: 17px 40px;
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

  & .btnNaoIni:hover {
    letter-spacing: 3px;
    background-color: green;
    color: black;
    box-shadow: green 0px 7px 29px 0px;
  }

  & .btnNaoIni:active {
    letter-spacing: 3px;
    background-color: green;
    color: black;
    box-shadow: green 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }
`;
