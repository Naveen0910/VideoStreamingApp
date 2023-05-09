import styled from 'styled-components'
import {FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'

export const StyledPopup = styled(Popup)`
  max-width: 400px;
  padding: 24px;
  background-color: ${props => (props.theme ? '#181818' : '#f1f1f1')};
  border-radius: 8px;
  border: 2px solid red;
`

export const PopUpContainer = styled.div``

export const NavContainer = styled.ul`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#ffff')};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 10vh;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
`

export const CustomContainer = styled.li`
  display: flex;
  justify-content: space-between;
  min-width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Logo = styled.img`
  height: 32px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.theme === true ? '#ffff' : '#0f0f0f')};
  border-color: ${props => (props.theme === true ? '#ffff' : '#0f0f0f')};
`
export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
`
export const LightThemeIcon = styled(FiSun)`
  color: #fff;
  background-color: '#fff';
`
