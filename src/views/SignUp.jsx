import React, { } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function SignUp() {


    let navigate = useNavigate();
    function handleClick() {
        navigate('/login');
    };
    function signUpNow(e) {
        e.preventDefault()


        var userName = document.getElementById('name').value
        var userEmail = document.getElementById('email').value.toLowerCase()
        var userPhone = document.getElementById('phone').value
        var userPassword = document.getElementById('password').value

        // console.log(userEmail)
        var userData = {
            userName: userName,
            userEmail: userEmail,
            userPhone: userPhone,
            userPassword: userPassword
        }
        // console.log(userData)
        axios({
            method: 'post',
            url: 'http://localhost:5000/signup',
            data: userData,
            withCredentials: true

        })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    handleClick()
                    alert(response.data.message)
                    document.getElementById("name").value = ""
                    document.getElementById("email").value = ""
                    document.getElementById("phone").value = ""
                    document.getElementById("password").value = ""

                } else {
                    alert(response.data.message)
                    // console.log(response.data)
                }
            })
            .catch(function (error) {
                alert(error)

            });
        return false;

    }


    return (
        <section className="container-fluid" style={{ backgroundColor: '#eee', height: '100vh' }}>
            <div className="container" >
                <div style={{ backgroundColor: '#eee', height: '100vh' }} className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                        <form className="mx-1 mx-md-4" onSubmit={signUpNow}>
                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-user fa-lg me-3 fa-fw pt-4" />
                                                <div className="text-start form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="name">Your Name</label>
                                                    <input type="text" id="name" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw pt-4" />
                                                <div className="text-start form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="email">Your Email</label>
                                                    <input type="email" id="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw pt-4" />
                                                <div className="text-start form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                    <input type="password" id="password" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-key fa-lg me-3 fa-fw pt-4" />
                                                <div className="text-start form-outline flex-fill mb-0">
                                                    <label className="form-label " htmlFor="phone">phone</label>
                                                    <input type="number" id="phone" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-check d-flex justify-content-start mb-5">
                                                <Link to={'/login'}>
                                                    <label className="text-start form-check-label" htmlFor="form2Example3">
                                                        Already Have Account?
                                                    </label>
                                                </Link>
                                            </div>
                                            <div className=" d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
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
