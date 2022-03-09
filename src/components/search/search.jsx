import React from 'react'
import "./search.css"

function Search({ handleChange, searchRecipe, handleSubmit, handleReset }) {
  return (
    <div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="search" className="sr-only mb-2">Search For Recipe</label>
          <input type="text" className="form-control" id="search" value={searchRecipe} onChange={handleChange} placeholder="E.g.chicken" />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Search</button>
        <button type="button" onClick={handleReset} className="btn btn-primary mb-2 reset-btn">Reset Search</button>
      </form>
    </div>
  )
}

export default Search