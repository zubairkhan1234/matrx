import React from 'react'
import fwRange from '../assets/fwRange.png'
import rdRange from '../assets/rdRange.png'
import profilePic from '../assets/profile.png'
import RangePic from '../assets/range.png'
export default function Profile() {
    return (
        <div className='row profile-container'>
            <div className="col-lg-2 col-md-4 com-sm-12 bg-primary">
                <div className='mt-5'>

                    <div style={{ textAlign: 'center' }}>
                        <img src={RangePic} alt="side-Range" />
                        <p>
                            <span>
                                Range
                            </span>
                        </p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img src={profilePic} alt="side-profile" />
                        <p>
                            <span>
                                Profile
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-10 col-md-8 com-sm-12 p-4">
                <div className=" col-12 mb-5 mt-5">

                    <div className='row'>
                        <div style={{ width: '10%' }}>
                            <img src={fwRange} alt="fw-Range" />
                        </div>
                        <div style={{ width: '90%' }}>
                            <p className='profile-range-content' style={{ color: 'red', marginLeft: '20%' }}><span>Fire</span></p>
                            <p className='profile-range-content'><span>Range:</span> Kein FW Range</p>
                            <p className='profile-range-content'><span>Nächster Range:</span> anwärter </p>
                            <p className='profile-range-content'><span>benötigte Lehrgänge:</span> Nach erfolgreicher Einweisung</p>
                        </div>
                    </div>

                </div>
                <div className="row col-12 ">
                    <div >
                        <p className='profile-range-content' style={{ color: 'red', textAlign: 'center' }}> <span>Rank OverView Fire and Rescue </span></p>
                    </div>
                    <div className='row'>

                        <div style={{ width: '10%' }}>
                            <img src={rdRange} alt="rd-Range" />
                        </div>
                        <div style={{ width: '90%' }}>
                            <p className='profile-range-content' style={{ color: '#2c89fd', }}> <span>Bereich Rettungsdienst</span></p>
                            <p className='profile-range-content' style={{ color: 'red', marginLeft: '20%' }}><span>Rescue</span></p>
                            <p className='profile-range-content'><span>Range:</span> Kein FW Range</p>
                            <p className='profile-range-content'><span>Nächster Range:</span> anwärter </p>
                            <p className='profile-range-content'><span>benötigte Lehrgänge:</span> Nach erfolgreicher Einweisung</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
