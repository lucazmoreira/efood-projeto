import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;
  padding: 16px;
  max-width: 1050px;
  margin: 56px auto;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
