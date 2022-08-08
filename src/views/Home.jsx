import React, { useState } from 'react'
import Header from './Header'
import Logo from '../assets/Wappenblanko.png'

import { Link } from 'react-router-dom'
export default function Home() {
    const [changeTabClass, setChangeClassTab] = useState('vFF/Hiorg')

    return (
        <>
            <Header />
            <section className='container-fluid h-100'>
                <div className='row'>
                    <div className='row col-12 '>
                        <div className='col-9 row'>
                            <div className='col-6 home-page-pager'>
                                <Link to={'/home-tool'}>
                                    <button className='home-item-box'>
                                        Mein Profile
                                    </button>
                                </Link>
                                <button className='home-item-box'>Shop</button>
                                <div>
                                    <i className="fas fa-pager fa-lg me-3 fa-fw pt-4" />
                                </div>
                            </div>
                            <div className='col-6'>
                                <button className='home-item-box'>Tool</button>
                                <button className='home-item-box-control'>{'Control View Center  overview (only From Hight Rank)'}</button>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div>
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
                                    <div style={{ margin: '0px 5px', padding: '10px', backgroundColor: 'white', width: '300px', height: '290px', display: 'flex', justifyContent: 'center' }}>
                                        <img src={Logo} className="img-fluid" alt="Sample"  />
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
                </div>
            </section>

        </>
    )
}


// {/* <section className='container-fluid h-100'>
// <div className='d-flex justify-content-between'>
//     <div className='col-9 d-flex  justify-content-between p-0 m-0 container'>
//         <div className='col-6 home-page-pager' style={{ height: '500px' }}>
//             <Link to={'/home-tool'}>
//                 <button className='home-item-box'>
//                     Mein Profile
//                 </button>
//             </Link>
//             <button className='home-item-box'>Shop</button>
//             <div>
//                 <i className="fas fa-pager fa-lg me-3 fa-fw pt-4" />
//             </div>
//         </div>
//         <div className='col-6 ' style={{ height: '500px' }}>
//             <button className='home-item-box'>Tool</button>
//             <button className='home-item-box-control'>{'Control View Center  overview (only From Hight Rank)'}</button>
//         </div>
//     </div>

//     <div className='col-3 justify-content-left mainTabContainer'>
//         <ul className="nav nav-tabs">
//             <li className="nav-item">
//                 <button onClick={() => setChangeClassTab("vFF/Hiorg")} className={`nav-link ${changeTabClass === 'vFF/Hiorg' ? 'active' : ''}`}>vFF/Hiorg RD</button>
//             </li>
//             <li className="nav-item">
//                 <button onClick={() => setChangeClassTab("vFB")} className={`nav-link ${changeTabClass === 'vFB' ? 'active' : ''}`} >vFB</button>
//             </li>
//         </ul>
//         <div className='tabContait'>
//             <div style={{ margin: '5px' }}>
//                 <h6>Mein Fahrzeug</h6>
//             </div>
//             <div style={{ margin: '0px 5px', padding: '10px', backgroundColor: 'white', width: '300px', height: '290px', display: 'flex', justifyContent: 'center' }}>
//                 <img src={Logo} className="img-fluid" alt="Sample" style={{ width: '230px', height: '270px' }} />
//             </div>
//             <div className='tabContait'>
//                 <h4>Mein Fahrzeug besetzt</h4>
//                 <p>Fahrzeug</p>
//                 <p className='Sepura'>Sepura</p>
//                 <p>Fahrzeug verlassen  </p>
//             </div>
//         </div>
//     </div>

// </div>
// </section> */}