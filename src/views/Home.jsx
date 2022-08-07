import React, { useState } from 'react'
import Header from './Header'
export default function Home() {
    const [changeTabClass, setChangeClassTab] = useState('vFF/Hiorg')

    return (
        <>
            <Header />
            <section className='container-fluid'>
                <div className='d-flex justify-content-between'>
                    {/* This is left side  */}
                    <div className='col-10 d-flex justify-content-between p-0 m-0 container'>
                        <div className='col-6 justify-content-between'>
                            <button className='home-item-box'>Mein Profile</button>
                            <button className='home-item-box'>Shop</button>
                        </div>

                        <div className='col-6 justify-content-between'>
                            <button className='home-item-box'>Tool</button>
                            {/* <button className='home-item-box'>welcome to  Home Page</button> */}
                            <button className='home-item-box-control'>{'Control View Center (only From Hight Rank)'}</button>
                        </div>
                    </div>

                    {/* This is Right side  */}
                    <div className='col-2 justify-content-left mainTabContainer'>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button onClick={() => setChangeClassTab("vFF/Hiorg")} className={`nav-link ${changeTabClass === 'vFF/Hiorg' ? 'active' : ''}`}>vFF/Hiorg RD</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => setChangeClassTab("vFB")} className={`nav-link ${changeTabClass === 'vFB' ? 'active' : ''}`} >vFB</button>
                            </li>
                        </ul>
                        <div className='tabContait'>
                            <h5>Mein Fahrzeug</h5>
                            <div>
                                <img src="./Wappenblanko.png" className="img-fluid" alt="Sample" />
                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
