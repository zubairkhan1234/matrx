import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdminHeader from './AdminHeader'
export default function AllShops() {
    const [shops, setshops] = useState([])

    useEffect(() => {

        axios({
            method: "get",
            url: 'http://localhost:5000/appshops',
            withCredentials: true
        })
            .then(function (response) {
                console.log("response ==> ", response.data.users)
                if (response.status === 200) {
                    setshops(response.data.users.reverse())
                    
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    return (
        <div style={{ backgroundColor: '#dcdcdc', height: '100vh' }}>
            <AdminHeader />
            <div className='container'>
                <div className='flex justify-content-center'>
                    <h2 className='text-center p-5'>All Shops</h2>
                </div>
                <table className="table table-striped" style={{ borderRadius: '10px' }}>
                    <thead style={{ backgroundColor: '#99b4d1' }}>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Shopskeeper Name</th>
                            <th scope="col">shop Name</th>
                            <th scope="col">shop Address</th>
                            <th scope="col">shop Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shops.map((value, index) => {
                            // if (value.role !== 'admin') {

                            return <tr key={value._id}>
                                <th scope="row">{index}</th>
                                <td>{`${value.firstName} ${value.lastName}`}</td>
                                <td>{value.shopName}</td>
                                <td>{value.shopAddress}</td>
                                <td>{value.shopDetail}</td>
                            </tr>
                            // }
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    )
}
