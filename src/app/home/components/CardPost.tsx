import { Card, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import DivImages from 'app/shared/components/DivImages'
import PostCounts from 'app/shared/components/PostCounts'
import { Post } from 'app/shared/firestore/types/post'
import { toDateText } from 'app/shared/helpers/toDateText'
import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  inProgress?: boolean
  post: Post
}

const CardPost: FunctionComponent<Props> = ({ inProgress, post }) => {
  const classes = useStyle({})

  return (
    <Link to={`/threads/${post.id}`}>
      <Card className={classes.card} elevation={0}>
        <Typography className={classes.text} variant={'body2'}>
          {post.text}
        </Typography>
        {post.photoURLs.length !== 0 && (
          <DivImages photoURLs={post.photoURLs} />
        )}
        <div className={classes.data}>
          <Typography color={'textSecondary'} variant={'caption'}>
            {toDateText(post.createdAt)}
          </Typography>
          <PostCounts
            replyPostCount={post.replyPostCount}
            likeCount={post.likeCount}
          />
        </div>
      </Card>
    </Link>
  )
}

const useStyle = makeStyles<Theme>(({ palette, spacing, typography }) => {
  return {
    card: {
      display: 'grid',
      gridGap: spacing(0.5),
      paddingBottom: spacing(1.2),
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      paddingTop: spacing(1.2),
      '&:hover': { background: 'rgba(0, 0, 0, 0.1)' }
    },
    data: {
      display: 'grid',
      gridAutoFlow: 'column',
      justifyContent: 'space-between'
    },
    text: {
      fontSize: typography.pxToRem(16),
      fontWeight: typography.fontWeightMedium,
      whiteSpace: 'pre-line',
      wordBreak: 'break-all'
    }
  }
})

export default CardPost
