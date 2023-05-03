import {useState} from 'react'
import {Link} from 'react-router-dom'
import {
  AiOutlineHome,
  AiOutlineFire,
  AiOutlineVideoCameraAdd,
} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {CustomContainer, CustomButton, CustomImage} from './styledComponents'

const Sidebar = () => {
  const [selectedButton, setSelectedButton] = useState('')
  return (
    <CustomContainer
      direction="column"
      justifyContent="space-between"
      minHeight="90vh"
    >
      <CustomContainer direction="column" minWidth="90%">
        <CustomButton>
          <AiOutlineHome className="home-icons" />
          <CustomContainer minWidth="60%" justifyContent="flex-start">
            <Link to="/">Home</Link>
          </CustomContainer>
        </CustomButton>
        <CustomButton>
          <AiOutlineFire className="home-icons" />
          <CustomContainer minWidth="60%" justifyContent="flex-start">
            <Link to="/trending">Trending</Link>
          </CustomContainer>
        </CustomButton>
        <CustomButton>
          <SiYoutubegaming className="home-icons" />
          <CustomContainer minWidth="60%" justifyContent="flex-start">
            <Link to="/gaming">Gaming</Link>
          </CustomContainer>
        </CustomButton>
        <CustomButton>
          <AiOutlineVideoCameraAdd className="home-icons" />
          <CustomContainer minWidth="70%" justifyContent="flex-start">
            <Link to="/saved-videos">Saved Videos</Link>
          </CustomContainer>
        </CustomButton>
      </CustomContainer>
      <CustomContainer direction="column" minWidth="90%">
        <p>Contact us</p>
        <CustomContainer direction="row">
          <CustomImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <CustomImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <CustomImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </CustomContainer>
        <p> Enjoy! Now to see your channels and recommendations!</p>
      </CustomContainer>
    </CustomContainer>
  )
}

export default Sidebar
