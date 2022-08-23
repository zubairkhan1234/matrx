import React from 'react'
import AdminHeader from './AdminHeader'
import { useSelector } from 'react-redux'
import axios from 'axios'
export default function ControlPannel() {
  const { user, profileData } = useSelector(state => state.authState)


  function createShop(event) {
    event.preventDefault(event)
    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var shopName = document.getElementById('shopName').value
    var shopDetail = document.getElementById('shopDetail').value
    var shopAddress = document.getElementById('shopAddress').value

    let data = {
      firstName,
      lastName,
      shopName,
      shopDetail,
      shopAddress,
      id: profileData.UserId,
      role: user.role,
    }
    console.log("shop data   => ", data)


    axios({
      method: "post",
      url: 'http://localhost:5000/createShop',
      data: data,
      withCredentials: true
    })
      .then(function (response) {
        console.log("response ==> ", response)
        if (response.status === 201) {
          // console.log(response)
          alert(response.data.message)
        } else {
          alert("please login from Admin ")
        }
      })
      .catch(function (error) {
        console.log(error)
      })

  }

  return (
    <div>
      <AdminHeader />
      <section className="container-fluid" style={{ backgroundColor: '#eee', height: '100%' }}>
        <div className="container" >
          <div className="row d-flex justify-content-center align-items-center" >
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-6 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create Shop</p>
                      <form className="mx-1 mx-md-4" onSubmit={createShop}>


                        <div className="row">
                          <div className="col">
                            <div className="text-start form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="firstName">First Name</label>
                              <input type="text" id="firstName" className="form-control" />
                            </div>
                          </div>
                          <div className="col">
                            <div className="text-start form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="lastName">Last Name</label>
                              <input type="text" id="lastName" className="form-control" />
                            </div>
                          </div>
                        </div>


                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="text-start form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="shopName">Shop Name</label>
                            <input type="text" id="shopName" className="form-control" />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="text-start form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="shopAddress">Shop Address</label>
                            <input type="text" id="shopAddress" className="form-control" />
                          </div>
                        </div>

                        <div className="align-items-center mb-2">
                          <div class="form-group">
                            <label htmlFor="shopDetail">Shop Detail</label>
                            <textarea className="form-control" id="shopDetail" rows="3"></textarea>
                          </div>
                        </div>

                        <div className=" d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
