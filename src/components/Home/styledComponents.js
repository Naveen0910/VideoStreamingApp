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
  width: 30%;
  background-color: transparent;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SubContainer = styled.div`
  display: flex;
  width: 100%;
`
