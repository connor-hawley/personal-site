import SiteLayout from '../components/SiteLayout'
import ContentHeader from '../components/ContentHeader'
import ContentText from '../components/ContentText'

import { openingLines } from '../content/text'

export default () => {
  const contents = openingLines.map((line, idx) => {
    if (idx === 0) {
      return (
        <ContentHeader
          key={idx}
        >
          {line}
        </ContentHeader>
      );
    } else {
      return (
        <ContentText
          key={idx}
        >
          {line}
        </ContentText>
      )
    }
  })

  return (
    <SiteLayout>
      {contents}
    </SiteLayout>
  )
}