import React from 'react'
import './HeroSection.css'
import pfp from "../../assets/images/pfp.png"

const HeroSection = () => {
    return (
        <>
            <div className='hero'>
                <div className='hero__container'>
                    <img className='hero__pfp' src={pfp} alt='pfp' />
                    <div className='hero__titleContainer'>
                        <h2 className='hero__title'>Dylan Dabrowski</h2>
                        <p className='hero__description'>My name is Dylan and I make websites and code and stuff.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
