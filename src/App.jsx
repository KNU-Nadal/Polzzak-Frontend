import './App.css'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

function App() {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        Hello, World!
      </ThemeProvider>
    </>
  )
}

export default App
