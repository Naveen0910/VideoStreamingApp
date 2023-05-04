import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import {
  Banner,
  Logo,
  Para,
  CustomButton,
  MainContainer,
  SubContainer,
} from './styledComponents'

const fetchConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

const Home = () => {
  const [apiResponse, setApiResponse] = useState({
    status: fetchConstants.initial,
    data: null,
    errMsg: null,
  })

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
    console.log(updatedData)
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
      const Url = 'https://apis.ccbp.in/videos/all?search='
      const jwtToken = Cookies.get('jwt_token')
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
      const response = await fetch(Url, options)
      const Data = await response.json()
      if (response.ok === true) {
        onSuccessfulFetch(Data)
      } else {
        onFailureFetch(Data)
      }
    }
    fetchData()
  }, [])

  const renderLoadingView = () => (
    <div>
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  const bannerElement = () => (
    <Banner
      width="80%"
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
        <CustomButton>GET IT NOW</CustomButton>
      </Banner>
      <AiOutlineClose />
    </Banner>
  )

  //   const renderVideoContainer = () => {
  //     const {status} = apiResponse

  //     switch (status) {
  //       case fetchConstants.loading:
  //         return renderLoadingView()
  //       case fetchConstants.success:
  //         return renderSuccessView()
  //       case fetchConstants.failure:
  //         return renderFailureView()
  //       default:
  //         return null
  //     }
  //   }

  return (
    <MainContainer>
      <Navbar />
      <SubContainer>
        <Sidebar />
        {bannerElement()}
      </SubContainer>
    </MainContainer>
  )
}

export default Home
