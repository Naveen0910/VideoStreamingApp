import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineFire} from 'react-icons/ai'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
  StyledUnorderedList,
  StyledListItem,
  StyledThumbnail,
  StyledInfoContainer,
  StyledTitle,
  StyledChannelName,
  StyledYearAndViews,
  StyledViewCount,
  StyledPublishedDate,
  StyledFailedViewContainer,
  StyledFailedViewImage,
  StyledRetryButton,
  StyledLoaderContainer,
  StyledTrendingContainer,
  StyledTrendingHeader,
  StyledTrendingTitle,
  ViewContainer,
} from './styledComponents'

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

  const videoComponent = () => (
    <StyledUnorderedList>
      {fetchedData.map(data => (
        <StyledListItem key={data.id}>
          <StyledThumbnail
            className="trend-thumbnail"
            alt="thumbnail"
            src={data.thumbNailUrl}
          />
          <StyledInfoContainer>
            <StyledTitle className="trend-title">{data.title}</StyledTitle>
            <StyledChannelName className="trend-channel-name">
              {data.channelName}
            </StyledChannelName>
            <StyledYearAndViews>
              <StyledViewCount className="trend-viewcount">
                {data.viewCount} views
              </StyledViewCount>
              <p>.</p>
              <StyledPublishedDate className="trend-published-date">
                {formatDistanceToNow(new Date(data.publishedAt))}
              </StyledPublishedDate>
            </StyledYearAndViews>
          </StyledInfoContainer>
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

  const onFailedView = () => (
    <StyledFailedViewContainer>
      <StyledFailedViewImage
        className="failed-view-image"
        alt="failed view"
        src={failedViewImage}
      />
      <StyledRetryButton type="button" onClick={getTrendingVideos}>
        Retry
      </StyledRetryButton>
    </StyledFailedViewContainer>
  )

  const renderLoadingView = () => (
    <StyledLoaderContainer>
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </StyledLoaderContainer>
  )

  const renderSuccessView = () => (
    <>
      <StyledTrendingContainer>
        <StyledTrendingHeader>
          <StyledTrendingTitle>
            Trending Videos <AiOutlineFire />
          </StyledTrendingTitle>
        </StyledTrendingHeader>
        {videoComponent()}
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
        return onFailedView()
      default:
        return null
    }
  }
  return (
    <>
      <Navbar />
      <ViewContainer>
        <Sidebar />
        {renderTrendingView()}
      </ViewContainer>
    </>
  )
}

export default TrendingVideos
