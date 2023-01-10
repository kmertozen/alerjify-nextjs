import axios from 'axios';
import React from 'react'
import RecipeCard from '../../components/RecipeCard';

function index({ recipes, alerjiler }) {
    axios("http://localhost:1337/api/recipes")
    .then(response=>console.log(response.data.data))
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