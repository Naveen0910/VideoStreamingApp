import {useState, useEffect, useContext} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
  Firelogo,
  StyledUnorderedList,
  StyledListItem,
  StyledThumbnail,
  StyledInfoContainer,
  StyledTitle,
  StyledChannelName,
  StyledYearAndViews,
  StyledViewCount,
  StyledPublishedDate,
  StyledTrendingContainer,
  TrendingVideosContainer,
  StyledTrendingTitle,
  ViewContainer,
  CustomLink,
  LoadingContainer,
  Heading,
  Para,
  FailureContainer,
  FailureImage,
  RetryButton,
  VideosContainer,
  SideBarContainer,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext/ThemeContext'
import {MainContainer, BottomBarContainer} from '../Containers/styledComponents'
import Bottombar from '../Bottombar'

const failedViewImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

const trendingStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

const TrendingVideos = () => {
  const [fetchedData, setFetchedData] = useState([])
  const [trendingFetchStatus, setTrendingFetchStatus] = useState(
    trendingStatus.initial,
  )

  const {isDarkTheme} = useContext(ThemeContext)

  const videoComponent = () => (
    <StyledUnorderedList theme={isDarkTheme}>
      {fetchedData.map(data => (
        <StyledListItem key={data.id}>
          <CustomLink to={`/videos/${data.id}`}>
            <StyledThumbnail
              className="trend-thumbnail"
              alt="thumbnail"
              src={data.thumbNailUrl}
            />
            <StyledInfoContainer>
              <StyledTitle theme={isDarkTheme} className="trend-title">
                {data.title}
              </StyledTitle>
              <StyledChannelName
                theme={isDarkTheme}
                className="trend-channel-name"
              >
                {data.channelName}
              </StyledChannelName>
              <StyledYearAndViews>
                <StyledViewCount
                  theme={isDarkTheme}
                  className="trend-viewcount"
                >
                  {data.viewCount} views
                </StyledViewCount>
                <p>.</p>
                <StyledPublishedDate className="trend-published-date">
                  {formatDistanceToNow(new Date(data.publishedAt))}
                </StyledPublishedDate>
              </StyledYearAndViews>
            </StyledInfoContainer>
          </CustomLink>
        </StyledListItem>
      ))}
    </StyledUnorderedList>
  )

  const getTrendingVideos = async query => {
    setTrendingFetchStatus(trendingStatus.loading)
    const jwtToken = Cookies.get('jwt_token')
    let trendingUrl = 'https://apis.ccbp.in/videos/trending'
    if (query) {
      trendingUrl += `?search=${query}`
    }
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(trendingUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        title: eachVideo.title,
        thumbNailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      setFetchedData(updatedData)
      setTrendingFetchStatus(trendingStatus.success)
    } else {
      setTrendingFetchStatus(trendingStatus.failed)
    }
  }

  useEffect(() => {
    console.log(fetchedData)
  }, [fetchedData])

  useEffect(() => {
    getTrendingVideos()
  }, [])

  const onClickRetry = () => {
    getTrendingVideos()
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

  const renderSuccessView = () => (
    <>
      <StyledTrendingContainer theme={isDarkTheme}>
        <StyledTrendingTitle theme={isDarkTheme}>
          <Firelogo />
          <h1>Trending Videos</h1>
        </StyledTrendingTitle>
        <TrendingVideosContainer>{videoComponent()}</TrendingVideosContainer>
      </StyledTrendingContainer>
    </>
  )

  const renderTrendingView = () => {
    switch (trendingFetchStatus) {
      case trendingStatus.loading:
        return renderLoadingView()
      case trendingStatus.success:
        return renderSuccessView()
      case trendingStatus.failed:
        return renderFailureView()
      default:
        return null
    }
  }
  return (
    <MainContainer>
      <Navbar />
      <ViewContainer theme={isDarkTheme}>
        <SideBarContainer>
          <Sidebar />
        </SideBarContainer>
        <VideosContainer> {renderTrendingView()}</VideosContainer>
      </ViewContainer>
      <BottomBarContainer>
        <Bottombar />
      </BottomBarContainer>
    </MainContainer>
  )
}

export default TrendingVideos
