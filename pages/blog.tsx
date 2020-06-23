import { Flex } from 'rebass'
import { GetStaticProps } from 'next'

import { getSortedPostsData } from '../lib/posts'
import SiteLayout from '../components/SiteLayout'
import ContentHeader from '../components/ContentHeader'
import PostCard from '../components/PostCard'
import Divider from '../components/Divider'


interface AllPostsDataType {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}

export default ({ allPostsData }: AllPostsDataType) => {
  const AllPostCards = allPostsData.map((props, idx) => (
    <PostCard 
      key={idx}
      {...props}
    />
  ))

  return (
    <SiteLayout>
      <ContentHeader>Posts</ContentHeader>
      <Divider />
      {AllPostCards}
    </SiteLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}