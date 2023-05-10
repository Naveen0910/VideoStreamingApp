import {AiOutlineSearch} from 'react-icons/ai'
import styled from 'styled-components'

export const Banner = styled.div`
  background-image: url(${props => props.imageUrl});
  background-color: ${props => (props.theme === true ? '#181818' : '#ffff')};
  background-size: cover;
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  width: ${props => props.width};
  height: 20vh;
  padding: ${props => props.padding};
`

export const InternalBanner = styled.div`
  display: flex;
  flex-direction: column;
  color: '#181818';
`

export const Logo = styled.img`
  height: 40px;
`
export const Para = styled.p``

export const CustomButton = styled.button`
  width: ${props => props.width};
  background-color: transparent;
  padding: 5px;
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-start;
  margin-right: 20px;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${props => props.height};
  overflow-y: auto;
  padding: 0px;
  background-color: ${props => (props.theme === true ? '#181818' : '#ffff')};
`

export const SubContainer = styled.div`
  display: flex;
  width: 100%;
`
export const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: ${props => (props.theme === true ? '#181818' : '#ffff')};
`

/* Views Container */
export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

/* Unordered List to Display Video Components */
export const ViewsContainer = styled.div``
export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  flex: 1;
  margin: 0px;
  max-height: ${props => (props.close ? '90vh' : '70vh')};
  overflow-y: scroll;
  flex-wrap: wrap;
  padding-top: 10px;
`
export const VideosDisplaySection = styled.div`
  background-color: ${props => (props.theme === true ? '#181818' : '#f1f1f1')};
  flex: 1;
  padding-top: 5px;
`

export const SearchContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const Searchbar = styled.input`
  background-color: ${props => (props.theme === true ? '#181818' : '#f1f1f1')};
`

export const SearchButton = styled.button`
  color: black;
  font-size: 20px;
  width: 4%;
  border: 1px solid #94a3b8;
  background-color: ${props => (props.theme === true ? '#181818' : '#f1f1f1')};
`
export const Magnifier = styled(AiOutlineSearch)`
  color: ${props => (props.theme === true ? '#94a3b8' : '#f1f1f1')};
`

export const NoVideosImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
`

export const NoVideosImage = styled.img`
  width: 60%;
  height: 60%;
`

export const RetryButton = styled.button``

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
