import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Flex, Box, Text } from 'rebass'

import { getAllPostIds, getPostData } from '../../lib/posts'
import SiteLayout from '../../components/SiteLayout'
import ContentHeader from '../../components/ContentHeader'
import ContentDate from '../../components/ContentDate'
import Divider from '../../components/Divider'

interface PostDataType {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}

export default function Post({ postData }: PostDataType) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <SiteLayout>
        <ContentHeader>{postData.title}</ContentHeader>
        <ContentDate 
          date={postData.date}
        />
        <Divider />
        <Text
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </SiteLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}
