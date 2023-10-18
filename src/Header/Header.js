import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="navbar">
                    <div className="nav">
                        <div className="logo">
                            <Link to={"/"}><img src="https://i.postimg.cc/s2PbjzmG/logo-1.png" alt="" /></Link>
                        </div>
                        <div className="list">
                            <ul>
                                <li><a href="#0"><i class="fa-solid fa-house" style={{ color: '#ffffff;', padding: '13px' }} ></i>Home</a></li>
                                <li><a href="#0"><i class="fa-regular fa-circle-question" style={{ color: '#ffffff;', padding: '13px' }}></i>FAQ</a></li>
                                <li><Link to="/aboutus"><i class="fa-solid fa-info" style={{ color: '#ffffff;', padding: '13px' }}></i>About Us</Link></li>
                                <li><a href="#0"><i class="fa-solid fa-headset" style={{ color: '#ffffff;', padding: '13px' }}></i>Contacts</a></li>
                                <li><a href="#0">
                                    <button className='login_btn'>Login</button>
                                </a></li>
                                <li><a href="#0">
                                    <button className='register'>Register</button>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
