import {useState, useEffect, useContext} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineLike, AiOutlineDislike, AiFillSave} from 'react-icons/ai'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext/ThemeContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
  ContentContainer,
  VideoContainer,
  VideoPlayerContainer,
  VideoInfoContainer,
  VideoTitle,
  LikeDislikeContainer,
  VideoItemViewCount,
  LikeButton,
  VideoProfileImage,
  VideoChannelContainer,
  VideoChannelName,
  VideoChannelSubcribers,
  VideoChannelDescription,
  ReactPlayers,
  ButtonsContainer,
  LoadingContainer,
  Heading,
  Para,
  FailureContainer,
  FailureImage,
  RetryButton,
} from './styledComponents'
import SavedVideosContext from '../../context/SavedVideosContext/SavedVideosContext'

const videoItemStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

const VideoItemDetails = () => {
  const [videoData, setVideoData] = useState({})
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [saveText, setSaveText] = useState('Save')
  const [videoItemFetchStatus, setVideoItemFetchStatus] = useState(
    videoItemStatus.initial,
  )

  const {addToArray} = useContext(SavedVideosContext)
  const {isDarkTheme} = useContext(ThemeContext)

  const {id} = useParams()

  const getVideoData = async () => {
    setVideoItemFetchStatus(videoItemStatus.loading)
    const videoDataUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(videoDataUrl, options)
    if (response.ok === true) {
      setVideoItemFetchStatus(videoItemStatus.success)
      const data = await response.json()
      const updatedData = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscribersCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        id: data.video_details.id,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        videoCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
      }
      setVideoData(updatedData)
    } else {
      setVideoItemFetchStatus(videoItemStatus.failed)
    }
  }

  useEffect(() => {
    getVideoData()
  }, [])

  const onClickRetry = () => {
    getVideoData()
  }

  const onClickLike = () => {
    setIsLiked(true)
    setIsDisliked(false)
  }

  const onClickDislike = () => {
    setIsLiked(false)
    setIsDisliked(true)
  }

  const onClickSaved = () => {
    setIsSaved(!isSaved)
    setSaveText('Saved')
    addToArray(videoData)
  }

  const renderVideoDetails = () => (
    <ReactPlayers url={videoData.videoUrl} width="100%" height="100%" />
  )

  const videoComponent = () => (
    <>
      <VideoPlayerContainer theme={isDarkTheme}>
        {renderVideoDetails()}
      </VideoPlayerContainer>
      <VideoInfoContainer theme={isDarkTheme}>
        <VideoTitle theme={isDarkTheme}>{videoData.title}</VideoTitle>
        <LikeDislikeContainer>
          <VideoItemViewCount theme={isDarkTheme}>
            <p>{videoData.videoCount} views</p>
          </VideoItemViewCount>
          <ButtonsContainer>
            <LikeButton
              onClick={onClickLike}
              type="button"
              className="like-button"
            >
              <AiOutlineLike className={isLiked ? 'active' : 'non-active'} />
              <p className={isLiked ? 'active' : 'non-active'}>Like</p>
            </LikeButton>
            <LikeButton
              onClick={onClickDislike}
              type="button"
              className="like-button"
            >
              <AiOutlineDislike
                className={isDisliked ? 'active' : 'non-active'}
              />
              <p className={isDisliked ? 'active' : 'non-active'}>Dislike</p>
            </LikeButton>
            <LikeButton
              onClick={onClickSaved}
              type="button"
              className="like-button"
            >
              <AiFillSave className={isSaved ? 'active' : 'non-active'} />
              <button className={isSaved ? 'active' : 'non-active'}>
                {saveText}
              </button>
            </LikeButton>
          </ButtonsContainer>
        </LikeDislikeContainer>
        <VideoChannelContainer theme={isDarkTheme}>
          <VideoProfileImage
            src={videoData.profileImageUrl}
            alt="channel logo"
          />
          <div>
            <VideoChannelName>{videoData.name}</VideoChannelName>
            <VideoChannelSubcribers>
              {`${videoData.subscribersCount} subscribers`}
            </VideoChannelSubcribers>
            <VideoChannelDescription>
              {videoData.description}
            </VideoChannelDescription>
          </div>
        </VideoChannelContainer>
      </VideoInfoContainer>
    </>
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
      <Para>
        We are having some trouble to complete your request. Please try again
      </Para>
      <RetryButton onClick={onClickRetry}>Retry</RetryButton>
    </FailureContainer>
  )

  const onRenderVideoContainer = () => {
    switch (videoItemFetchStatus) {
      case videoItemStatus.success:
        return videoComponent()
      case videoItemStatus.loading:
        return renderLoadingView()
      case videoItemStatus.failed:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <>
      <Navbar />
      <ContentContainer theme={isDarkTheme}>
        <Sidebar />
        <VideoContainer data-testid="videoItemDetails" theme={isDarkTheme}>
          {onRenderVideoContainer()}
        </VideoContainer>
      </ContentContainer>
    </>
  )
}

export default VideoItemDetails
