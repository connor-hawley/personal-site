// Colors from https://www.schemecolor.com/air-element.php and https://www.schemecolor.com/frosted-gray.php
const theme = {
  breakpoints: ['40em', '52em', '64em'], // mobile, tablet, laptop
  fontSizes: [
    12, 14, 16, 18, 20, 24, 32, 48, 64
  ],
  colors: {
    text_primary: '#1C1C1C',
    link_primary: '#6D9BC3',
    highlight_primary: '#6D9BC3',
    background_primary: '#FFFBFB',
    background_secondary: '#F4E7EC',

    eerie_black: '#1C1C1C',
    snow_white: '#FFFBFB',
    chinese_green: '#DBF4E0',
    water_blue: '#CAE3F5',
    bright_blue_gray: '#E7F1F5',
    seashell_orange: '#FBF3EF',
    isabelline_red: '#F4E7EC',
    charcoal_black: '#2E2E2E',
    frost_blue: '#6D9BC3',
    bright_gray: '#EBECF0',
    gray: '#BEBEBE',
    white: '#FFFFFF'
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  fonts: {
    primary: 'garibaldi, alegreya, palatino, serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  }
}

export type ThemeType = typeof theme

export default theme