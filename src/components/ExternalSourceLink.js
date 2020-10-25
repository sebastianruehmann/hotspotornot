import React from 'react'
import styled from 'styled-components'
import { ExternalIcon } from '../icons'

export const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: #0071e3;
  border-radius: 4px;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 16px;
`

export const ExternalSourceLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <ExternalIcon size={16} />
      <span style={{ marginLeft: '8px' }}>{children}</span>
    </Link>
  )
}
