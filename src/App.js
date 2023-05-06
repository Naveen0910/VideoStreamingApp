import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginPage from './components/LoginPage/index'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/trending" component={TrendingVideos} />
    <ProtectedRoute exact path="/gaming" component={GamingVideos} />
    <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
    <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
  </Switch>
)

export default App
