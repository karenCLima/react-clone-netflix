import styled from "styled-components"
import backgroundImageNetflix from "../../public/images/imagem_de_fundo.jpg"
import logoNetflix from "../../public/icons/netflix_logo.png"
import LoginForm from "../components/LoginComponents/LoginForm.jsx"
import Footer from "../components/LoginComponents/Footer.jsx"


const Container = styled.div`
    background-image: url(${backgroundImageNetflix});
    background-repeat: no-repeat;
    height: auto;
    width:100vw;
    display: flex;
    flex-direction: column;
    gap: 0;

     /* Pseudo-elemento para o filtro preto */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5); /* Cor preta com 50% de opacidade */
        z-index: 1; /* Colocar o filtro acima da imagem de fundo */
        height: 120vh;
        width:100vw;
    }

  /* Conteúdo do container será acima do filtro */
  > * {
    position: relative;
    z-index: 2; /* Garante que o conteúdo fique acima do filtro */
  }

`
const Header = styled.div`
    width: 100vw;
    height:130px;
    display: flex;
    align-items: flex-start;

    img{
        width: 10%;
        padding:0 0 0 11%;
        height: 124%;
        position: relative;
        top:-33px;
        
    }
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top:-20px;
`


const Login = () => {
    return (
        <Container>
        
            <Header>
                <img src={logoNetflix} alt="Logo netflix" />
            </Header>
            <FormContainer>
                <LoginForm/>
            </FormContainer>
            <Footer/>

        </Container>
    )
}

export default Login