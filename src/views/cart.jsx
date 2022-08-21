import React from 'react'


import Logo from '../assets/gamesceen.jpg'

export default function Cart() {


    return <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around',marginTop: '10px' }}>

        <div className="card" style={{ width: '17rem' }}>
            <img className="card-img-top" src={Logo} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div className="card" style={{ width: '17rem' }}>
            <img className="card-img-top" src={Logo} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div className="card" style={{ width: '17rem' }}>
            <img className="card-img-top" src={Logo} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div className="card" style={{ width: '17rem' }}>
            <img className="card-img-top" src={Logo} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
}