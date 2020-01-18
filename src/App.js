import React from 'react'

import LandingPage from './views/LandingPage/LandingPage'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import theme from './components/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  )
}

export default App
