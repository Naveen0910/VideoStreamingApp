import {
  MainContainer,
  NavbarContainer,
  SubContainer,
  SideBarContainer,
  VideosViewContainer,
  BottomBarContainer,
} from './styledComponents'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Bottombar from '../Bottombar'

const ContainersView = () => (
  <MainContainer>
    <NavbarContainer>
      <Navbar />
    </NavbarContainer>
    <SubContainer>
      <SideBarContainer>
        <Sidebar />
      </SideBarContainer>
    </SubContainer>
    <BottomBarContainer>
      <Bottombar />
    </BottomBarContainer>
  </MainContainer>
)
export default ContainersView
