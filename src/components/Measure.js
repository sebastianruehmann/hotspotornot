import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 10px;
  width: 60px;
  background: #f5f5f7;
  height: 60px;
`

const Wrapper = styled.div``

const Title = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.h4`
  margin: 0;
  padding-left: 13px;
`

const Description = styled.p`
  margin: 0;
`

const Content = styled.div`
  padding-left: 75px;
`

export const Measure = ({ Icon, name, description }) => {
  return (
    <Wrapper>
      <Title>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <Name>{name}</Name>
      </Title>
      <Content>
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  )
}
