import React from 'react'
// import Logon from '../assets/logo.png'
import Logo from '../assets/Wappenblanko2.png'
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
            <div className="container-fluid">
                <div style={{ margin: '0px 10px' }}>
                    <img src={Logo} alt="web-logo" style={{ width: '35px', height: '40px' }} />
                </div>
                <div style={{ margin: '0px 10px'}}>
                    <a className="navbar-brand" href="https://www.google.com">Aron</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com">Kein FW Rang</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com">Kein RD Rang</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
