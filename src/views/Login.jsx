import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <section className="vh-100" style={{ backgroundColor: '#eee' }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                <div className="text-start form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    <input type="email" id="form3Example3c" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                <div className="text-start form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    <input type="password" id="form3Example4c" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-check d-flex justify-content-between mb-5">
                                                <div className='ml-3'>
                                                    <Link to={'/'}>
                                                        <label className="text-start  form-check-label" htmlFor="form2Example3">
                                                            Don't Have Account?
                                                        </label>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link to={'/forgot-Password'}>
                                                        <label className="text-start form-check-label" htmlFor="form2Example3">
                                                            Forgot Password?
                                                        </label>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
