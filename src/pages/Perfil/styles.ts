import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import backgroundHeader from '../../assets/images/background-header.png'

export const HeaderContainer = styled.header`
  background-image: url(${backgroundHeader});
  background-repeat: no-repeat;
  background-size: cover;
  height: 11.625rem;
  display: flex;
  align-items: center;
  background-color: blue;
  padding: 0rem 29rem 0rem 29rem;

  span {
    display: grid;
    color: ${colors.primaryDark};
    text-align: center;
    font-size: 1.125rem;
    font-weight: 900;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: grid;
  }
`
