import styled from "styled-components";

export const StyledPage = styled.div`
    background-color: var(--color-grey8);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const FormContainer = styled.div`
    width: 90%;
    background-color: var(--color-grey10);
    height: 55%;
    border-radius: 4px;
    padding: 15% 8%;
    h3 {
        padding: none;
        margin-top: 0px;
        margin-bottom: 20px;
        text-align: left;
    }
    form {
        width:100%;
        height:100%;
        display:flex;
        flex-direction: column;
        label {
            align-self: left;
        }
        button{
            width: 100%;
            height: 28px;
        }
        input{
            width: 100%;
        }
    }
    div {
        display: flex;
        justify-content: right;
        width: 100%;
    }
    a {
        font-size: 14px;
        margin-bottom: 20px;
        color: var(--color-grey2);
        align-self: left;
    }
    span {
        margin: 25px;
        font-size: 14px;
        color: var(--color-grey2)
    }
    @media screen and (min-width: 1024px) {
        width: 20%;
        padding: 2%;
        height: 50%;
        form{
            button {
                height: 48px;

            }
        }
    }
`