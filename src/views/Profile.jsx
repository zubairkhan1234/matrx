import React, { useState } from 'react'
import fwRange from '../assets/fwRange.png'
import rdRange from '../assets/rdRange.png'
import profilePic from '../assets/profile.png'
import RangePic from '../assets/range.png'
import ProfileLogo from '../assets/profileform.png'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function Profile() {


    const [toggle, setToggelCondition] = useState('range')
    const { user, profileData } = useSelector(state => state.authState)


    function changePassword(e) {
        e.preventDefault()


        let userId = profileData.UserId
        let oldUserName = document.getElementById('oldPassword').value
        let newUserName = document.getElementById('newPassword').value
        let reEnterPassword = document.getElementById('reEnterPassword').value

        if (newUserName === reEnterPassword) {
            axios({
                url: 'http://localhost:5000/updatePassword',
                method: 'put',
                data: {
                    userId: userId,
                    oldPass: oldUserName,
                    newPass: newUserName
                },
                withCredentials: true
            })
                .then(function (response) {
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

            return false;
        } else {
            alert('Password is not matched')
        }
    }
    function changeEmail(e) {
        e.preventDefault()


        let userId = profileData.UserId
        let userEmail = document.getElementById('userEmailProfile').value

        console.log('userId', userId)
        console.log('userEmail', userEmail)

        axios({
            url: 'http://localhost:5000/updateEmail',
            method: 'put',
            data: {
                userId: userId,
                newEmail: userEmail
            },
            withCredentials: true
        })
            .then(function (response) {
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

        return false;
    }



    return (
        <div className='row profile-container'>
            <div className="col-lg-2 col-md-4 com-sm-12 bg-primary">
                <div className='mt-5'>

                    <div style={{ textAlign: 'center' }}>

                        <button onClick={() => setToggelCondition('range')} style={{ backgroundColor: 'transparent', border: '0px' }}>
                            <img src={RangePic} alt="side-Range" />
                            <p>

                                <span>
                                    Range
                                </span>
                            </p>
                        </button>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button onClick={() => setToggelCondition('profile')} style={{ backgroundColor: 'transparent', border: '0px' }}>
                            <img src={profilePic} alt="side-profile" />
                            <p>
                                <span>
                                    Profile
                                </span>
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#99b4d1' }} className={` col-lg-10 col-md-8 com-sm-12  ${toggle === "profile" ? "d-block" : "d-none"}`}>
                <div className="row justify-content-center align-items-center align-content-center text-align-center">
                    <div className="col-md-7 px-3 ">
                        <div >

                            <form>
                                <legend className="legentStyle fw-bold">Login</legend>
                                <fieldset className="border p-2" >
                                    <div className="form-group row">
                                        <div className="col-md-10">
                                            <label htmlFor="userNameProfile" className="col-form-label label-form">Benutzername:</label>
                                            <input type="text" defaultValue={user.name} className="costumInput form-control" id="userNameProfile" placeholder='Benutzername' />
                                        </div>
                                    </div>
                                    <div className="form-check mt-3">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Default checkbox
                                        </label>
                                    </div>
                                </fieldset>
                            </form>
                        </div>

                        <div >

                            <form onSubmit={changePassword}>
                                <legend className="legentStyle fw-bold">passwort ändern</legend>
                                <fieldset className="border p-2" >
                                    <div className="form-group row">
                                        <div className="col-md-10">
                                            <label htmlFor="oldPassword" className="col-form-label label-form ">Atles passwort eingeben:</label>
                                            <input type="text" id="oldPassword" className="costumInput form-control" placeholder='Atles passwort eingeben:' />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-10">
                                            <label htmlFor="newPassword" className="col-form-label label-form ">Neues passwort eingeben:</label>
                                            <input type="text" id="newPassword" className="costumInput form-control" placeholder='Neues passwort eingeben:' />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-10">
                                            <label htmlFor="reEnterPassword" className="col-form-label label-form ">Neues passwort erneut eingeben:</label>
                                            <input type="text" id="reEnterPassword" className="costumInput form-control" placeholder='Neues passwort erneut eingeben:' />
                                        </div>
                                    </div>

                                </fieldset>
                                <div className='custom-buttom-container'>
                                    <button type='submit' className='CostumButton'>Passwort speichem</button>
                                </div>
                            </form>
                        </div>


                        <div >

                            <form onSubmit={changeEmail}>
                                <legend className="legentStyle fw-bold">E-Mail ändern</legend>
                                <fieldset className="border p-2" >
                                    <div className="form-group row">
                                        <div className="col-md-10">
                                            <label htmlFor="userEmailProfile" className="col-form-label label-form ">aktulle E-Mail address:</label>
                                            <input type="text" className="costumInput form-control" id="userEmailProfile" defaultValue={user.email} placeholder='aktulle E-Mail address' />
                                        </div>
                                    </div>
                                </fieldset>
                                <button type='submit' className='CostumButton2'>E-Mail speichem</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5 text-center">
                        <img src={ProfileLogo} alt="profile-form" />
                        <button className='CostumButton2'>Teamspeak ID ändern </button>

                    </div>

                    <div style={{ backgroundColor: '#99b4d1' }} className={` col-12 my-3  ${toggle === "profile" ? "d-block" : "d-none"}`}>
                        <button className='CostumButton2'>Datenschutzerklärung und Nutzungsbedingungen einsehen</button>
                    </div>
                </div>
            </div>

            <div className={`col-lg-10 col-md-8 com-sm-12 p-4 ${toggle === "range" ? "d-block" : "d-none"}`}>
                <div className=" col-12 mb-5 mt-5">

                    <div className='row'>
                        <div style={{ width: '10%' }}>
                            <img src={fwRange} alt="fw-Range" />
                        </div>
                        <div style={{ width: '90%' }}>
                            <p className='profile-range-content' style={{ color: '#9e3131', }}> <span>{profileData.BereichFeuerwehr.title}</span></p>
                            {/* <p className='profile-range-content' style={{ color: 'red', marginLeft: '20%' }}><span>Fire</span></p> */}
                            <p className='profile-range-content'><span>Range:</span> {profileData.BereichFeuerwehr.rang}</p>
                            <p className='profile-range-content'><span>Nächster Range:</span> {profileData.BereichFeuerwehr.NächsterRange} </p>
                            <p className='profile-range-content'><span>benötigte Lehrgänge:</span>{profileData.BereichFeuerwehr.benötigteLehrgänge}</p>
                        </div>
                    </div>

                </div>
                <div className="row col-12 ">
                    {/* <div >
                        <p className='profile-range-content' style={{ color: 'red', textAlign: 'center' }}> <span>Rank OverView Fire and Rescue </span></p>
                    </div> */}
                    <div className='row'>

                        <div style={{ width: '10%' }}>
                            <img src={rdRange} alt="rd-Range" />
                        </div>
                        <div style={{ width: '90%' }}>
                            <p className='profile-range-content' style={{ color: '#2c89fd', }}> <span>{profileData.BereichRettungsdienst.title}</span></p>
                            {/* <p className='profile-range-content' style={{ color: 'red', marginLeft: '20%' }}><span>Rescue</span></p> */}
                            <p className='profile-range-content'><span>Range:</span> {profileData.BereichRettungsdienst.rang}</p>
                            <p className='profile-range-content'><span>Nächster Range:</span> {profileData.BereichRettungsdienst.NächsterRange} </p>
                            <p className='profile-range-content'><span>benötigte Lehrgänge:</span> {profileData.BereichRettungsdienst.benötigteLehrgänge}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}
