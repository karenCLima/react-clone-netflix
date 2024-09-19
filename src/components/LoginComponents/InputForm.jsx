import styled from "styled-components"


const Container = styled.div`
    margin-bottom: 12px;
    position: relative;
`;

const Label = styled.label`
    font-size:0.8rem;
    color: rgba(255,255,255,0.7);
    position: absolute;
    left:1rem;
    line-height:1.5;
    right:1rem;
    top:0.9rem;
    pointer-events: none; /* Garante que a label não interfira na interação com o input */
    transition: 0.2s ease all;
    font-family: Arial, Helvetica, sans-serif;
`;

const Input = styled.input`
    vertical-align: text-top;
    display:inline-flex;
    background-color:rgba(70, 90, 126, 0.4);
    width:337px;
    height:59px;
    color:white;
    border-radius: 5px;
    border: 0.5px solid rgba(255,255,255,0.5);
    padding: 20px 0 0 16px;
    overflow: hidden;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;

    &:focus{
        border: 1.5px solid rgba(255,255,255,0.7);
    }

    &:focus + ${Label}, 
    &:not(:placeholder-shown) + ${Label} {
        padding-bottom: 4px;
        font-size: 12px;
  }
`;

const InputForm = ({label, type, ...props})=>{
    return(
        <Container>
            <Input {...props} placeholder=" "  type={type}/>
            <Label>{label}</Label>
        </Container>
    )
}

export default InputForm