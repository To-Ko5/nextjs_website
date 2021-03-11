import fetch from 'node-fetch'
const url = 'https://jsonplaceholder.typicode.com/posts'

export async function getAllPostData() {
  const res = await fetch(new URL(url))
  const posts = res.json()
  return posts
}
