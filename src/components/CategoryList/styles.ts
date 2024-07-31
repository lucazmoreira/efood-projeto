import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3rem;
  align-items: center;
  justify-content: center;
  padding: 5rem 26.7rem 7.5rem 26.7rem;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
