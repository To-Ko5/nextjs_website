import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../Library/posts'

const Post = ({ post }: any) => {
  if (!post) {
    return <div>Loading</div>
  }
  return (
    <Layout title={post.post.title}>
      <div className="px-10 text-center">
        <p className="m-4">ID:{post.post.id}</p>
        <p className="mb-8 text-xl font-bold"> {post.post.title}</p>
        <p className="mb-24">{post.post.body}</p>
        <div>
          <Link href="/blog">記事一覧へ戻る</Link>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const post = await getPostData(params.id)
  return {
    props: {
      post: post
    }
  }
}

export default Post
