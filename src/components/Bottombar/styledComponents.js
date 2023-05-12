import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  margin: none;

  @media screen and (max-width: 576px) {
    display: block;
    margin: 0px;
  }
`
export const UnorderedList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0;
`
export const ListItem = styled.li`
  list-style: none;
  width: 25%;
  margin: 0px;
  height: 100%;
  padding: 0;
`

export const Para = styled.p`
  margin: 0;
`
export const CustomLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration:none;
  color:${props => (props.theme === true ? '#ffffff' : '#181818')}
  margin: 0px;
  padding: 0px;
`
