import Button from "../../components/button";
import { StyledPage, FormContainer } from "./styles";
import Input from "../../components/Input";
import Header from "../../components/header";

const LoginPage = () => {
    return(
        <>
            <StyledPage>
                <FormContainer>
                    <h3>Login</h3>
                    <form action="">
                        <Input type='text' label="Usuário" name="username" placeholder="Digitar usuário"/>
                        <Input type='password' label='Password' name='password' placeholder="Digitar senha"/>
                        <div>
                            <a href="#">Esqueci minha senha</a>
                        </div>
                        <Button>Entrar</Button>
                        <span>Ainda não possui conta?</span>
                        <Button>Cadastrar</Button>
                    </form>
                </FormContainer>
            </StyledPage>            
        </>
    )
}

export default LoginPage;