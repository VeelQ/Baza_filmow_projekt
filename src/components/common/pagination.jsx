import React from "react";
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = ( props ) => {

  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) {
       return null;
  }
  
  const pages =_.range(1, pagesCount + 1);


   return (
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" onClick={() => currentPage>1?onPageChange(currentPage-1):null}>
          <span aria-hidden="true">Prev</span>
        </a>
      </li>
      {pages.map((item, key) => (
                   <li key={key} className={ item === currentPage ? 'page-item active' : 'page-item' }>
                       <a style={{cursor: 'pointer'}} className="page-link" onClick={() => onPageChange(item)}>{item}</a>
                   </li>
                   )
               )}
          <li class="page-item">
          <a class="page-link" href="#" aria-label="Next" onClick={() => currentPage!=pagesCount?onPageChange(currentPage+1):null}>
            <span aria-hidden="true">Next</span>
          </a>
        </li>
      </ul>
   )
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
