import {useContext} from 'react'

import ThemeContext from '../../context/ThemeContext/ThemeContext'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import {
  MainContainer,
  SubContainer,
  DisplayContainer,
  NotFoundImage,
} from './styledComponents'

const NotFoundRoute = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  return (
    <MainContainer>
      <Navbar />
      <SubContainer>
        <Sidebar />
        <DisplayContainer>
          <h1>Page Not Found</h1>
          <NotFoundImage
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }
            alt="not found"
          />
          <p>we are sorry, the page you requested could not be found.</p>
        </DisplayContainer>
      </SubContainer>
    </MainContainer>
  )
}

export default NotFoundRoute
