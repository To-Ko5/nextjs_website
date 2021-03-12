import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../Library/posts'

const Post = ({ post }: any) => {
  if (!post) {
    return <div>Loading</div>
  }
  return (
    <Layout title={post.post.title}>
      <p className="m-4">ID:{post.post.id}</p>
      <p className="mb-8 text-xl font-bold"> {post.post.title}</p>
      <p className="px-10">{post.post.body}</p>
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
