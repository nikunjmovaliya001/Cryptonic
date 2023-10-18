import React from "react";

export default function Aboutus() {
    return (
        <>
            <div className="about_us_head">
                <div className="about_us">
                    <h2
                        className="about_us_head_tltle"
                        style={{ fontWeight: "bold", letterSpacing: "3.3px" }}
                    >
                        About Us
                    </h2>
                    <p className="about_us_head_des">Some information about Us.</p>
                </div>
            </div>
            <div className="about_us_body">
                <p style={{ width: '1080', height: '102', color: '#ffffff', font: '18px', margin: '0 0 16px', fontFamily: 'Gill Sans', lineHeightStep: '2px', letterSpacing: '1.3px' }}>
                    Cryptonic LTD, established on August 18, 2023, by a group of six
                    passionate individuals, is a cutting-edge technology firm specializing
                    in cryptocurrency mining. Our focus is on offering users swift access
                    to state-of-the-art blockchain technologies and algorithms,
                    facilitating efficient cryptocurrency mining. With an aspiration to
                    achieve a daily profit margin of 5%, our expansion journey began from
                    day one.
                </p>
                <p style={{ width: '1080', height: '102', color: '#ffffff', font: '18px', margin: '0 0 16px', fontFamily: 'Gill Sans', lineHeightStep: '2px', letterSpacing: '1.3px' }}>
                    The core vision of Cryptonic LTD is to furnish individual consumers
                    with unparalleled mining equipment and round-the-clock service,
                    setting a benchmark for excellence in the mining domain. Collaborating
                    with our adept team, strategic partners, and valued customers, we're
                    instrumental in reshaping the mining ecosystem and refining data
                    center infrastructure.
                </p>
                <p style={{ width: '1080', height: '102', color: '#ffffff', font: '18px', margin: '0 0 16px', fontFamily: 'Gill Sans', lineHeightStep: '2px', letterSpacing: '1.3px' }}>
                    Should you seek further inquiries, feel free to reach out through our
                    online chat, email, or Telegram channel. For comprehensive details,
                    please refer to our contact information section.
                </p>
            </div>

            <div className="aboutus_footer">
                <div className="contact">
                    <div className="contact_box">
                        <div className="contact_right_box">
                            <h6 className="contact_img">
                                <a href="">
                                    <img src="https://i.postimg.cc/SKh8zSLS/logo-1.png" alt="" />
                                </a>
                            </h6>

                            <h6 className="contact_secury_img">
                                <a href="#0">
                                    <img
                                        src="https://i.postimg.cc/PJw1021y/positivessl-trust-seal-md-167x42.png"
                                        alt=""
                                    />
                                </a>
                            </h6>
                            <p className="contact_des">
                                A progressive partner in the industry of cloud mining and market
                                speculation for the sake of your financial growth .
                            </p>
                        </div>
                        <div className="contact_left_box">
                            <h6 className="Contact_head">Contact</h6>
                            <h6 className="Contact_add">
                                <i class="fa-solid fa-house" style={{ color: "#a3a3a3; ", margin: "0 20px 0 0" }}></i>
                                <p > A4, London WC2N 5DU, UK</p>
                            </h6>

                            <h6 className="Contact_emails">
                                <i class="fa-solid fa-envelope" style={{ color: "#a3a3a3;", margin: "0 20px 0 0" }}></i>
                                <p > info@cryptonic.cc</p>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="wrap_foot">
                    <p className="footer_des">© 2023 Copyright:
                        <a href="">Cryptonic LTD</a>
                    </p>
                </div>
            </div>
        </>
    );
}
