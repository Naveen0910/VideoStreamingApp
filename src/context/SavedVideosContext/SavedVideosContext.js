import {useState, createContext, useEffect} from 'react'

const SavedVideosContext = createContext()

export const VideosProvider = ({children}) => {
  const [videosArray, setVideosArray] = useState([])

  const addToArray = object => {
    setVideosArray([...videosArray, object])
  }

  useEffect(() => {
    console.log(videosArray)
  }, [videosArray])

  const removeFromArray = object => {
    setVideosArray(
      videosArray.filter(eachVidData => eachVidData.id !== object.id),
    )
  }

  return (
    <SavedVideosContext.Provider
      value={{videosArray, addToArray, removeFromArray}}
    >
      {children}
    </SavedVideosContext.Provider>
  )
}

export default SavedVideosContext
