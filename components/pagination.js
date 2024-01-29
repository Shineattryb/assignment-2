import React from 'react';
import './pagination.css';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const goToPrevPage = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={goToPrevPage} disabled={isFirstPage}>
        Prev
      </button>
      <p>Page {currentPage} of {totalPages}</p>
      <button onClick={goToNextPage} disabled={isLastPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

