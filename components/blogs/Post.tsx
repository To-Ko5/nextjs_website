import Link from 'next/link'
import { Post } from '../../types/Types'

const Post: React.FC<Post> = ({ id, title }) => {
  return (
    <div className="mb-2">
      <span>{id}</span>:
      <Link href={`posts/${id}`}>
        <span className="cursor-pointer text-blue-400 border-b brder-blue-400 hover:bg-gray-300">
          {title}
        </span>
      </Link>
    </div>
  )
}

export default Post
