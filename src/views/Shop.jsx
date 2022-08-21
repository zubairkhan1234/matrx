import React from 'react'


import Cart from './cart'
export default function Shop() {
    return (
        <div>
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
