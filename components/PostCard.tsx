import { Card, Text } from 'rebass'

import ContentDate from './ContentDate'
import Link from 'next/link'

interface PostCardType {
  id: string,
  date: string,
  title: string,
}

export default ({ id, date, title }: PostCardType) => (
  <Card
    m={3}
    p={3}
    sx={{
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '10px'
    }}
  >
    <Link href="/blog/[id]" as={`/blog/${id}`}>
      <a>{title}</a>
    </Link>    
    <ContentDate date={date}/>
  </Card>
)