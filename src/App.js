import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'

import {VideosProvider} from './context/SavedVideosContext/SavedVideosContext'
import LoginPage from './components/LoginPage/index'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import {ThemeProvider} from './context/ThemeContext/ThemeContext'
import NotFoundRoute from './components/NotFoundRoute'
import Containers from './components/Containers'

const App = () => (
  <VideosProvider>
    <ThemeProvider>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/c" component={Containers} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/trending" component={TrendingVideos} />
        <ProtectedRoute exact path="/gaming" component={GamingVideos} />
        <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
        <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        <Route component={NotFoundRoute} />
      </Switch>
    </ThemeProvider>
  </VideosProvider>
)

export default App
