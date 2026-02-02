import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { PromptGenerator } from './app/PromptGenerator'
import theme from './theme/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PromptGenerator />
    </ThemeProvider>
  )
}
