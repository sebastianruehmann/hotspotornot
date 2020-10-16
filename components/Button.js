import styled from 'styled-components';


export const Button = styled.button`
  background: ${props => props.isIdle ? '#333' : (props.isError ? '#FF0000' : '#0071e3')};
  border: none;
  border-radius: 22px;
  color: white;
  font-size: 1.3rem;
  font-weight: 400;
  padding: 13px 25px;
`