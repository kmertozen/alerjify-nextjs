import React from 'react'
import Image from 'next/image'

import { FaHeart, FaClock } from 'react-icons/fa'
function index({ recipe }) {
    return (
        <div className='recipe-card-side'>
            <div className='image-wrapper'>
                <Image layout='fill' src={`https://www.alerjify.com/images/recipes/${recipe.cuuu}`} alt='img' />
            </div>
            <div className='body'>
                <div>
                    <span className="sub-title">
                        <a href={`/tarif/${recipe.slugurl}`}>Pratik Yemekler</a>
                    </span>
                </div>
                <div>
                    <span className="title">
                        <a href={`/tarif/${recipe.slugurl}`}>Pratik Patates Püresi</a>
                    </span>
                </div>
                <div className="flex"><FaClock color='#47c757' /> <span>30 Aralık, 2019</span></div>
                <div className="flex"><FaHeart color='#47c757' /> <span>20 Beğeni</span></div>

            </div>
        </div>
    )
}

export default index