import React from 'react'
import RecipeCard from '../RecipeCard'

function index({ trio }) {
  return (
    <div className='flex'>
      {trio.map((recipe, index) => (<RecipeCard key={index} width="card-trio" recipe={recipe} />))}
    </div>
  )
}

export default index