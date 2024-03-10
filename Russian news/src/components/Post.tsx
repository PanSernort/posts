import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Post.module.css';

export interface PostProps {
  id: number;
  title: string;
  body: string;
}

const Post: React.FC<PostProps> = ({id, title, body}) => {
  return (
    <div className={styles.post}>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>Read more</Link>
    </div>
  )
}




export default Post