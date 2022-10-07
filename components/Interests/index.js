import React from 'react'
import RecipeCardSide from '../RecipeCardSide'

function index({ interests }) {
    return (
        <div className='interests'>
            <div className='title-header'>
                <h3 className='title'>İlginizi Çekebilir</h3>
            </div>
            {interests.map((recipe, index) => {
                if (index < 5) {
                    return <RecipeCardSide key={index} recipe={recipe} />
                }
            })}
        </div>
    )
}

export default index