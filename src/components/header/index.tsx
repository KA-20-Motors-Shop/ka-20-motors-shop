import Button from "../button";
import { StyledHeader, StyledMenuButton } from "./styles";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import logo from "./../../images/logo.jpg";
import { useState } from "react";
import Modal from "../modal";

const Header = () => {
  const [navModal, setNavModal] = useState(false);

  return (
    <StyledHeader>
      <img src={logo} alt="Logo" />

      <StyledMenuButton onClick={() => setNavModal(!navModal)}>
        {navModal === false ? <FaBars /> : <GrClose />}
      </StyledMenuButton>
      {navModal === false ? <></> : <Modal type="navModal" />}
      <nav className="desktopNav">
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
