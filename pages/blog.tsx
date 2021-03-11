import Layout from '../components/Layout'
import Post from '../components/blogs/Post'

import { getAllPostData } from '../Library/posts'

export interface post {
  userId: number
  id: number
  title: string
  body: string
}

const Blog = ({ posts }: any) => {
  return (
    <Layout title="Blog">
      <div className="m-10 text-left">
        {posts && posts.map((post: post) => <Post key={post.id} post={post} />)}
      </div>
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const posts = await getAllPostData()
  return {
    props: { posts }
  }
}
