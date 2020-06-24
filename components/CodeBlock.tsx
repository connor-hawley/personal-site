import { Prism } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";


interface CodeBlockType {
  value: string,
  language?: string
}

export default ({ value, language }: CodeBlockType) => (
  <Prism language={language} style={tomorrow}>
    {value}
  </Prism>
)