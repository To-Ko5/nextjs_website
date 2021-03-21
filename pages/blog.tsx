import Layout from '../components/Layout'
import Post from '../components/blogs/Post'
import { Post as PostInterface } from '../types/Types'
import { getAllPostData } from '../library/posts'
import { GetStaticProps } from 'next'

interface PostList {
  posts: PostInterface[]
}

const Blog: React.FC<PostList> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <div className="m-10 text-left">
        {posts &&
          posts.map((post: PostInterface) => <Post key={post.id} {...post} />)}
      </div>
    </Layout>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostData()
  return {
    props: { posts }
  }
}
