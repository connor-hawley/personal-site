import ReactMarkdown from "react-markdown";
import MathProcessor from 'remark-math'

import { codeRenderer, textRenderer, linkRenderer, mathRenderer, inlineMathRenderer, transformImageUri } from "../lib/renderers";

type MarkdownRendererProps = {
  content: string;
}

export default ({ content }: MarkdownRendererProps) => (
  <ReactMarkdown
    source={content}
    className="blog-post"
    plugins={[
      MathProcessor
    ]}
    renderers={{
      code: codeRenderer,
      text: textRenderer,
      link: linkRenderer,
      math: mathRenderer,
      inlineMath: inlineMathRenderer,
    }}
    transformImageUri={transformImageUri}
  />
)