import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const [pageButtons, setPageButtons] = useState([]);

  useEffect(() => {
    // Generate pagination buttons based on current page and total pages
    const generatePageButtons = () => {
      const buttons = [];
      if (totalPages <= 2) {
        for (let i = 1; i <= totalPages; i++) {
          buttons.push(
            <button key={i} onClick={() => onPageChange(i)} className={i === currentPage ? "current" : ""}>
              {i}
            </button>
          );
        }
      } else {
        buttons.push(
          <button key={1} onClick={() => onPageChange(1)} className={currentPage === 1 ? "current" : ""}>
            1
          </button>
        );
        buttons.push(
          <button key={2} onClick={() => onPageChange(2 )} className={currentPage === 2 ? "current" : ""}>
            2
          </button>
        );
        buttons.push(
          <button key="next" onClick={() => onPageChange(currentPage + 1)} disabled={isLastPage}>
            NEXT
          </button>
        );
        if (!isFirstPage) {
          buttons.unshift(
            <button key="prev" onClick={() => onPageChange(currentPage - 1)}  className={currentPage === currentPage - 1 ? "current" : ""}>
              PREV
            </button>
          );
        }
      }
      setPageButtons(buttons);
    };

    generatePageButtons();
  }, [currentPage, totalPages, isFirstPage, isLastPage, onPageChange]);

  return (
    <div className="pagination">
      {pageButtons}
    </div>
  );
};

export default Pagination;


