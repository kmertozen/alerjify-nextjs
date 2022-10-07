import React from 'react'
import RecipeCard from '../../components/RecipeCard';
import AlerjiSwiper from '../../components/AlerjiSwiper';

function index({ recipes, alerjiler }) {
    return (
        <div className='container wrapper'>
            <div className='allergies'>
                
            </div>
            <div className='recipes'>
                {recipes.map((recipe, index) => {
                    return <RecipeCard key={index} width='card-trio' recipe={recipe} />
                })}
            </div>
        </div>
    )
}

export async function getServerSideProps({ recipes }) {
    const req = await fetch(`https://www.alerjify.com/api/recipes`);
    const data = await req.json();
    const alerjiler = await fetch(`https://www.alerjify.com/api/alerjiler`);
    const alerjilerData = await alerjiler.json();
    return {
        props: { recipes: data, alerjiler: alerjilerData }
    }
}

export default index