import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import AddItem from './components/AddItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  function handleClick(event) {
    if (darkMode) {
      document.documentElement.style.setProperty('--dark', 'rgb(17, 20, 40)')
      document.documentElement.style.setProperty('--light', 'rgb(242, 242, 240)')
      setDarkMode(false)
    } else {
      document.documentElement.style.setProperty('--light', 'rgb(17, 20, 40)')
      document.documentElement.style.setProperty('--dark', 'rgb(242, 242, 240)')
      setDarkMode(true)
    }
  }
 
  return (
    <>
      <button id='dark-mode' type='submit'>
        { !darkMode ? (<FontAwesomeIcon icon={faMoon} onClick={handleClick}/>)
        : (<FontAwesomeIcon icon={faSun} onClick={handleClick}/>)
        }
      </button>
      <Title id='title'/>
      <AddItem />
    </>
  )
}

export default App
