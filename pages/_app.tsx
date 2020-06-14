import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import Theme from '../styles/theme'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}