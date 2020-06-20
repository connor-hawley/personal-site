import SiteLayout from '../components/SiteLayout'
import ContentHeader from '../components/ContentHeader'
import ContentText from '../components/ContentText'

const openingLines = [
  'Hi, I\'m Connor Hawley',
  'Thanks for visiting my site!',
  'This digital space is where I release my thoughts into the world.',
  'I\'ve recently been interested in: software design, distributed systems, statistics, and meta-learning.',
]

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