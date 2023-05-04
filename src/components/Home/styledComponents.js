import styled from 'styled-components'

export const Banner = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  width: ${props => props.width};
  height: 20vh;
  padding: ${props => props.padding};
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
`

export const SubContainer = styled.div`
  display: flex;
  width: 100%;
`
export const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

/* Views Container */
export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px;
  display: flex;
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
  background-color: #f1f1f1;
  max-height: ${props => (props.close ? '90vh' : '70vh')};
  overflow-y: scroll;
  flex-wrap: wrap;
  padding-top: 10px;
`
