import React from 'react'
import "./pagination.css"

function Pagination({ recipesPerPage, totalRecipes, paginate }) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      {totalRecipes > 10 ? <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button type='button' onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul> : ""}

    </nav>
  )
}

export default Pagination