import fetch from 'node-fetch'
const url = 'https://jsonplaceholder.typicode.com/posts'

export async function getAllPostData() {
  const res = await fetch(new URL(url))
  const posts = res.json()
  return posts
}

export async function getAllPostIds() {
  const res = await getAllPostData()
  return res.map((post: { id: number }) => {
    return {
      params: {
        id: String(post.id)
      }
    }
  })
}

export async function getPostData(id: number) {
  const res = await fetch(new URL(`${url}/${id}/`))
  const post = res.json()
  return post.then((post) => {
    return {
      post
    }
  })
}
