import React from 'react'
import Header from './Header'

import Cart from './cart'
export default function Shop() {
    return (
        <div style={{ backgroundColor: '#dcdcdc' }}>
            <Header />
            <div className='p-5' style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>This is Shop Screen</h1>
            </div>
            <div className="container">
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>
        </div>

    )
}
