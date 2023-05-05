import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import VideoComponent from '../VideoComponent'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import {
  Banner,
  Logo,
  Para,
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
  StyledSearchIcon,
  SearchContainer,
} from './styledComponents'

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

  useEffect(() => {
    const fetchData = async () => {
      setApiResponse({
        status: fetchConstants.loading,
        data: null,
        errMsg: null,
      })
      const Url = `https://apis.ccbp.in/videos/all?search=`
      const jwtToken = Cookies.get('jwt_token')
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
      try {
        const response = await fetch(Url, options)
        const data = await response.json()
        if (response.ok === true) {
          onSuccessfulFetch(data)
        } else {
          onFailureFetch(data)
        }
      } catch (error) {
        console.error(error)
        onFailureFetch(error.message)
      }
    }

    fetchData()
  }, [])

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
    >
      <Banner direction="column">
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="logo"
        />
        <Para>Buy Nxt Watch Premium prepaid plans with UPI </Para>
        <CustomButton width="30%">GET IT NOW</CustomButton>
      </Banner>
      <CloseButton>
        <AiOutlineClose onClick={onClickClose} />
      </CloseButton>
    </Banner>
  )

  /* Different Views Start */
  const renderSuccessView = () => {
    const {data} = apiResponse
    return (
      <VideosDisplaySection>
        <SearchContainer>
          <Searchbar type="search" />
          <StyledSearchIcon />
        </SearchContainer>
        <UnorderedList close={close}>
          {apiResponse.data.map(eachData => (
            <VideoComponent key={eachData.id} reqDetails={eachData} />
          ))}
        </UnorderedList>
      </VideosDisplaySection>
    )
  }

  const renderLoadingView = () => (
    <LoadingContainer>
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </LoadingContainer>
  )

  const renderVideoContainer = () => {
    const {status} = apiResponse

    switch (status) {
      case fetchConstants.loading:
        return renderLoadingView()
      case fetchConstants.success:
        return renderSuccessView()
      // case fetchConstants.failure:
      //   return renderFailureView()
      default:
        return null
    }
  }

  return (
    <MainContainer height="100vh">
      <Navbar />
      <SubContainer>
        <Sidebar />
        <RightSectionContainer>
          {!close && bannerElement()}
          <ViewsContainer>{renderVideoContainer()}</ViewsContainer>
        </RightSectionContainer>
      </SubContainer>
    </MainContainer>
  )
}

export default Home
