import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function AllUsers() {
    const [order, setorder] = useState([])

    useEffect(() => {

        axios({
            method: "get",
            url: 'http://localhost:5000/allusers',
            withCredentials: true
        })
            .then(function (response) {
                console.log("response ==> ", response.data.users)
                if (response.status === 200) {
                    setorder(response.data.users)
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    return (
        <div style={{ backgroundColor: '#dcdcdc', height: '100vh' }}>

            <div className='container'>
                <div className='flex justify-content-center'>
                    <h2 className='text-center p-5'>All Users</h2>
                </div>
                <table className="table table-striped" style={{ borderRadius: '10px' }}>
                    <thead style={{ backgroundColor: '#99b4d1' }}>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">User Email</th>
                            <th scope="col">User Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.map((value, index) => {
                            // if (value.role !== 'admin') {

                            return <tr key={value._id}>
                                <th scope="row">{index}</th>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.phone}</td>
                            </tr>
                            // }
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    )
}
