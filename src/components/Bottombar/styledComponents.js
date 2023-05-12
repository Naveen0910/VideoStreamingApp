import styled, {css} from 'styled-components'

export const MainContainer = styled.div`
  border: 2px solid;
  width: 100%;
  height: 100%;
  display: none;

  @media screen and (max-width: 576px) {
    display: block;
  }
`
