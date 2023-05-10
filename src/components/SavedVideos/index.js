import {useContext} from 'react'
import {formatDistanceToNow} from 'date-fns'

import SavedVideosContext from '../../context/SavedVideosContext/SavedVideosContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
  ViewContainer,
  SavedVideosContainer,
  UnorderedList,
  ListItem,
  ThumbnailContainer,
  Thumbnail,
  VideoInfoContainer,
  VideoTitle,
  ChannelName,
  ViewsAndPubLishedContainer,
  Views,
  PublishedOn,
  NoVideosContainer,
  NoVideosImage,
  Heading,
} from './styledComponents'
import {Para} from '../GamingVideos/styledComponents'
import {SideBarContainer} from '../TrendingVideos/styledComponents'
import './index.css'
import ThemeContext from '../../context/ThemeContext/ThemeContext'

const SavedVideos = () => {
  const {videosArray} = useContext(SavedVideosContext)
  const {isDarkTheme} = useContext(ThemeContext)

  const onRenderSavedVideosView = () => {
    if (videosArray.length !== 0) {
      return (
        <ul className="list">
          {videosArray.map(eachVideo => (
            <ListItem>
              <ThumbnailContainer>
                <Thumbnail src={eachVideo.thumbnailUrl} alt="thumbnail" />
              </ThumbnailContainer>
              <VideoInfoContainer>
                <VideoTitle>{eachVideo.title}</VideoTitle>
                <ChannelName>{eachVideo.name}</ChannelName>
                <ViewsAndPubLishedContainer>
                  <Views>{eachVideo.videoCount}</Views>
                  <PublishedOn>
                    {formatDistanceToNow(new Date(eachVideo.publishedAt))}
                  </PublishedOn>
                </ViewsAndPubLishedContainer>
              </VideoInfoContainer>
            </ListItem>
          ))}
        </ul>
      )
    }
    return (
      <NoVideosContainer>
        <Heading>No saved videos found</Heading>
        <NoVideosImage
          alt="no saved videos"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        />
        <Para>Save your videos by clicking a button</Para>
      </NoVideosContainer>
    )
  }
  return (
    <>
      <Navbar />
      <ViewContainer>
        <SideBarContainer>
          <Sidebar />
        </SideBarContainer>
        <SavedVideosContainer theme={isDarkTheme} data-testid="savedVideos">
          {onRenderSavedVideosView()}
        </SavedVideosContainer>
      </ViewContainer>
    </>
  )
}

export default SavedVideos
