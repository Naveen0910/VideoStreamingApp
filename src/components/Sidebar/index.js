import {useContext} from 'react'

import {FaFire, FaGamepad, FaRegSave} from 'react-icons/fa'
import {
  MainContainer,
  ButtonContainer,
  CustomLink,
  Button,
  Home,
  Text,
  ContactUsContainer,
  SocialMediaIconsContainer,
  SocialMediaIcon,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext/ThemeContext'
import './Sidebar.css'

const Sidebar = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  return (
    <MainContainer theme={isDarkTheme}>
      <ButtonContainer>
        <CustomLink to="/">
          <Button>
            <Home />
            <Text>Home</Text>
          </Button>
        </CustomLink>
        <CustomLink to="/trending">
          <Button>
            <FaFire />
            <Text>Trending</Text>
          </Button>
        </CustomLink>
        <CustomLink to="/gaming">
          <Button>
            <FaGamepad />
            <Text>Gaming</Text>
          </Button>
        </CustomLink>
        <CustomLink to="/saved-videos">
          <Button>
            <FaRegSave />
            <Text>Saved Videos</Text>
          </Button>
        </CustomLink>
      </ButtonContainer>
      <ContactUsContainer>
        <Text>Contact Us</Text>
        <SocialMediaIconsContainer>
          <SocialMediaIcon
            alt="facebook logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          />
          <SocialMediaIcon
            alt="twitter logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          />
          <SocialMediaIcon
            alt="linked in logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          />
        </SocialMediaIconsContainer>
      </ContactUsContainer>
    </MainContainer>
  )
}

export default Sidebar
