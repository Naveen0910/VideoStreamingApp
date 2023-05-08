import {useState, createContext, useEffect} from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const onChangeTheme = () => {
    setIsDarkTheme(prevState => !prevState)
  }
  useEffect(() => {
    console.log(isDarkTheme)
  }, [isDarkTheme])

  return (
    <ThemeContext.Provider value={{isDarkTheme, onChangeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
