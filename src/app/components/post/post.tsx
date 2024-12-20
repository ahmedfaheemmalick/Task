import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import deleteIcon from '../../assets/trash.svg'
import PostType from '../../types'
import Image from 'next/image'

const Post = ({
  post,
  handleDelete,
}: {
  post: PostType
  handleDelete: (id: number) => void
}) => {
  return (
    <Card
      sx={{
        minWidth: 330,
        minHeight: 250,
        borderRadius: 2,
        boxShadow: 3,
        transition: 'transform 0.3s ease-in-out',
        position: 'relative',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}>
      <CardContent>
        <Typography
          variant='h5'
          component='div'
          sx={{
            fontWeight: 'bold',
            color: '#1976d2',
            marginBottom: 1,
          }}>
          {post.title}
        </Typography>
        <Typography
          variant='body2'
          sx={{
            color: 'text.secondary',
            lineHeight: 1.6,
          }}>
          {post.body}
        </Typography>
        <IconButton
          sx={{
            position: 'absolute',
            bottom: 10,
            right: 10,
          }}>
          <Image
            width={25}
            height={25}
            src={deleteIcon}
            alt='Delete Icon'
            onClick={() => handleDelete(post.id)}
          />
        </IconButton>
      </CardContent>
    </Card>
  )
}

export default Post
