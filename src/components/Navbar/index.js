import {useContext, useState} from 'react'
import {FaMoon} from 'react-icons/fa'
import Popup from 'reactjs-popup'
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
  PopUpContainer,
  StyledPopup,
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
      <PopUpContainer>
        <StyledPopup
          theme={isDarkTheme}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          modal
        >
          {close => (
            <div>
              <p>Are you sure you want to log out?</p>
              <button onClick={handleLogout}>Confirm</button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          )}
        </StyledPopup>
      </PopUpContainer>
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
