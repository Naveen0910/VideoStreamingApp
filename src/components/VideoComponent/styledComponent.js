import {Link} from 'react-router-dom'
import styled, {css} from 'styled-components'

export const StyledVideoComponent = styled.li`
  @media screen and (min-width: 577px) {
    max-width: 30%;
    max-height: 30%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    list-style-type: none;
    background-color: ${props => (props.theme === true ? ' #0f0f0f' : '#ffff')};
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    background-color: ${props => (props.theme === true ? ' #0f0f0f' : '#ffff')};
    margin-right: 0;
  }
`
export const CustomLink = styled(Link)`
  color: ${props => (props.theme === true ? '#ffffff' : ' #0f0f0f')};
    text-decoration: none;
    }
  `

export const ThumbnailSection = styled.div`
  width: 100%;
  height: 50%;
`

export const Thumbnail = styled.img`
  @media screen and (min-width: 577px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 576px) {
    height: 200px;
    width: 100%;
  }
`

export const VideoDescriptionSection = styled.div`
  @media screen and (min-width: 577px) {
    display: flex;
    margin-top: 12px;
  }

  @media screen and (max-width: 576px) {
    display: flex;
    margin-top: 22px;
  }
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
