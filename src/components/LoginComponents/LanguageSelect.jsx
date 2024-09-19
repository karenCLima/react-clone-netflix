import React from 'react';
import { PiTranslateBold } from 'react-icons/pi'; // Importando o ícone que será usado
import { IoMdArrowDropdown } from 'react-icons/io'; 
import styled from 'styled-components';


const Container = styled.div`
  display:flex;
  align-items: center;
  background-color: #333;
  border-radius:5px;
  color: white;
  width: 160px;
  border: 1px solid rgb(255,255,255,0.7);
  position: relative;
`;

const Select = styled.select`
  background-color: #333;
  color:white;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
  padding: 10px 4px;
  width: 100%;
  border: none;
  appearance: none;


  option{
    background-color: #fff;
    color: #333;
    padding: 10px 4px;
  }
`

const LanguageSelect = () => {
  return (
    <Container>
      <PiTranslateBold size={30} style={{ marginRight: '8px', backgroundColor:'#333', border:'none', paddingLeft:"6px" }} />
      <Select >
        <option value="pt">Português</option>
        <option value="en">English</option>
      </Select>
      <IoMdArrowDropdown size={20} style={{position:'absolute', right:'10px', pointerEvents:'none', color:'white'}} />
    </Container>
  );
};

export default LanguageSelect;
