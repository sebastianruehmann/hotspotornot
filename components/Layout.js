import styled, {css} from 'styled-components'

const Section = styled.section`
  background: ${props => props.grey ? '#f5f5f7' : 'transparent'};
  padding: 5rem 2rem;

  ${props => props.wrapped && css`
    margin: 0 auto;
    max-width: 1040px;
    width: 100%;
  `}
`

const Main = styled.main`
`

const Title = styled.h1`
  margin: 0 0 1.5rem;
  line-height: 1.15;
  font-size: 4rem;
  font-weight: bold;
`

const Subtitle = styled.h1`
  margin: 0 0 1.5rem;
  line-height: 1.15;
  font-size: 2.5rem;
  font-weight: bold;
`

const Paragraph = styled.p`
  color: #686868;
  margin: 0 0 3rem;
  line-height: 1.15;
  font-size: 2rem;
  font-weight: 500;
`

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  margin-bottom: 40px;
  width: 125px;
`

export { Section, Main, Title, Subtitle, Paragraph, Footer, Image }
