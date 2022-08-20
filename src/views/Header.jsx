import React from 'react'
// import Logon from '../assets/logo.png'
import Logo from '../assets/Wappenblanko2.png'
import { Link } from 'react-router-dom'
import { UseGlobalState } from '../context/context'
export default function Header() {

    const GlobalState = UseGlobalState()
    console.log(GlobalState.userProfile)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
            <div className="container-fluid">

                <div style={{ margin: '0px 10px' }}>
                    <img src={Logo} alt="web-logo" style={{ width: '35px', height: '40px' }} />
                </div>
                <div style={{ margin: '0px 10px' }}>
                    <a className="navbar-brand" href="/home">{GlobalState.user.name}</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link" href="#">{GlobalState.userProfile.BereichFeuerwehr.rang}</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">{GlobalState.userProfile.BereichRettungsdienst.rang}</span>
                        </li>
                    </ul>
                </div>
                <button style={{border : 'none', textDecoration: 'none'}}> 
                    <Link to={'/home-quize'} style={{border : 'none', textDecoration: 'none', color: 'black'}}>

                        Start Quiz
                    </Link>
                </button>

            </div>
        </nav >
    )
}
