import { Prism } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import emoji from 'emoji-dictionary'
import MathJax from 'react-mathjax';
import { InlineMath, BlockMath } from "react-katex";

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
    isAnimated={false}
  />
)

export const mathRenderer = (props) => (
  <BlockMath math={props.value} />
)

export const inlineMathRenderer = (props) => (
  <InlineMath inline math={props.value} />
);            

export const transformImageUri = (uri: string) =>
  uri.startsWith("http")
    ? uri
    : `${process.env.REACT_IMAGE_BASE_URL}${uri}`;