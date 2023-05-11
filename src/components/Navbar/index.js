import {useContext, useState} from 'react'
import {FaMoon} from 'react-icons/fa'
import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext/ThemeContext'
import {
  NavContainer,
  CustomContainer,
  LogoutButton,
  Logo,
  ThemeButton,
  LightThemeIcon,
  StyledPopup,
  LogoutContainer,
  LogoutButtonContainer,
  Button,
  Para,
} from './styledComponents'
import {CustomLink} from '../GamingVideos/styledComponents'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {isDarkTheme, onChangeTheme} = useContext(ThemeContext)

  const onClickThemeButton = () => {
    onChangeTheme()
  }

  const history = useHistory()

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    history.push('/login')
  }

  return (
    <>
      <StyledPopup
        theme={isDarkTheme}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        modal
        contentStyle={{
          maxWidth: '400px',
          padding: '24px',
          backgroundColor: isDarkTheme ? '#0f0f0f' : '#f9f9f9',
          borderRadius: '8px',
          border: isDarkTheme ? '0.5px solid #fff' : '0.5px solid #0f0f0f',
        }}
      >
        {close => (
          <LogoutContainer>
            <Para theme={isDarkTheme}>Are you sure you want to log out?</Para>
            <LogoutButtonContainer>
              <Button onClick={handleLogout}>Confirm</Button>
              <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            </LogoutButtonContainer>
          </LogoutContainer>
        )}
      </StyledPopup>

      <NavContainer theme={isDarkTheme}>
        <CustomLink to="/">
          <Logo
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website logo"
          />
        </CustomLink>
        <CustomContainer>
          <ThemeButton
            onClick={onClickThemeButton}
            data-testid="theme"
            type="button"
          >
            {isDarkTheme ? <LightThemeIcon /> : <FaMoon />}
          </ThemeButton>
          <Logo
            alt="profile"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          />
          <LogoutButton theme={isDarkTheme} onClick={() => setIsOpen(true)}>
            Logout
          </LogoutButton>
        </CustomContainer>
      </NavContainer>
    </>
  )
}

export default Navbar
