import { Prism } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import emoji from 'emoji-dictionary'

import Link from '../components/StyledLink'

interface CodeBlockType {
  value: string,
  language?: string
}

export const codeRenderer = ({ value, language }: CodeBlockType) => (
  <Prism 
    language={language} 
    style ={tomorrow} 
  >
    {value}
  </Prism>
)

export const textRenderer = (text) => (
  text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name)) // renders emoji
)

export const linkRenderer = (props) => (
  <Link 
    href={props.href}
    text={props.children}
    anchorOnly={true}
  />
)