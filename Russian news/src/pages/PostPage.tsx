import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchPost } from '../services/api';
import { PostProps } from '../components/Post';
import styles from './PostPage.module.css';

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostProps | null>(null);

  useEffect(() => {
    const getPost = async () => {
      const data = await fetchPost(Number(id));
      setPost(data);
    };

    getPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className={styles.postPage}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to={`/`}>Back</Link>
    </div>
  );
};

export default PostPage;
