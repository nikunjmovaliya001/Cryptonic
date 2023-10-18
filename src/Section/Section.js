import React from "react";

export default function Section() {
    return (
        <center>
            <div className="section">
                <div className="container col-xl-12 col-xxl-10 px-4 py-5">
                    <div className="cryponic_text col-lg-7 text-center text-lg-start">
                        <span className="title_hero mb-3 text-hero">
                            Earn Up to
                            <span className="blue">
                                5% daily
                            </span>
                            <br />
                            And Get
                            <span className="blue">
                                Paid
                            </span>
                            Every Day
                        </span>
                        <div className="description_hero mt-3">
                            <p>
                                Experience the cutting-edge Cryptonic LTD cloud mining solution
                                featuring state-of-the-art hardware and advanced cryptocurrency
                                mining techniques. This platform shortens the earning period for
                                users, allowing them to achieve a daily profit of 3% with an
                                investment of just $25 in BTC, TRX, DOGE, USDT, LTC, and BNB.
                            </p>
                        </div>
                        <div className="btn">
                            <button className='register'>Register</button>
                            <button className='login_btn'>Login</button>
                        </div>
                        <div className="noties">
                            <p className="note">
                                🎁 Create account now and get  
                                <span>$6.00</span> for free!
                            </p>
                        </div>
                    </div>
                    <div className="cryponic_img col-md-10 mx-auto mt-0 col-lg-5">
                        <img
                            src="https://i.postimg.cc/LXz2frng/illustration-1.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </center>
    );
}
