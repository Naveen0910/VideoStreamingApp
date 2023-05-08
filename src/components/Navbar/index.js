import {FaMoon} from 'react-icons/fa'
import {
  NavContainer,
  CustomContainer,
  LogoutButton,
  Logo,
  ThemeButton,
} from './styledComponents'
import {CustomLink} from '../GamingVideos/styledComponents'

const Navbar = () => (
  <NavContainer>
    <CustomLink to="/">
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
    </CustomLink>
    <CustomContainer>
      <ThemeButton data-testid="theme" type="button">
        <FaMoon />
      </ThemeButton>
      <Logo
        alt="profile"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
      />
      <LogoutButton>Logout</LogoutButton>
    </CustomContainer>
  </NavContainer>
)

export default Navbar
