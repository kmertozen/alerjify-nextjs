import React from 'react'
import RecipeCard from '../RecipeCard'

function index({ trends }) {
    return (
        <div className='trends'>
            <div className='title-header'>
                <h3 className='title'>Trendler</h3>
            </div>
            <div className='recipes'>
                {trends.map((recipe, index) => {

                    return <RecipeCard key={index} width="card-trend" recipe={recipe} />

                })}
            </div>

        </div>

    )
}

export default index