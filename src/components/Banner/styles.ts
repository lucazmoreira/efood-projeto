import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Image = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 17.5rem;
  width: 100%;
  display: block;
  position: relative;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }
`

export const Titles = styled.div`
  z-index: 1;
  position: relative;
  display: grid;
  gap: 8rem;
  color: #fff;
  font-size: 2.4rem;
  padding: 1rem 0rem 2rem 28rem;
  margin: 0 auto;

  span {
    font-weight: 100;
    width: 9rem;
    font-size: 2.8rem;
  }

  h2 {
    font-weight: 900;
    width: 36.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 2.7rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`
