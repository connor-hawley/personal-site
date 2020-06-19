import theme from '../styles/Theme'
import { ThemeProvider } from 'emotion-theming'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/Global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle theme={theme} />
    </ThemeProvider>
  )
}