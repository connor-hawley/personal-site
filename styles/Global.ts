import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './Theme'

const globalStyle = createGlobalStyle<{ theme: ThemeType }>`
  html,
  body {
    padding: ${({ theme }) => theme.space[0]};
    margin: ${({ theme }) => theme.space[0]};
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: ${({ theme }) => theme.lineHeights.body};
    font-size: ${({ theme }) => theme.fontSizes[0]}px;
    background: ${({theme}) => theme.colors.background_primary};
    color: ${({ theme }) => theme.colors.text_primary};
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${({ theme }) => theme.colors.link_primary};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.highlight_primary};
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  table, th, td {
    border: 1px solid ${({ theme }) => theme.colors.text_primary};
    border-collapse: collapse;
  }

  th, td {
    padding: ${({ theme }) => theme.space[2]}px;
  }

  .blog-post {
  }
`

export default globalStyle