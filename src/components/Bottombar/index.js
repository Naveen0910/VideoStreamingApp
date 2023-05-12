import {useContext} from 'react'
import {FaHome, FaGamepad, FaFire, FaRegSave} from 'react-icons/fa'
import styled from 'styled-components'
import {
  MainContainer,
  UnorderedList,
  ListItem,
  Para,
  CustomLink,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext/ThemeContext'

const Icon = styled.span`
  color: red;
  font-size: 20px;
  margin-bottom: none;
`

const Bottombar = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  const iconsList = [
    {icon: <FaHome />, text: 'Home', link: '/'},
    {icon: <FaFire />, text: 'Trending', link: '/trending'},
    {icon: <FaGamepad />, text: 'Gaming', link: '/gaming'},
    {icon: <FaRegSave />, text: 'Saved Videos', link: '/saved-videos'},
  ]

  return (
    <MainContainer>
      <UnorderedList>
        {iconsList.map(eachItem => (
          <ListItem key={eachItem.text}>
            <CustomLink theme={isDarkTheme} to={eachItem.link}>
              <Icon>{eachItem.icon}</Icon>
              <Para>{eachItem.text}</Para>
            </CustomLink>
          </ListItem>
        ))}
      </UnorderedList>
    </MainContainer>
  )
}

export default Bottombar
