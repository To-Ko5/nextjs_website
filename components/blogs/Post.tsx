const Post = ({ post }: any) => {
  return (
    <div className="mb-2">
      <span>{post.id}</span>:
      <span className="cursor-pointer text-blue-400 border-b brder-blue-400 hover:bg-gray-300">
        {post.title}
      </span>
    </div>
  )
}

export default Post
