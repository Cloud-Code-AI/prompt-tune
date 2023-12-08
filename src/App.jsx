import './App.css'
import Tool from './Tool'
import { ThemeProvider } from './components/themeProvider'

function App() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Tool />
    </ThemeProvider> 
    </>
  )
}

export default App
