import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const useStyles = makeStyles({
  card: {
    margin: '20px',
    maxWidth: '400px',
  },
});

const PostsComponent: React.FC = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography color="textSecondary">
              User ID: {post.userId}
            </Typography>
            <Typography variant="body2" component="p">
              {post.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostsComponent;
