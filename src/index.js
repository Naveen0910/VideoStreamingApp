import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import {VideosProvider} from './context/SavedVideosContext/SavedVideosContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideosProvider>
        <App />
      </VideosProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
