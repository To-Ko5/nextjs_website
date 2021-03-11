import fetch from 'node-fetch'
const url = 'https://jsonplaceholder.typicode.com/posts'

export async function getAllPostData() {
  const res = await fetch(new URL(url))
  const posts = res.json()
  return posts
}

export async function getAllPostIds() {
  const res = await fetch(new URL(url))
  const posts = res.json()

  return posts.map((post: { id: number }) => {
    return {
      params: {
        id: String(post.id)
      }
    }
  })
}

export async function getPostDate(id: string) {
  const res = await fetch(new URL(`${url}/${id}/`))
  const post = res.json()

  return {
    post
  }
}
