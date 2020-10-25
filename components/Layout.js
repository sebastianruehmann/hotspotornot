import styled from 'styled-components'

const Section = styled.section`
  background: ${(props) => (props.grey ? '#f5f5f7' : 'transparent')};
  padding: 5rem 2rem;

  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
`

const Main = styled.main``

const Title = styled.h1`
  margin-bottom: 35px;
  hyphens: manual;
  @media only screen and (max-width: 640px) {
    margin-bottom: 75px;
  }
`

const Paragraph = styled.p`
  color: #686868;
  margin: 0 0 3rem;
  font-size: 1.6rem;
  font-weight: 500;
  max-width: 700px;
`

const Image = styled.img`
  margin-bottom: 40px;
  width: 125px;
`

export { Section, Main, Title, Paragraph, Image }
