import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import ReactMarkdown from 'react-markdown'

import { getAllPostIds, getPostData } from '../../lib/posts'
import SiteLayout from '../../components/SiteLayout'
import ContentHeader from '../../components/ContentHeader'
import ContentDate from '../../components/ContentDate'
import Divider from '../../components/Divider'
import { codeRenderer, textRenderer, linkRenderer } from '../../lib/renderers'

interface PostDataType {
  postData: {
    title: string
    date: string
    content: string
  }
}

export default function Post({ postData }: PostDataType) {
  const transformImageUri = (uri: string) => (
    uri.startsWith("http") ? uri : `${process.env.REACT_IMAGE_BASE_URL}${uri}`
  )

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
        <ReactMarkdown 
          source={postData.content}
          className='blog-post'
          renderers={{ 
            code: codeRenderer,
            text: textRenderer,
            link: linkRenderer
          }}
          transformImageUri={transformImageUri}
        />
      </article>
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
