import Image from 'next/image'
import React from 'react'
import { FaUser, FaClock, FaHeart } from 'react-icons/fa'
function RecipeCard({ recipe,width="" }) {
    return (
        <div className={`recipe-card ${width}`}>
            <a href={`/tarif/${recipe.slugurl}`}>
                <div className="recipe-image">
                    <Image layout='fill' src={`https://www.alerjify.com/images/recipes/${recipe.cuuu}`} className="w-full h-64 object-cover" alt='img' />
                </div>
            </a>
            <div className="recipe-info">
                <span className="sub-title">
                    <a href="https://www.alerjify.com">{recipe.kategori_ad}</a>
                </span>
                <h2>
                    <span>
                        <a href="https://www.alerjify.com">{recipe.yemek_ad}</a>
                    </span>
                </h2>
                <p>
                    {recipe.yemek_desc.substring(0, 100).replaceAll(/(<([^>]+)>)/gi, "").replaceAll("&nbsp;", "")}...
                </p>
                <ul className="recipe-metas">
                    <li><FaUser color='#47c757' /> Mert</li>
                    <li><FaClock color='#47c757' /> 20dk</li>
                    <li><FaHeart color='#47c757' /> 20 Beğeni</li>
                </ul>
            </div>
        </div>
    )
}

export default RecipeCard