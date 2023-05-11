import {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {FaHome, FaFire, FaGamepad, FaVideo, FaRegSave} from 'react-icons/fa'
import styled from 'styled-components'

import ThemeContext from '../../context/ThemeContext/ThemeContext'
import './Sidebar.css'

const MainContainer = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

const ButtonContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
  list-style: none;
`

const CustomLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`

const Button = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  border: none;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  :hover {
    background-color: #f1f1f1;
  }
  width: 70%;
`

const Text = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-left: 16px;
`

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 40px;
  width: 100%;
  padding-left: 15%;
`

const SocialMediaIconsContainer = styled.div`
  display: flex;
  margin-top: 16px;
`

const SocialMediaIcon = styled.img`
  width: 32px;
  margin-right: 16px;
  cursor: pointer;
`

const Home = styled(FaHome)`
  :hover {
    color: red;
  }
`

const Sidebar = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  return (
    <MainContainer>
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
