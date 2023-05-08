import {useContext} from 'react'
import {FaMoon} from 'react-icons/fa'

import ThemeContext from '../../context/ThemeContext/ThemeContext'
import {
  NavContainer,
  CustomContainer,
  LogoutButton,
  Logo,
  ThemeButton,
  LightThemeIcon,
} from './styledComponents'
import {CustomLink} from '../GamingVideos/styledComponents'

const Navbar = () => {
  const {isDarkTheme, onChangeTheme} = useContext(ThemeContext)

  const onClickThemeButton = () => {
    onChangeTheme()
  }

  return (
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
        <LogoutButton theme={isDarkTheme}>Logout</LogoutButton>
      </CustomContainer>
    </NavContainer>
  )
}

export default Navbar
