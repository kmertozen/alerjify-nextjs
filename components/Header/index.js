import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

function Header() {
    const router= useRouter();
    const handleSearch=(e)=>{
        e.preventDefault();
        router.push(`/ara?s=${e.target[0].value}`)
    }
    return (
        <>
            <div className='header-master'>
                <div className='container'>
                    <div className='header-bar'>
                        <a href="/"><img width="200"  className='py-2' alt="Alerjify" src="https://www.alerjify.com/images/logo.png" /></a>
                        <form className="search " onSubmit={handleSearch}>
                            <input type="text" className="search-input" id="search" name="s" placeholder="İçerik arayın..." />
                            <button type="submit" className="search-button">
                                Ara
                            </button>

                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <nav className="navbar">
                    <Link href='/'>Ana Sayfa</Link>
                    <Link href='tarifler'>Tarifler</Link>
                    <Link href='#'>Diyetler</Link>
                    <Link href='#'>Alerjiler</Link>
                    <Link href='#'>Blog</Link>
                </nav>
            </div>
        </>
    )
}

export default Header