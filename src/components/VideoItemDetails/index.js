import {useState, useEffect, useContext} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineLike, AiOutlineDislike, AiFillSave} from 'react-icons/ai'
import {useParams} from 'react-router-dom'

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
} from './styledComponents'
import SavedVideosContext from '../../context/SavedVideosContext/SavedVideosContext'

const VideoItemDetails = () => {
  const [videoData, setVideoData] = useState({})
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [saveText, setSaveText] = useState('Save')

  const {addToArray} = useContext(SavedVideosContext)
  const {isDarkTheme} = useContext(ThemeContext)

  const {id} = useParams()

  const getVideoData = async () => {
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
    }
  }

  useEffect(() => {
    getVideoData()
  }, [])

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

  return (
    <>
      <Navbar />
      <ContentContainer theme={isDarkTheme}>
        <Sidebar />
        <VideoContainer data-testid="videoItemDetails" theme={isDarkTheme}>
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
                  <AiOutlineLike
                    className={isLiked ? 'active' : 'non-active'}
                  />
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
                  <p className={isDisliked ? 'active' : 'non-active'}>
                    Dislike
                  </p>
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
        </VideoContainer>
      </ContentContainer>
    </>
  )
}

export default VideoItemDetails
