import {useState, createContext, useEffect} from 'react'

const SavedVideosContext = createContext()

export const VideosProvider = ({children}) => {
  const [videosArray, setVideosArray] = useState([])
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const onChangeTheme = () => {
    setIsDarkTheme(prevState => !prevState)
  }

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
      value={{
        videosArray,
        addToArray,
        removeFromArray,
        isDarkTheme,
        setIsDarkTheme,
      }}
    >
      {children}
    </SavedVideosContext.Provider>
  )
}

export default SavedVideosContext
