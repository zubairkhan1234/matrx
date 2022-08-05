import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function ForgotPassword() {


    const [isRequested, setRequested] = useState("")
    function forgorsubmit1(event) {
        event.preventDefault()

        var Email = document.getElementById('forgotEmail').value

        axios({
            url: 'http://localhost:5000/forget-password',
            method: 'post',
            data: {
                forgetEmail: Email,
            },
            withCredentials: true
        })
            .then(function (response) {
                console.log(response)
                if (response.status === 200) {
                    alert(response.data.message)
                    setRequested(Email)
                    document.getElementById('forgotEmail').value = ""
                } else {
                    alert(response.data.message)
                }
            })
            .catch(function (error) {
                alert(error.message)
                console.log("ldafjldja ", error.response.data.message)

            });

        return false;

    }
    function forgorsubmit2(event) {
        event.preventDefault()

        var NewPass = document.getElementById('pass1').value
        var ConfirmPass = document.getElementById('pass2').value
        var otpcode = document.getElementById('otpcode').value
        if ((NewPass === ConfirmPass) && (otpcode !== '')) {




            axios({
                url: 'http://localhost:5000/forget-password-step-2',
                method: 'post',
                data: {
                    emailVarification: isRequested,
                    newPassword: NewPass,
                    otpCode: otpcode,
                },
                withCredentials: true
            })
                .then(function (response) {
                    console.log(response)
                    if (response.data.status === 200) {
                        alert(response.data.message)
                    } else {
                        alert(response.data.message)
                    }
                })
                .catch(function (error) {
                    alert(error.message)
                    console.log("ldafjldja ", error.response.data.message)

                });

        }
        return false;

    }

    return (
        <section className="vh-100" style={{ backgroundColor: '#eee' }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Forgot Password</p>
                                        {isRequested !== "" ?
                                            <form className="mx-1 mx-md-4" onSubmit={forgorsubmit2}>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw pt-4" />
                                                    <div className="text-start form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="pass1">new Password</label>
                                                        <input type="password" id="pass1" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw pt-4" />
                                                    <div className="text-start form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="pass2">Confirm Password</label>
                                                        <input type="password" id="pass2" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw pt-4" />
                                                    <div className="text-start form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="otpcode">OTP / Varification Code</label>
                                                        <input type="number" id="otpcode" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-check d-flex justify-content-start mb-5">
                                                    <Link to={'/login'}>
                                                        <label className="text-start form-check-label" htmlFor="form2Example3">
                                                            Login Now
                                                        </label>
                                                    </Link>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Forgot Password</button>
                                                </div>
                                            </form>

                                            :

                                            <form className="mx-1 mx-md-4" onSubmit={forgorsubmit1}>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw pt-4" />
                                                    <div className="text-start form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="forgotEmail">Your Email</label>
                                                        <input type="email" id="forgotEmail" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Forgot Password</button>
                                                </div>
                                            </form>
                                        }
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample" />
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
