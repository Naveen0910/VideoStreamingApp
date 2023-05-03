import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  MainContainer,
  CustomContainer,
  InputContainer,
  CustomButton,
  CustomImage,
  CustomInput,
} from './styledComponents'

const LoginPage = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showpassword, setShowPassword] = useState(false)
  const [showErrMsg, setShowErrMsg] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const onChangeUsername = e => {
    setUsername(e.target.value)
  }

  const onChecked = e => {
    if (e.target.checked) {
      setShowPassword(true)
    } else {
      setShowPassword(false)
    }
  }

  const onLoginSuccessful = token => {
    Cookies.set('jwtToken', token, {expires: 30})
    history.replace('/')
  }

  const onLoginFailure = data => {
    setShowErrMsg(true)
    setErrorMsg(data.error_msg)
  }

  const onFormSubmission = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onLoginSuccessful(data.jwt_token)
    } else {
      onLoginFailure(data)
    }
  }

  const alertStyle = {
    color: '#ff0b37',
  }

  return (
    <MainContainer>
      <CustomContainer
        onSubmit={onFormSubmission}
        direction="column"
        pad="35px"
      >
        <CustomImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="logo"
        />
        <InputContainer onChange={onChangeUsername} direction="column">
          <label htmlFor="username">USERNAME</label>
          <CustomInput type="text" id="username" />
        </InputContainer>
        <InputContainer onChange={onChangePassword} direction="column">
          <label htmlFor="password">PASSWORD</label>
          <CustomInput
            type={showpassword ? 'text' : 'password'}
            id="password"
          />
        </InputContainer>
        <InputContainer alignItems="center" direction="row">
          <CustomInput type="checkbox" id="checkbox" onChange={onChecked} />
          <label htmlFor="checkbox">showpassword</label>
        </InputContainer>
        <CustomButton type="submit">Login</CustomButton>
        <p style={alertStyle}>{showErrMsg ? `*${errorMsg}` : null}</p>
      </CustomContainer>
    </MainContainer>
  )
}

export default LoginPage
