import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import styled from 'styled-components'
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

const VideoComponent = props => {
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
    <StyledVideoComponent key={id}>
      <CustomLink to={`/videos/${id}`}>
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
