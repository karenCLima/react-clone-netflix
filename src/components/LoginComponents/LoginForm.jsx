import ButtonForm from './ButtonForm.jsx';
import InputForm from './InputForm.jsx'
import styled from "styled-components"
import { IoMdCheckbox } from "react-icons/io";

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 707px;
    align-items: flex-start;
    padding: 68px 70px 0;
    margin-bottom: 0;
    border-radius: 5px;

    h1{
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2rem;
        font-weight: 700;
        text-align: left;
        margin-bottom: 45px;
    }
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Text = styled.p`
    text-align: center;
    color: ${props=>props.color};
    font-family: Arial, Helvetica, sans-serif;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap:5px;
`;

const Span = styled.a`
    color: ${props=>props.color};
    cursor: pointer;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
        color: ${props=>props.hoverColor}
    }
    
`;

const LoginForm = ()=>{
    return(
        <Container>
            <h1>Entrar</h1>
            <BodyContainer>
                <InputForm type="email"  label="Email ou número de celular"/>
                <InputForm type="password" label="Senha" />
                <ButtonForm color="#E50914" name="Entrar" type="submit"/>
                <Text color="rgba(255,255,255,0.7);">OU</Text>
                <ButtonForm color="rgba(232,240,254,0.2)" name="Usar um código de acesso" type="reset"/>
                <Text color="#FFF"><Span hoverColor='rgba(232,240,254,0.4)'>Esqueceu a senha?</Span></Text>
                <IconContainer>
                    <IoMdCheckbox style={{color:'#FFFFFF', height: '2em', size:'2'}} />
                    <Text color="#FFF">Lembre-se de mim</Text>
                </IconContainer>
                <Text color="rgba(232,240,254,0.4)" style={{textAlign:"left"}} >Novo por aqui? <Span color="#FFF">Assine agora.</Span></Text>
                <Text color="rgba(232,240,254,0.3)" style={{textAlign:"left", fontSize:"14px"}}>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <Span color="blue">Saiba mais.</Span></Text>
            </BodyContainer>
        </Container>
    )
}

export default LoginForm