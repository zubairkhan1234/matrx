import React from 'react'
import Logo from '../assets/Wappenblanko2.png'
import { Link } from 'react-router-dom'
export default function AdminHeader() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
                <div className="container-fluid">

                    <div style={{ margin: '0px 10px' }}>
                        <img src={Logo} alt="web-logo" style={{ width: '35px', height: '40px' }} />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className='d-flex'>
                        <div className='mx-3'>
                            <Link to={'/home-alluser'} style={{ border: 'none', textDecoration: 'none', color: 'black' }}>
                                All User
                            </Link>
                        </div>
                        <div className='mx-3'>
                            <Link to={'/home-allShops'} style={{ border: 'none', textDecoration: 'none', color: 'black' }}>
                                All Shops
                            </Link>
                        </div>
                        <div>
                            <Link to={'/home-create-shop'} style={{ border: 'none', textDecoration: 'none', color: 'black' }}>
                                create Shop
                            </Link>
                        </div>
                    </div>
                </div>
            </nav >
        </div>
    )
}
