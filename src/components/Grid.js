import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-auto-flow: column;
  gap: 12px;
  @media (max-width: 640px) {
    grid-auto-flow: inherit;
  }
`
