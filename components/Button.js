import styled, { css } from 'styled-components'

const backgroundStyle = (props) => {
  if (props.isLoading) {
    return css`
      background: #333;
    `
  }

  if (props.isError) {
    return css`
      background: #ff0000;
    `
  }

  return css`
    background: #0071e3;
  `
}

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1.3rem;
  font-weight: 400;
  padding: 13px 25px;

  ${backgroundStyle}
`
