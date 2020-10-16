import styled from 'styled-components'

const Main = styled.main`
  background: #f5f5f7;
  padding: 5rem 2rem;
`

const Title = styled.h1`
  margin: 0 0 1.5rem;
  line-height: 1.15;
  font-size: 4rem;
  font-weight: bold;
`

const Paragraph = styled.p`
  margin: 0 0 3rem;
  line-height: 1.15;
  font-size: 2rem;
  font-weight: bold;
`

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { Main, Title, Paragraph, Footer }
