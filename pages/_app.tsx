import theme from '../styles/Theme'
import { ThemeProvider } from 'emotion-theming'
import { AppProps } from 'next/app'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope)

import GlobalStyle from '../styles/Global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle theme={theme} />
    </ThemeProvider>
  )
}