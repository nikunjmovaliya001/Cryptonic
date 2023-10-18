import React from "react";
import cryptoImg from "../Images/video.png"

export default function Info() {
    return (
        <>
            <div className="main">
                <div className="content">
                    <div className="customer_logos">
                        <div className="slick_list ">
                            <div className="slide ">
                                <img src="https://i.postimg.cc/gjdw5mf2/Binance.png" alt="" />
                                <img src="https://i.postimg.cc/PrSL3GKd/PayKassa.png" alt="" />
                                <img src="https://i.postimg.cc/RhR3x2BQ/Okex.png" alt="" />
                                {/* <img src="https://i.postimg.cc/pd6RPjh3/png-transparent-huobi-hd-logo.png" alt="" /> */}
                                <img src="https://i.postimg.cc/VsB0t0Cr/Kraken.png" alt="" />
                                <img src="https://i.postimg.cc/ncFjGV4d/Nano.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-0 mb-7 " style={{ display: 'flex', position: 'relative' }}>
                        <div className="row align-items-center justify-content-center">
                            <div className="crypto_image">
                                <div className="wrapper_crypto_image">
                                    <img src={cryptoImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <div className="crypto_text">
                                <h2>Platform features</h2>
                                <p>
                                    We offer the latest and most sophisticated online
                                    cryptocurrency mining solutions through our service.
                                </p>
                                <div className="all_plan">
                                    <div className="plans">
                                        <img
                                            src="https://i.postimg.cc/TP13HQQF/features-1.png"
                                            alt=""
                                        />
                                        <h5>Easy Top-Up</h5>
                                        <p>
                                            Top up your account with BTC, USDT, TRX, DOGE, BNB and
                                            LTC.
                                        </p>
                                    </div>
                                    <div className="plans">
                                        <img
                                            src="https://i.postimg.cc/Hx7sTxqt/features-2.png"
                                            alt=""
                                        />
                                        <h5>Youtube Bounty</h5>
                                        <p>
                                            Tell about Cryptonic on your YouTube channel and get
                                            rewarded.
                                        </p>
                                    </div>

                                    <div className="plans">
                                        <img
                                            src="https://i.postimg.cc/C5TM50Yp/features-3.png"
                                            alt=""
                                        />
                                        <h5>3-level Affiliate Program</h5>
                                        <p>
                                            Get 10% + 1 GH/s for first-LVL referral, 2% for
                                            second-LVL, and 1% for the third-LVL.
                                        </p>
                                    </div>
                                    <div className="plans">
                                        <img
                                            src="https://i.postimg.cc/BbTS1zQL/features-3-1.png"
                                            alt=""
                                        />
                                        <h5>Invesment Plans</h5>
                                        <p>We've developed six comprehensive investment plans suitable for all types of investors.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="investment_Plans">
                        <div className="investment_Plans_desc">
                            <h2>Investment Plans</h2>
                            <p>Select a plan of your preference</p>
                            <div className="all_cards">
                                <div className=" cards">
                                    <div className="card">
                                        <div className="card_header">
                                            <img src="https://i.postimg.cc/k5SLs9ch/freee.png" alt="" />
                                            <div className="crad_dis">
                                                <span>Free Diamond | 2% per day</span>
                                            </div>
                                            <hr />
                                            <div className="card_body">
                                                <div className="card_body_list">
                                                    <div className="bonus">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        6$ / 240 GH/s bonus
                                                    </div>
                                                    <div className="day">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        Investment period 180 days
                                                    </div>
                                                    <div className="deposit">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        Without deposit
                                                    </div>
                                                </div>
                                            </div>
                                            <hr id="hr" />
                                            <div className="card_footer">
                                                <div className="card_footer_list">
                                                    <div className="card_footer_prise">
                                                        <div className="card_prise">
                                                            <span>Free</span>
                                                        </div>
                                                    </div>
                                                    <div className="card_footer_btn">
                                                        <a href="#0">
                                                            <button className='register_btn'>Register</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div className=" cards">
                                    <div className="card">
                                        <div className="card_header">
                                            <img src="https://i.postimg.cc/x1qdWCGH/Group39.png" alt="" />
                                            <div className="crad_dis">
                                                <span>Basic Diamond | 2.5% per day</span>
                                            </div>
                                            <hr />
                                            <div className="card_body">
                                                <div className="card_body_list">
                                                    <div className="bonus">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        6$ / 240 GH/s bonus
                                                    </div>
                                                    <div className="day">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        Investment period 180 days
                                                    </div>
                                                    <div className="deposit">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        From 1$ or 40 GH/s
                                                    </div>
                                                </div>
                                            </div>
                                            <hr id="hr" />
                                            <div className="card_footer">
                                                <div className="card_footer_list">
                                                    <div className="card_footer_prise">
                                                        <div className="card_prise">
                                                            <span>$ 1</span>
                                                        </div>
                                                    </div>
                                                    <div className="card_footer_btn">
                                                        <a href="#0">
                                                            <button className='register_btn'>Register</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div> <div className=" cards">
                                    <div className="card">
                                        <div className="card_header">
                                            <img src="https://i.postimg.cc/g250dW47/Icon-1.png" alt="" />
                                            <div className="crad_dis">
                                                <span>Advanced Diamond | 3% per day</span>
                                            </div>
                                            <hr />
                                            <div className="card_body">
                                                <div className="card_body_list">
                                                    <div className="bonus">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        6$ / 240 GH/s bonus
                                                    </div>
                                                    <div className="day">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        Investment period 180 days
                                                    </div>
                                                    <div className="deposit">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        From 25$ or 1 000 GH/s
                                                    </div>
                                                </div>
                                            </div>
                                            <hr id="hr" />
                                            <div className="card_footer">
                                                <div className="card_footer_list">
                                                    <div className="card_footer_prise">
                                                        <div className="card_prise">
                                                            <span>$ 25</span>
                                                        </div>
                                                    </div>
                                                    <div className="card_footer_btn">
                                                        <a href="#0">
                                                            <button className='register_btn'>Register</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div> <div className=" cards">
                                    <div className="card">
                                        <div className="card_header">
                                            <img src="https://i.postimg.cc/Pqw55RR5/Icon-2.png" alt="" />
                                            <div className="crad_dis">
                                                <span>Premium Diamond | 4% per day</span>
                                            </div>
                                            <hr />
                                            <div className="card_body">
                                                <div className="card_body_list">
                                                    <div className="bonus">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        6$ / 240 GH/s bonus
                                                    </div>
                                                    <div className="day">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        Investment period 180 days
                                                    </div>
                                                    <div className="deposit">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        From 250$ or 10 000 GH/s
                                                    </div>
                                                </div>
                                            </div>
                                            <hr id="hr" />
                                            <div className="card_footer">
                                                <div className="card_footer_list">
                                                    <div className="card_footer_prise">
                                                        <div className="card_prise">
                                                            <span>$ 250</span>
                                                        </div>
                                                    </div>
                                                    <div className="card_footer_btn">
                                                        <a href="#0">
                                                            <button className='register_btn'>Register</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div> <div className=" cards">
                                    <div className="card">
                                        <div className="card_header">
                                            <img src="https://i.postimg.cc/xCVTJ3wy/Icon-3.png" alt="" />
                                            <div className="crad_dis">
                                                <span>Luxury Diamond | 4.5% per day</span>
                                            </div>
                                            <hr />
                                            <div className="card_body">
                                                <div className="card_body_list">
                                                    <div className="bonus">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        6$ / 240 GH/s bonus
                                                    </div>
                                                    <div className="day">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        Investment period 180 days
                                                    </div>
                                                    <div className="deposit">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        From 2 500$ or 100 000 GH/s
                                                    </div>
                                                </div>
                                            </div>
                                            <hr id="hr" />
                                            <div className="card_footer">
                                                <div className="card_footer_list">
                                                    <div className="card_footer_prise">
                                                        <div className="card_prise">
                                                            <span>$ 2,500</span>
                                                        </div>
                                                    </div>
                                                    <div className="card_footer_btn">
                                                        <a href="#0">
                                                            <button className='register_btn'>Register</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div> <div className=" cards">
                                    <div className="card">
                                        <div className="card_header">
                                            <img src="https://i.postimg.cc/ydh6FSBq/Icon-4.png" alt="" />
                                            <div className="crad_dis">
                                                <span>VIP Diamond | 5% per day</span>
                                            </div>
                                            <hr />
                                            <div className="card_body">
                                                <div className="card_body_list">
                                                    <div className="bonus">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        6$ / 240 GH/s bonus
                                                    </div>
                                                    <div className="day">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        Investment period 180 days
                                                    </div>
                                                    <div className="deposit">
                                                        <i class="fa-solid fa-check" style={{ color: '#ffffff;' }}></i>
                                                        From 7 500$ or 300 000 GH/s
                                                    </div>
                                                </div>
                                            </div>
                                            <hr id="hr" />
                                            <div className="card_footer">
                                                <div className="card_footer_list">
                                                    <div className="card_footer_prise">
                                                        <div className="card_prise">
                                                            <span>$ 7,500</span>
                                                        </div>
                                                    </div>
                                                    <div className="card_footer_btn">
                                                        <a href="#0">
                                                            <button className='register_btn'>Register</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="how_to_earn_section">
                        <div className="how_to_earn_section_tittle">
                            <h2>How To Earn Cryptocurrency?</h2>
                        </div>
                        <div className="how_to_earn_section_introduction">
                            <p>Video introduction to the features of our platform</p>
                        </div>
                        <div className="boxs row gx-lg-5">
                            <div className="box">
                                <div className="box_img">
                                    <img src="https://i.postimg.cc/PxC8vVGR/Step1.png" alt="" />
                                </div>
                                <div className="box_head">
                                    <h5>Registration</h5>
                                </div>
                                <div className="box_des">
                                    <p>Create an account, verify your email and receive a welcome bonus of $6 (240 GH/s).</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box_img">
                                    <img src="https://i.postimg.cc/76jJ31wY/Step2.png" alt="" />
                                </div>
                                <div className="box_head">
                                    <h5>Purchase Power</h5>
                                </div>
                                <div className="box_des">
                                    <p>Use The Profitability Calculator To Calculate The Investment Plan Suitable For You And Make A Deposit.</p>
                                </div>
                            </div><div className="box">
                                <div className="box_img">
                                    <img src="https://i.postimg.cc/sxSQwBgP/Step3.png" alt="" />
                                </div>
                                <div className="box_head">
                                    <h5>Start Mining</h5>
                                </div>
                                <div className="box_des">
                                    <p>Distribute The Acquired Power Between Four Coins Or Use All The Power In One Coin As You Wish.</p>
                                </div>
                            </div><div className="box">
                                <div className="box_img">
                                    <img src="https://i.postimg.cc/tRVxXcN1/Step4.png" alt="" />
                                </div>
                                <div className="box_head">
                                    <h5>Withdrawal Of Coins</h5>
                                </div>
                                <div className="box_des">
                                    <p>CSend The Earned Coins To Any Cryptocurrency Wallet Or Make A Reinvest To Increase The Power.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        {/* <!-- How To Earn Section --> */}
                        <div className="faq">
                            <div className="faq_title">
                                <h2>FAQ</h2>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How to register an account?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            To become part of our team, you need to create a personal account by filling out a simple registration form with reliable data.
                                        </div>
                                    </div>
                                </div>


                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How to get a bonus?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            To receive a bonus, open the tab "Bonuses" in your account and click on "Get bonus". This kind of bonus is random from 1 Gh/s to 10 Gh/s every 6 hours.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What coins can be mined?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Users can mine Dogecoin, Binance Coin, Tron, Bitcoin, Tether and Litecoin. All these coins can be mined simultaneously by distributing power in your personal account.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            What is the minimum withdrawal amount?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            The minimum amount to withdraw funds from your account is 96.237128 DOGE, 0.028552 BNB, 79.55133 TRX, 0.000231 BTC, 6 USDT and 0.091898 LTC.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- How To calculator Section --> */}
                        <div className="calculator">
                            <div className="calculator_title">
                                <h2>Calculator</h2>
                            </div>
                            <div className="calculator_body">
                                <div className="deposit_coin">
                                    <div className="deposit_coin_title">
                                        <label htmlFor="exampleFormControlInput1">Deposit Coin</label>
                                    </div>
                                    <select className="form_select">
                                        <option value="Binance Coin (BEP20)" >Binance Coin (BEP20)</option>
                                        <option value="Tron (TRC20)" selected>Tron (TRC20)</option>
                                        <option value="Dogicoin (DOGE)">Dogicoin (DOGE)</option>
                                        <option value="Bitcoin (BTC)">Bitcoin (BTC)</option>
                                        <option value="Tether (TRC20)">Tether (TRC20)</option>
                                        <option value="Litecoin (LTC)">Litecoin (LTC)</option>
                                    </select>
                                </div>
                                <div className="number_of_day">
                                    <div className="number_of_days_title">
                                        <label htmlFor="exampleFormControlInput1">Number of days</label>
                                    </div>
                                    <select className="form_select">
                                        <option value="Per 1 Day">Per 1 Day</option>
                                        <option value="Per 10 Day">Per 10 Day</option>
                                        <option value="Per 30 Day" selected>Per 30 Day</option>
                                        <option value="Per 60 Day">Per 60 Day</option>
                                        <option value="Per 180 Day">Per 180 Day</option>
                                    </select>
                                </div>

                                <div className="coins_amount_to_invest">
                                    <div className="coins_amount_to_invest_title">
                                        <label htmlFor="exampleFormControlInput1">Coins amount to invest</label>
                                    </div>
                                    <div className="coins_amount_to_invest_control">
                                        <input type="number" id="quantity" />
                                        <span className='coins_amount_to_invest_control_coin_selected' id="coin_selected">TRX</span>
                                    </div>
                                </div>

                                <div className="usd_amount_to_invest">
                                    <div className="usd_amount_to_invest_title">
                                        <label htmlFor="exampleFormControlInput1">USD amount to invest</label>
                                    </div>
                                    <div className="usd_amount_to_invest_control">
                                        <input type="number" id="quantity" />
                                        <span className='coins_amount_to_invest_control_coin_selected'>USD</span>
                                    </div>
                                </div>

                                <div className="powers">
                                    <div className="power_card_body">
                                        <div className="power_card_body_title">
                                            <strong>
                                                <span id="resuli_vhs">1 002</span>
                                                GH/s
                                            </strong>
                                        </div>
                                        <div className="power_card_body_text">
                                            <span>Power</span>
                                        </div>
                                    </div>

                                    <div className="power_card_body">
                                        <div className="power_card_body_title">
                                            <strong>
                                                <span id="result_plan">3</span>
                                                % per day
                                            </strong>
                                        </div>
                                        <div className="power_card_body_text">
                                            <span>Plan</span>
                                        </div>
                                    </div>

                                    <div className="power_card_body">
                                        <div className="power_card_body_title">
                                            <strong>
                                                $
                                                <span id="result_profit">22,54</span>
                                            </strong>
                                        </div>
                                        <div className="power_card_body_text">
                                            <span>Profit</span>
                                        </div>
                                    </div>
                                </div>


                                <button className="open_deposit">
                                    <span>Open Deposit </span>
                                </button>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
