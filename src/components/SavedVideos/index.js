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
} from './styledComponents'

const SavedVideos = () => {
  const {videosArray} = useContext(SavedVideosContext)

  const onRenderSavedVideosView = () => {
    if (videosArray.length !== 0) {
      return (
        <UnorderedList>
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
        </UnorderedList>
      )
    }
    return (
      <NoVideosContainer>
        <NoVideosImage
          alt="no saved videos"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        />
      </NoVideosContainer>
    )
  }
  return (
    <>
      <Navbar />
      <ViewContainer>
        <Sidebar />
        <SavedVideosContainer>{onRenderSavedVideosView()}</SavedVideosContainer>
      </ViewContainer>
    </>
  )
}

export default SavedVideos
