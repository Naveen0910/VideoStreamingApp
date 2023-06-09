import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#ffffff')};
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 20px;
  width: 80%;
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#ffffff')};
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 50vh;
  margin-top: 0;
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#ffffff')};
`

export const ReactPlayers = styled(ReactPlayer)``

export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#ffffff')};
`

export const VideoTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: ${props => (props.theme !== true ? '#0f0f0f' : '#ffffff')};
`

export const LikeDislikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 14px;
  padding-right: 10%;
`

export const VideoItemViewCount = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-right: 16px;
  color: ${props => (props.theme !== true ? '#0f0f0f' : '#ffffff')};
`

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 16px;

  .active {
    color: #2563eb;
  }

  .non-active {
    color: #64748b;
  }
`

export const VideoProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 16px;
`

export const VideoChannelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: ${props => (props.theme !== true ? '#0f0f0f' : '#ffffff')};
`

export const VideoChannelName = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`

export const VideoChannelSubcribers = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0;
`

export const VideoChannelDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 150px;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`

export const FailureImage = styled.img`
  height: 60%;
  wdith: 60%;
`
export const Heading = styled.h1``

export const RetryButton = styled.button``

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Para = styled.p``

export const HorizontalLine = styled.hr`
  color: ${props => (props.theme !== true ? '#181818' : '#f1f1f1')};
  height: 2px;
  margin-top: 0px;
  border: none;
  width: 100%;
  background-color: ${props => (props.theme !== true ? '#181818' : '#f1f1f1')};
`
export const ChannelInfoContainer = styled.div`
  text-align: start;
  padding-left: 10px;
`
