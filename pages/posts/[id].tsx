import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../Library/posts'

const Post = ({ post }: any) => {
  return (
    <Layout title="Blog">
      <div className="m-10 text-left">{post.post.body}</div>
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
