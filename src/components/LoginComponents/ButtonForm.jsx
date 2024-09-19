import styled from "styled-components"

const Button = styled.button`
    width: 337px;
    height: 42px;
    background-color: ${props => props.color || 'blue'}; /* Valor padrão */
    color: white;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    cursor: pointer;
    border: none;
    position: relative; /* Isso pode ajudar na renderização do pseudo-elemento */
    transition: box-shadow 0.1s ease; /* Transição suave para o efeito de sombra */

    &:hover {
        box-shadow: inset 0px 15px 60px rgba(0, 0, 0, 0.5) !important;
    }
`

const ButtonForm = ({ color, name, type }) => {
    return (
        <Button color={color} type={type} >
            {name}
        </Button>
    )
}

export default ButtonForm