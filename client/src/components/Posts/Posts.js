import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

// ! material
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={'mainContainer'} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
