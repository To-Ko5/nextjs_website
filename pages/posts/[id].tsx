import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../library/posts'
import { GetStaticProps, GetStaticPaths } from 'next'

const Post = ({ post }: any) => {
  if (!post) {
    return <div>Loading</div>
  }

  const { id, title, body } = post.post

  return (
    <Layout title={title}>
      <div className="px-10 text-center">
        <p className="m-4">ID:{id}</p>
        <p className="mb-8 text-xl font-bold"> {title}</p>
        <p className="mb-24">{body}</p>
        <div>
          <Link href="/blog">
            <a
              data-testid="back-blog"
              className="text-xs font-bold hover:underline"
            >
              記事一覧へ戻る
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const post = await getPostData(Number(ctx.params!.id))
  return {
    props: {
      post
    }
  }
}

export default Post
