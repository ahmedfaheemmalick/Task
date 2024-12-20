'use client'

import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import Post from './components/post/post'
import PostType from './types'

const Home = () => {
  const [posts, setPosts] = useState<PostType[] | []>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.splice(0, 10)))
  }, [])

  const handleDelete = (id: number) => {
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts)
  }

  return (
    <div>
      <Grid container spacing={5}>
        {posts.length != 0 &&
          posts.map((post, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                minWidth: 300,
                minHeight: 200,
              }}>
              <Post post={post} key={index} handleDelete={handleDelete} />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

export default Home
