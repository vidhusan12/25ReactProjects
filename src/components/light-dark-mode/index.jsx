import './theme.css'
import useLocalStroage from './useLocalStroage'

export default function LightDarkMode() {

  const [theme, setTheme] = useLocalStroage("theme", "dark");

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  //document.documentElement.setAttribute('data-theme',theme)
  console.log(theme)

  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className='container'>
        <p>This project uses a custom hook: </p>
        <button className='rounded-4 p-2' onClick={changeTheme}>Change Theme</button>
      </div>
    </div>
  )

}