import styled, { css } from 'styled-components'

const Section = styled.section`
  background: ${(props) => (props.grey ? '#f5f5f7' : 'transparent')};
  padding: 5rem 2rem;

  ${(props) =>
    props.wrapped &&
    css`
      margin: 0 auto;
      max-width: 1040px;
      width: 100%;
    `}
`

const Main = styled.main``

const Title = styled.h1`
  margin-bottom: 75px;
`

const Paragraph = styled.p`
  color: #686868;
  margin: 0 0 3rem;
  font-size: 1.285rem;
  font-weight: 400;
`

const Image = styled.img`
  margin-bottom: 40px;
  width: 125px;
`

export { Section, Main, Title, Paragraph, Image }
