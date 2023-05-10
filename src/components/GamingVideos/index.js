import {useState, useEffect, useContext} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import {FaGamepad} from 'react-icons/fa'

import ThemeContext from '../../context/ThemeContext/ThemeContext'
import './index.css'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
  CustomLink,
  LoadingContainer,
  FailureContainer,
  FailureImage,
  Heading,
  Para,
  RetryButton,
} from './styledComponents'
import {SideBarContainer} from '../TrendingVideos/styledComponents'

const gamingStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

const GamingVideos = () => {
  const [gameFetchedData, setGameFetchedData] = useState([])
  const [gamingFetchStatus, setGamingFetchStatus] = useState(
    gamingStatus.initial,
  )

  const {isDarkTheme} = useContext(ThemeContext)

  const videoComponent = () => (
    <ul className="game-entire-list">
      {gameFetchedData.map(data => (
        <li key={data.id} className="game-list-item">
          <CustomLink to={`/videos/${data.id}`}>
            <img
              className="gaming-thumbnail"
              alt="video thumbnail"
              src={data.thumbNailUrl}
            />
            <div className="game-container">
              <p className="game-title">{data.title}</p>
              <p className="game-view-count">{data.viewCount} views</p>
            </div>
          </CustomLink>
        </li>
      ))}
    </ul>
  )

  const getGamingVideos = async () => {
    setGamingFetchStatus(gamingStatus.loading)
    const jwtToken = Cookies.get('jwt_token')
    const gamingUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(gamingUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbNailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      setGameFetchedData(updatedData)
      setGamingFetchStatus(gamingStatus.success)
    } else {
      setGamingFetchStatus(gamingStatus.failed)
    }
  }

  useEffect(() => {
    getGamingVideos()
  }, [])

  const onClickRetry = () => {
    getGamingVideos()
  }

  const renderLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </LoadingContainer>
  )

  const renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Para>We are having some trouble</Para>
      <RetryButton onClick={onClickRetry}>Retry</RetryButton>
    </FailureContainer>
  )

  const onRenderVideoContainer = () => {
    switch (gamingFetchStatus) {
      case gamingStatus.success:
        return videoComponent()
      case gamingStatus.loading:
        return renderLoadingView()
      case gamingStatus.failed:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <>
      <Navbar />
      <div className={`game-main-container ${true ? 'dark-theme' : ''}`}>
        <SideBarContainer>
          <Sidebar />
        </SideBarContainer>
        <div className="gaming-videos-container">
          <div className="gaming-header-container">
            <FaGamepad className="gaming-icon" />
            <h1 className="gaming-header">Gaming Videos</h1>
          </div>
          <div className="display-container">{onRenderVideoContainer()}</div>
        </div>
      </div>
    </>
  )
}

export default GamingVideos
