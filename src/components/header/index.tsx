import Button from "../button";
import { StyledHeader, StyledMenuButton } from "./styles";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <StyledHeader>
      <img src="./src/images/logo.jpg" alt="Logo" />

      <StyledMenuButton>
        <FaBars />
      </StyledMenuButton>
      <nav>
        <div className="leftDivNav">
          <Button children="Carros" />
          <Button children="Motos" />
          <Button children="Leilão" />
        </div>
        <div>
          <Button children="Fazer Login" />
          <Button children="Cadastrar" />
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
