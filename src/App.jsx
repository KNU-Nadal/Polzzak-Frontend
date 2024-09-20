import './App.css'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Main from './pages/main/Main'
import Layout from './layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/error/NotFound'
import Setting from './pages/setting/Setting'
import Event from './pages/event/Event'
import Review from './pages/review/Review'
import Team from './pages/team/Team'
import Map from './pages/map/Map'

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
          <Layout>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/map" element={<Map />} />
              <Route path="/team" element={<Team />} />
              <Route path="/review/*" element={<Review />} />
              <Route path="/event" element={<Event />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
