import styled from "styled-components"
import LanguageSelect from "./LanguageSelect";


const Container = styled.div`
    width: 100vw;
    height: 445px;
    background-color: rgb(0,0,0);
    margin-top: -90px;
    
`;

const InformationsContainer = styled.div`
    width:1000px;
    padding-left: 200px;
    padding-right: 3rem;
    padding-top: 230px;
    margin-bottom: 72px;
`;

const Text = styled.p`
    text-align: left;
    color: rgba(255,255,255,0.7);
    font-family: Arial, Helvetica, sans-serif;
    font-size:17px;
`;

const OptionsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 25px;
`;

const Option = styled.a`
    color: rgba(255,255,255,0.7);
    font-family: Arial, Helvetica , sans-serif;
    text-decoration: underline;
    font-size: 15px;
`;


const Footer = ()=>{
    return(
        <Container>
            <InformationsContainer>
                <Text>Dúvidas? Ligue 0800 591 2876</Text>
                <OptionsContainer style={{justifyContent:'space-between'}}>
                    <Option>Perguntas frequentes</Option>
                    <Option>Central de Ajuda</Option>
                    <Option>Termos de Uso</Option>
                    <Option>Privacidade</Option>
                </OptionsContainer>
                <OptionsContainer style={{gap:'171px'}}>
                    <Option>Preferências de cookies</Option>
                    <Option>Informações corporativas</Option>
                </OptionsContainer>
                <LanguageSelect/>
            </InformationsContainer>
            
        </Container>
    )
}

export default Footer