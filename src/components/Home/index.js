import {useState, useEffect, useContext} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import ThemeContext from '../../context/ThemeContext/ThemeContext'
import VideoComponent from '../VideoComponent'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import {
  Banner,
  Logo,
  Para,
  Heading,
  CustomButton,
  MainContainer,
  SubContainer,
  CloseButton,
  RightSectionContainer,
  UnorderedList,
  LoadingContainer,
  ViewsContainer,
  VideosDisplaySection,
  Searchbar,
  SearchContainer,
  SearchButton,
  NoVideosImage,
  NoVideosImageContainer,
  RetryButton,
  FailureContainer,
  FailureImage,
  InternalBanner,
  Magnifier,
} from './styledComponents'
import {SideBarContainer} from '../TrendingVideos/styledComponents'

const fetchConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

const failedViewImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

const Home = () => {
  const [apiResponse, setApiResponse] = useState({
    status: fetchConstants.initial,
    data: null,
    errMsg: null,
  })
  const [close, setClose] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [fetchUrl, setFetchUrl] = useState(
    `https://apis.ccbp.in/videos/all?search=${searchInput}`,
  )
  const [retryClicked, setRetryClicked] = useState(true)

  const {isDarkTheme} = useContext(ThemeContext)

  const onSuccessfulFetch = Data => {
    const updatedData = Data.videos.map(eachVideo => ({
      channelName: eachVideo.channel.name,
      profileImageUrl: eachVideo.channel.profile_image_url,
      id: eachVideo.id,
      publishedAt: eachVideo.published_at,
      title: eachVideo.title,
      thumbNailUrl: eachVideo.thumbnail_url,
      viewCount: eachVideo.view_count,
    }))
    setApiResponse(prevApiDetails => ({
      ...prevApiDetails,
      status: fetchConstants.success,
      data: updatedData,
      errMsg: null,
    }))
  }

  const onFailureFetch = Data => {
    setApiResponse(prevApiDetails => ({
      ...prevApiDetails,
      status: fetchConstants.failure,
      errMsg: Data.error_msg,
    }))
  }

  const onClickRetry = () => {
    setRetryClicked(prevState => !prevState)
  }

  const onEmptyView = () => (
    <>
      <NoVideosImageContainer>
        <h1>No Search results found</h1>
        <p>Try different key words or remove search filter</p>
        <NoVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <RetryButton onClick={onClickRetry}>Retry</RetryButton>
      </NoVideosImageContainer>
    </>
  )

  const fetchData = async () => {
    setApiResponse({
      status: fetchConstants.loading,
      data: null,
      errMsg: null,
    })
    const Url = fetchUrl
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(Url, options)
    const data = await response.json()

    if (response.ok === true) {
      onSuccessfulFetch(data)
    } else {
      onFailureFetch(data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  //   Code regarding searching
  const onChangeSearchInput = e => {
    setSearchInput(e.target.value)
  }

  const onClickSearchIcon = () => {
    setFetchUrl(`https://apis.ccbp.in/videos/all?search=${searchInput}`)
  }

  useEffect(() => {
    fetchData()
  }, [fetchUrl, retryClicked])

  // End of code regarding searching

  const onClickClose = () => {
    setClose(true)
  }

  const bannerElement = () => (
    <Banner
      data-testid="banner"
      width="100%"
      imageUrl="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
      direction="row"
      justifyContent="space-between"
      padding="20px"
      theme={isDarkTheme}
    >
      <InternalBanner>
        <Logo
          src={
            isDarkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }
          alt="nxt watch logo"
        />
        <Para>Buy Nxt Watch Premium prepaid plans with UPI </Para>
        <CustomButton theme={isDarkTheme} width="30%">
          GET IT NOW
        </CustomButton>
      </InternalBanner>
      <CloseButton data-testid="close">
        <AiOutlineClose onClick={onClickClose} />
      </CloseButton>
    </Banner>
  )

  /* Different Views Start */
  const renderSuccessView = () => (
    <VideosDisplaySection theme={isDarkTheme}>
      <SearchContainer>
        <Searchbar
          theme={isDarkTheme}
          placeholder="search"
          type="search"
          onChange={onChangeSearchInput}
        />
        <SearchButton
          theme={isDarkTheme}
          data-testid="searchButton"
          onClick={onClickSearchIcon}
        >
          <Magnifier theme={isDarkTheme} />
        </SearchButton>
      </SearchContainer>
      {apiResponse.data.length === 0 ? (
        onEmptyView()
      ) : (
        <UnorderedList close={close}>
          {apiResponse.data.map(eachData => (
            <VideoComponent key={eachData.id} reqDetails={eachData} />
          ))}
        </UnorderedList>
      )}
    </VideosDisplaySection>
  )

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

  const renderVideoContainer = () => {
    const {status} = apiResponse

    switch (status) {
      case fetchConstants.loading:
        return renderLoadingView()
      case fetchConstants.success:
        return renderSuccessView()
      case fetchConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <MainContainer theme={isDarkTheme} height="100vh">
      <Navbar />
      <SubContainer>
        <SideBarContainer>
          <Sidebar />
        </SideBarContainer>
        <RightSectionContainer theme={isDarkTheme}>
          {!close && bannerElement()}
          <ViewsContainer>{renderVideoContainer()}</ViewsContainer>
        </RightSectionContainer>
      </SubContainer>
    </MainContainer>
  )
}

export default Home
