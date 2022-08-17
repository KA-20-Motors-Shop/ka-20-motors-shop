import Button from "../../components/button";
import Header from "../../components/header";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { StyledFormDiv, StyledFormSection } from "./styles";

const SignUpPage = () => {
  return (
    <>
      <Header />
      <StyledFormSection>
        <StyledFormDiv>
          <h3>Cadastro</h3>
          <form action="">
            <span>Informações pessoais</span>
            <Input
              type="text"
              label="Nome"
              name="name"
              placeholder="Ex: Samuel Leão"
            />
            <Input
              type="text"
              label="Email"
              name="email"
              placeholder="Ex: exemplo@email.com"
            />
            <Input
              type="text"
              label="CPF"
              name="cpf"
              placeholder="000.000.000-00"
            />
            <Input
              type="text"
              label="Celular"
              name="cellphone"
              placeholder="(DDD)90000-0000"
            />
            <Input
              type="date"
              label="Data de Nascimento"
              name="birthdate"
              placeholder="00/00/0000"
            />
            <TextArea
              label="Descrição"
              name="description"
              placeholder="Digitar descrição"
            />

            <span>Informações de endereço</span>
            <Input type="text" label="CEP" name="cep" placeholder="00000-000" />
            <Input
              type="text"
              label="Estado"
              name="state"
              placeholder="Digitar Estado"
            />
            <Input
              type="text"
              label="Cidade"
              name="city"
              placeholder="Digitar Cidade"
            />
            <Input
              type="text"
              label="Rua"
              name="street"
              placeholder="Digitar Rua"
            />
            <Input
              type="number"
              label="Número"
              name="number"
              placeholder="Digitar Número"
            />
            <Input
              type="text"
              label="Complemento"
              name="complement"
              placeholder="Ex: apart 307"
            />
            <div>
              <label>Tipo de conta</label>
              <Button children="Comprador" />
              <Button children="Anunciante" />
            </div>
            <Input
              type="password"
              label="Senha"
              name="password"
              placeholder="Digitar Senha"
            />
            <Input
              type="password"
              label="Senha"
              name="password"
              placeholder="Repita a senha inserida acima"
            />
            <Button children="Finalizar cadastro" />
          </form>
        </StyledFormDiv>
      </StyledFormSection>
    </>
  );
};

export default SignUpPage;
