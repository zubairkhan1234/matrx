import React from 'react'
// import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
export default function Tool() {
  return (

    <section className='container-fluid '>
      <div className='row justify-content-center align-items-center tool-container'>
        <div className='col-md-6 h-auto-tool-box'>
          <div className='row justify-content-center '>
            <Link to={'/home-tool'} className='row justify-content-center text-decoration-none'>
              <button className='tool-item-box'>Brandmeldezentrale</button>
            </Link>
          </div>
          <div className='row justify-content-center'>
            <Link to={'/home-tool'} className='row justify-content-center text-decoration-none'>
              <button className='tool-item-box'>Atemschutzmanometer</button>
            </Link>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <div className='row justify-content-center'>
            <Link to={'/home-tool'} className='row justify-content-center text-decoration-none'>
              <button className='tool-item-box3'>Atemschutzuberwachung</button>
            </Link>
          </div>
          <div className='row justify-content-center'>
            <Link to={'/home-tool'} className='row justify-content-center text-decoration-none'>
              <button className='tool-item-box'>Zentrale Notaufnahme</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
