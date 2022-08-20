import React, { useState } from 'react'
import Header from './Header'
import Logo from '../assets/Wappenblanko.png'

import { Link } from 'react-router-dom'
export default function Home() {
    const [changeTabClass, setChangeClassTab] = useState('vFF/Hiorg')

    return (
        <>
            <Header />
            <div className="row m-0 ">
                <div className="col-lg-9 col-md-9 col-sm-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 home-page-pager text-center">
                            <div>
                                <Link to={'/home-profile'}>
                                    <button className='home-item-box'>
                                        Mein Profile
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <Link to={'/home-shop'}>
                                    <button className='home-item-box'>Shop</button>
                                </Link>

                            </div>
                            <div className='d-md-block d-sm-none' style={{ textAlign: 'left' }}>
                                <i className="fas fa-pager fa-lg me-3 fa-fw pt-4" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 text-center home-page-pager">

                            <div>
                                <Link to={'/home-tool'}>
                                    <button className='home-item-box'>Tool</button>
                                </Link>
                            </div>
                            <div>

                                <button onClick={() => alert('Sie können dies nicht sehen, da Sie kein Administrator sind')} className='home-item-box-control'>{'Control View Center  overview (only From Hight Rank)'}</button>

                            </div>

                            <div className='d-md-none d-sm-block mb-sm-5'>
                                <i className="fas fa-pager fa-lg me-3 fa-fw pt-4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className='col-12'>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button onClick={() => setChangeClassTab("vFF/Hiorg")} className={`nav-link ${changeTabClass === 'vFF/Hiorg' ? 'active' : ''}`}>vFF/Hiorg RD</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => setChangeClassTab("vFB")} className={`nav-link ${changeTabClass === 'vFB' ? 'active' : ''}`} >vFB</button>
                            </li>
                        </ul>
                        <div className='tabContait'>
                            <div style={{ margin: '5px' }}>
                                <h6>Mein Fahrzeug</h6>
                            </div>
                            <div style={{ padding: '6%', backgroundColor: 'white' }}>
                                <img src={Logo} className="img-fluid" alt="Sample" />
                            </div>
                            <div className='tabContait'>
                                <h4>Mein Fahrzeug besetzt</h4>
                                <p>Fahrzeug</p>
                                <p className='Sepura'>Sepura</p>
                                <p>Fahrzeug verlassen  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

