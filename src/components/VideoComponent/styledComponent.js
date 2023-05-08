import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const StyledVideoComponent = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  list-style-type: none;
  max-width: 30%;
  max-height: 30%;
  background-color: ${props => (props.theme === true ? '#181818' : '#ffff')};
`
export const CustomLink = styled(Link)`
  color: ${props => (props.theme === true ? '#ffffff' : '#181818')};
    text-decoration: none;
    }
  `

export const ThumbnailSection = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
`

export const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const VideoDescriptionSection = styled.div`
  display: flex;
  margin-top: 12px;
`

export const ChannelProfile = styled.div`
  margin-right: 10px;
  width: 30%;
  height: 30%;
  border-radius: 25px;
  margin-top: 10px;
`

export const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
`

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;

  margin-bottom: 5px;
  max-width: 100%;
`

export const ChannelName = styled.p`
  font-size: 14px;
  font-weight: 400;

  margin-bottom: 5px;
`

export const ViewsDate = styled.div`
  display: flex;
  align-items: center;
`

export const Views = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-right: 10px;
`

export const PublishedAt = styled.p`
  font-size: 14px;
  font-weight: 400;
`
