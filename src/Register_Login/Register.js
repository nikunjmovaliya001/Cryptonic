import React from "react";
import { Link } from 'react-router-dom'
import $ from 'jquery';

export default function Register() {
    return (
        <>
            <div className="register_sing_up">

                <div className="sing_up">
                    <div className="sing_up_right">
                        <div className="sing_up_right_logo">
                            <Link to={"/"}><img src="https://i.postimg.cc/s2PbjzmG/logo-1.png" alt="" /></Link>
                        </div>
                        <div className="sing_up_title">
                            <h2>CREATE AN ACCOUNT!</h2>
                        </div>
                        

                    </div>










                    <div className="sing_up_left">
                        <div className="sing_up_left_img">
                            <img src="https://i.postimg.cc/HL6fJnYJ/v679-ning-25-cryptocurrency-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
