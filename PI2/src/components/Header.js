import logo from "../imagem/logo.png";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;

  & h1 {
    color: white;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="icon" width="75px" />
      <h1>Melhorias Coringão</h1>
    </StyledHeader>
  );
}

export default Header;
