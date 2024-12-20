import { NextResponse } from 'next/server'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export async function getPosts(): Promise<NextResponse> {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
    })

    const posts: Post[] = await res.json()

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching :', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
