import styled from 'styled-components'

export const ViewContainer = styled.div`
  display: flex;
  height: 100%;
`
export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '')};
`
export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  display: flex;
  padding: 8px;
  border-bottom: 1px solid #e6e6e6;
`

export const ThumbnailContainer = styled.div`
  width: 200px;
  margin-right: 16px;
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 100px;
`

export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.h4`
  font-size: 16px;
  margin: 0 0 8px 0;
`

export const ChannelName = styled.p`
  font-size: 14px;
  margin: 0 0 8px 0;
`

export const ViewsAndPubLishedContainer = styled.div`
  display: flex;
`

export const Views = styled.p`
  font-size: 14px;
  margin-right: 16px;
`

export const PublishedOn = styled.p`
  font-size: 14px;
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`

export const NoVideosImage = styled.img`
height:50vh;
width:50%:
`
export const Heading = styled.h1``

export const Para = styled.p``
