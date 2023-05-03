import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage/index'
import './App.css'

const App = () => {
  const [savedVideos, setSavedVideos] = useState([])
  const [theme, setTheme] = useState('Light')
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  )
}

export default App
