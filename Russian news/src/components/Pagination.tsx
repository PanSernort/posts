import React from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  
  const range = 5;
  const delta = Math.floor(range / 2);

  let startPage = currentPage - delta;
  let endPage = currentPage + delta;

  
  if (startPage <= 0) {
    endPage -= (startPage - 1);
    startPage = 1;
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    if (endPage - range + 1 > 0) {
      startPage = endPage - range + 1;
    } else {
      startPage = 1;
    }
  }


  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={`${styles.pageItem} ${currentPage === number ? styles.active : ''}`}>
            <button
              onClick={() => paginate(number)}
              className={styles.pageLink}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
