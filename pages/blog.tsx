import Layout from '../components/Layout'
import Post from '../components/blogs/Post'

import { getAllPostData } from '../Library/posts'

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <div className="m-10 text-left">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
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
