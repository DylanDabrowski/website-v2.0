import React from 'react'
import './HeroSection.css'
import pfp from "../../assets/images/pfp.png"
import pfp2 from "../../assets/images/pfp2.png"
import pfp3 from "../../assets/images/pfp3.png"

const HeroSection = () => {
    return (
        <>
            <div className='hero'>
                <div className='hero__container'>
                    <img className='hero__pfp' src={pfp} alt='pfp' />
                    <div className='hero__titleContainer'>
                        <h2 className='hero__title'>Dylan Dabrowski</h2>
                        <p className='hero__description'>Hi my name is Dylan welcome to my page</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
