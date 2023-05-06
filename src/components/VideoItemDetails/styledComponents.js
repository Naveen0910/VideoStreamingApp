import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 20px;
  width: 80%;
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 50vh;
`

export const ReactPlayers = styled(ReactPlayer)``

export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`

export const VideoTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`

export const LikeDislikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 24px;
`

export const VideoItemViewCount = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-right: 16px;
`

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 16px;

  .active {
    color: #4f46e5;
  }

  .non-active {
    color: gray;
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
`

export const VideoChannelName = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`

export const VideoChannelSubcribers = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  margin-left: 8px;
`

export const VideoChannelDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  margin-top: 8px;
`

export const ButtonsContainer = styled.div`
  display: flex;
`
