import theme from '../styles/Theme'
import { ThemeProvider } from 'emotion-theming'
import { AppProps } from 'next/app'
import { DefaultSeo } from "next-seo";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faLink, faEnvelope)

import GlobalStyle from '../styles/Global'
import "katex/dist/katex.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        title={"Connor Hawley"}
        description={"Connor Hawley's website and blog"}
        canonical={"https://www.connorhawley.com/"}
        openGraph={{
          title: "Connor Hawley",
          type: "website",
          locale: "en_US",
          url: "https://www.connorhawley.com/",
          images: [
            {
              url: "https://www.connorhawley.com/og-image.png",
              width: 1200,
              height: 1200,
              alt: "CH",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
      <GlobalStyle theme={theme} />
    </ThemeProvider>
  );
}