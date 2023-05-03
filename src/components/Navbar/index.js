import {FaMoon} from 'react-icons/fa'
import {
  NavContainer,
  CustomContainer,
  LogoutButton,
  Logo,
} from './styledComponents'

const Navbar = () => (
  <NavContainer>
    <Logo
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="logo"
    />
    <CustomContainer>
      <FaMoon />
      <Logo
        alt="profile"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
      />
      <LogoutButton>Logout</LogoutButton>
    </CustomContainer>
  </NavContainer>
)

export default Navbar
