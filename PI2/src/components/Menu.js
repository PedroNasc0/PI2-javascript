import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);

  & a {
    font-size: 17px;
    font-weight: bold;
    padding: 14px;
    color: black;
    transition: background-color 0.5s;
    text-decoration: none;
    margin-left: 50px;
    margin-right: 50px;

  }

  & a:hover {
    color: white;
    background-color: black;
    transition: background-color 0.70s;
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <a href="#pendente">A Contratar</a>
      <a href="#processo">Em Processo</a>
      <a href="#contratado">Contratado</a>
    </StyledMenu>
  );
}
export default Menu;
