import styled from 'styled-components';

export const ListItem = styled.li`
display: flex;
align-items: baseline;
 gap: 10px;
 `;
export const DelBtn = styled.button`
  cursor: pointer;
  width: 70px;
  padding: 4px;
  border-radius: 5px;
  border: 1px solid #000;
  font-size: 14px;
  font-weight: 400;
   &:hover{
    background: lightblue;
  }
  }
`;
export const ContactName = styled.span`
  font-size: 18px;
  font-weight: 400;
`;
export const ContactNumber = styled.span`
  font-size: 18px;
  font-weight: 400;
`;