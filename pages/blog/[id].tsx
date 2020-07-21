import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'

import { getAllPostIds, getPostData } from '../../lib/posts'
import SiteLayout from '../../components/SiteLayout'
import ContentHeader from '../../components/ContentHeader'
import ContentDate from '../../components/ContentDate'
import Divider from '../../components/Divider'
import MarkdownRenderer from '../../components/MarkdownRenderer'
import ShareLinks from '../../components/ShareLinks'

interface PostDataType {
  postData: {
    title: string
    date: string
    content: string
  }
}

export default function Post({ postData }: PostDataType) {

  return (
    <SiteLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <ContentHeader>{postData.title}</ContentHeader>
        <ContentDate 
          date={postData.date}
        />
        <Divider />
        <MarkdownRenderer 
          content={postData.content}
        />
      </article>
      <ShareLinks />
    </SiteLayout>
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
