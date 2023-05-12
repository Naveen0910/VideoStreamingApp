import styled from 'styled-components'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
  background-color: ${props => (props.theme === true ? ' #0f0f0f' : '')};
  color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const ButtonContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
  list-style: none;
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`

export const Button = styled.li`
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

export const Text = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-left: 16px;
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 40px;
  width: 100%;
  padding-left: 15%;
`

export const SocialMediaIconsContainer = styled.div`
  display: flex;
  margin-top: 16px;
`

export const SocialMediaIcon = styled.img`
  width: 32px;
  margin-right: 16px;
  cursor: pointer;
`

export const Home = styled(FaHome)`
  :hover {
    color: red;
  }
`
