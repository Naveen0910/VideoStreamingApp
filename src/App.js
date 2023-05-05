import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginPage from './components/LoginPage/index'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import TrendingVideos from './components/TrendingVideos'

const App = () => {
  const [savedVideos, setSavedVideos] = useState([])
  const [theme, setTheme] = useState('Light')
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/trending" component={TrendingVideos} />
    </Switch>
  )
}

export default App
