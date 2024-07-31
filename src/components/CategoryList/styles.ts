import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3rem;
  gap: 2.4rem;
  padding: 16px;
  max-width: 1050px;
  margin: 56px auto;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
