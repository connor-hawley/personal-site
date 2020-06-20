import { Box, Flex, Text } from 'rebass'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts'
import SiteLayout from '../components/SiteLayout'
import ContentHeader from '../components/ContentHeader'
import PostCard from '../components/PostCard'
import Post from './blog/[id]';

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
      <Flex
        justifyContent='center'
        flexDirection='column'
      >
        <ContentHeader>Posts</ContentHeader>
        {AllPostCards}
      </Flex>

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