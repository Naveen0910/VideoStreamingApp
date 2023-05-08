import {formatDistanceToNow} from 'date-fns'
import {useContext} from 'react'
import {
  StyledVideoComponent,
  ThumbnailSection,
  Thumbnail,
  VideoDescriptionSection,
  ChannelProfile,
  ProfileImage,
  DescriptionSection,
  Title,
  ChannelName,
  ViewsDate,
  Views,
  PublishedAt,
  CustomLink,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext/ThemeContext'

const VideoComponent = props => {
  const {isDarkTheme} = useContext(ThemeContext)
  const {reqDetails} = props
  const {
    id,
    thumbNailUrl,
    profileImageUrl,
    title,
    channelName,
    viewCount,
    publishedAt,
  } = reqDetails

  return (
    <StyledVideoComponent theme={isDarkTheme} key={id}>
      <CustomLink theme={isDarkTheme} to={`/videos/${id}`}>
        <ThumbnailSection>
          <Thumbnail src={thumbNailUrl} alt="video thumbnail" />
        </ThumbnailSection>
        <VideoDescriptionSection>
          <ChannelProfile>
            <ProfileImage src={profileImageUrl} alt="channel logo" />
          </ChannelProfile>
          <DescriptionSection>
            <Title>{title}</Title>
            <ChannelName>{channelName}</ChannelName>
            <ViewsDate>
              <Views>{viewCount} views</Views>
              <PublishedAt>
                {formatDistanceToNow(new Date(publishedAt))}
              </PublishedAt>
            </ViewsDate>
          </DescriptionSection>
        </VideoDescriptionSection>
      </CustomLink>
    </StyledVideoComponent>
  )
}

export default VideoComponent
