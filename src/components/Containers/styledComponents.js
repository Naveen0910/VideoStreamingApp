import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const NavbarContainer = styled.div`
  height: 10vh;
`
export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80vh;
  padding: 0;
`
export const VideosViewContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  flex: 1;
`

export const SideBarContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 576px) {
    display: none;
    width: 0%;
  }
`

export const BottomBarContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: none;
  @media screen and (max-width: 576px) {
    display: block;
  }
`
