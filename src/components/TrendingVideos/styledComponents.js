import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import {AiOutlineFire} from 'react-icons/ai'

export const Firelogo = styled(AiOutlineFire)`
  font-size: 40px;
  margin-right: 10px;
  margin-left: 10px;
`

export const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0px 20px;
  list-style-type: none;
  max-height: 72vh;
  overflow-y: scroll;
  width: 100%;
`
export const CustomLink = styled(Link)`
    color: #333;
    text-decoration: none;
    }
    display:flex;
  `

export const StyledListItem = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 32px;
  font-family: 'Roboto';
  border-radius: 8px;
  border: 1px solid #f1f1f1;
`

export const StyledThumbnail = styled.img`
  width: 200px;
  height: 20vh;
`

export const StyledInfoContainer = styled.div`
  padding: 16px;
`

export const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  color: black;
`

export const StyledChannelName = styled.p`
  margin: 0;
  margin-bottom: 8px;
  font-size: 14px;
  color: black;
`

export const StyledYearAndViews = styled.div`
  display: flex;
  align-items: center;
`

export const StyledViewCount = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: black;
`

export const StyledPublishedDate = styled.p`
  margin: 0;
  margin-left: 4px;
  font-size: 14px;
  color: #9b9b9b;
`

export const StyledFailedViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const StyledFailedViewImage = styled.img`
  width: 60%;
  margin-bottom: 24px;
`

export const StyledRetryButton = styled.button`
  padding: 8px 16px;
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  color: #f9f9f9;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`

export const StyledTrendingHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #f9f9f9;
  margin: 0;
  margin-bottom: 24px;
  padding-top: 0;
`

export const StyledLoaderContainer = styled.div`
  display: flex;
`

export const StyledLoader = styled(Loader)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledNoResults = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #f9f9f9;
  margin: 0;
  margin-bottom: 24px;
`

export const StyledTrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding-top: 0;
  margin-top: 0;
`

export const StyledTrendingTitle = styled.h1`
  display: flex;
  align-items: center;
  color: black;
  font-size: 15px;
  margin: 0;
`
export const ViewContainer = styled.div`
  display: flex;
  width: 100%;
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
  height: 40%;
  width: 40%;
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

export const VideosContainer = styled.div`
  width: 80%;
  padding-top: 0;
`
export const SideBarContainer = styled.div`
  width: 20%;
  height: 90vh;
`
export const TrendingVideosContainer = styled.div``
