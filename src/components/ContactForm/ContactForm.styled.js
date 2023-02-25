import styled from 'styled-components';

export const Form = styled.form`
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
`;
export const FormLabel = styled.label`
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;
`;
export const FormInput = styled.input`
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #000;
  outline: transparent;
  
  }
`;
export const AddButton = styled.button`
  width: 100px;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;  
  font-size: 16px;
  font-weight: 400;
  &:hover{
    background: lightblue;
  }
`;