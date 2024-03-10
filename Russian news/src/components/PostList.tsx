import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import Post, { PostProps } from './Post';
import Pagination from './Pagination';
import styles from './PostList.module.css';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };

    getPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={styles.postList}>
      {currentPosts.map(post => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default PostList;
