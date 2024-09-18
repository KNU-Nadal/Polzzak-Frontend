import './App.css'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Main from './pages/Main'
import Layout from './layout/Layout'

function App() {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
          <Layout>
            <Main />
          </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
