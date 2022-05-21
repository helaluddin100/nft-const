import { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import { Navigation, A11y } from "swiper";
import CountUp from "react-countup";

import { Swiper, SwiperSlide } from "swiper/react";
function Home() {
  return (
    <>
      <div id="home1">
        <section className="hero">
          <div className="container">
            <div className="hero-wrapper">
              <div
                className="hero-content-wrapper"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="hero-content">
                  <div className="title-top-img">
                    <img src="assets/img/inner/cr-1.png" alt="" />
                  </div>
                  <div className="widht-60">
                    <h1 className="title">
                      Full Stack Web Tech Services For NFT & Fintech Companies
                    </h1>
                  </div>
                  <div className="widht-50">
                    <p className="description">
                      We provide Non-Fungible Development Services that can help
                      you create NFTs for artworks, digital collectibles,
                      gaming, sports, music, video, content Subscription, etc.
                    </p>
                  </div>
                  <div className="input-box widht-40 ">
                    <div className="input-area">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type your email here"
                      />
                      <div className="icon">
                        <i className="icofont-envelope"></i>
                      </div>
                      <div className="btn">
                        <button className="singup-btn">Sign Up</button>
                      </div>
                    </div>
                  </div>
                  <div className="service">
                    <ul>
                      <li>
                        <i className="icofont-check"></i> Task Management
                      </li>
                      <li>
                        <i className="icofont-check"></i> 24/7 Great Service
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="hero-img"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img src="assets/img/hero/webdevlopment.gif" alt="" />
              </div>
            </div>
          </div>

          <div className="side-img-2">
            <img src="assets/img/inner/cr-3.png" alt="" />
          </div>

          <div className="input-arrow">
            <img src="assets/img/inner/input-arrow.png" alt="" />
          </div>
        </section>
      </div>
      {/* =============service card section ================== */}
      <section>
        <div className="service-card">
          <div className="container">
            <div className="row-4">
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # FOCUSED ON DELIVERABLES
                    </a>
                    <img src="assets/img/inner/timer.svg" alt="" />
                  </div>
                  <p>
                    Our developers know you need results, which you&apos;ll see
                    in the first two sprints of the Agile process.
                  </p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # COMMUNICATIVE
                    </a>
                    <img src="assets/img/inner/doller.svg" alt="" />
                  </div>
                  <p>
                    Clients say the team feels like their employees, because our
                    English-speaking developers respect their processes.
                  </p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # DESIGN STRATEGY
                    </a>
                    <img src="assets/img/inner/notice.svg" alt="" />
                  </div>
                  <p>
                    We help you formulate a strategy specifically around the
                    design and vision of your digital artworks and services.
                  </p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # WELL MANAGED
                    </a>
                    <img src="assets/img/inner/vip.svg" alt="" />
                  </div>
                  <p>
                    Our Certified Project Managers have been leading development
                    for years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============service card section ================== */}

      <div className="white-bg cpt-6">
        {/* ===================demo request section ================== */}
        <section className="demo-request cpt-6">
          <div className="container">
            <div className="section-title">
              <p className="sm-title">Interested</p>
              <h2 className="sec-title">Get In Touch Now</h2>
              <p className="sec-des">
                We process all the assets on a blockchain with unique
                identification codes and metadata that distinguish them from
                each other.
              </p>
            </div>

            <div className="row cpt-7">
              <div
                className="request-form"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <form action="">
                  <div className="form-group-2">
                    <div className="input-group">
                      <label htmlFor="name">Your Name</label>
                      <div className="input-box">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </div>
                    <div className="input-group">
                      <label htmlFor="phone-number">Phone Number:</label>
                      <div className="input-box">
                        <input
                          type="text"
                          name="phone-number"
                          placeholder="+1234567890"
                          className="form-control with-select"
                        />
                        <select className="form-control">
                          <option>+1</option>
                          <option>+2</option>
                          <option>+3</option>
                          <option>+4</option>
                          <option>+5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group-2">
                    <div className="input-group">
                      <label htmlFor="name">Your E-mail :</label>
                      <div className="input-box">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="YourEmail@domain.com"
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label htmlFor="phone-number">Whatsapp :</label>
                      <div className="input-box">
                        <select className="form-control me-3">
                          <option>+1</option>
                          <option>+2</option>
                          <option>+3</option>
                          <option>+4</option>
                          <option>+5</option>
                        </select>
                        <input
                          type="text"
                          name="phone-number"
                          placeholder="Social Acciount"
                          className="form-control with-select"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <label htmlFor="name">Consult :</label>
                      <div className="input-box">
                        <textarea
                          name=""
                          className="form-control"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button className="custom-btn" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* ===================demo request section end ================== */}

        {/* ===================Mentioned section ================== */}
        <section>
          <div className="mentioned-area cpt-6">
            <div className="section-title">
              <p className="sm-title">best services</p>
              <h2 className="sec-title">We’ve Been Mentioned In....</h2>
            </div>
            <div className="mentioned-section ">
              <div className="images-slider-1">
                <div className="images-slider-wrapper">
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.png" alt="" />
                    <img src="assets/img/inner/logo/2.png" alt="" />
                    <img src="assets/img/inner/logo/3.png" alt="" />
                    <img src="assets/img/inner/logo/4.png" alt="" />
                    <img src="assets/img/inner/logo/5.png" alt="" />
                    <img src="assets/img/inner/logo/6.png" alt="" />
                    <img src="assets/img/inner/logo/7.png" alt="" />
                  </div>
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.png" alt="" />
                    <img src="assets/img/inner/logo/2.png" alt="" />
                    <img src="assets/img/inner/logo/3.png" alt="" />
                    <img src="assets/img/inner/logo/4.png" alt="" />
                    <img src="assets/img/inner/logo/5.png" alt="" />
                    <img src="assets/img/inner/logo/6.png" alt="" />
                    <img src="assets/img/inner/logo/7.png" alt="" />
                  </div>
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.png" alt="" />
                    <img src="assets/img/inner/logo/2.png" alt="" />
                    <img src="assets/img/inner/logo/3.png" alt="" />
                    <img src="assets/img/inner/logo/4.png" alt="" />
                    <img src="assets/img/inner/logo/5.png" alt="" />
                    <img src="assets/img/inner/logo/6.png" alt="" />
                    <img src="assets/img/inner/logo/7.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================Mentioned section end ================== */}
        {/* ===================ChainUP section  ================== */}
        <section>
          <div className="chainup-area cpy-6">
            <div className="container">
              <div className="chainup-grid">
                <div
                  className="chainup-img"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src="assets/img/inner/chainup.png" alt="" />
                </div>
                <div
                  className="chainup-content"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="chainup-title">
                    <p>CHAINUP</p>
                    <h2>ChainUP Data Center Worldwide</h2>
                  </div>
                  <div className="chainup-inner-grid">
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/client.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={500} duration={5} /> +
                        </h3>
                        <p>Served Clients</p>
                      </div>
                    </div>

                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/financial.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={100} duration={5} /> +
                        </h3>
                        <p>Financial Detervative Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/crypto.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={100} duration={5} /> +
                        </h3>
                        <p>Wallet Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/nft.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={300} duration={5} /> +
                        </h3>
                        <p>Crypto Exchange Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/region.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={250} duration={5} /> +
                        </h3>
                        <p>NFT Service Client</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/wallet.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={20} duration={5} /> +
                        </h3>
                        <p>Countries & Region </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================ChainUP section end ================== */}
        {/* ===================MARKET REPORT section  ================== */}
        <section>
          <div className="market-report-area cpy-6">
            <div className="container">
              <div className="section-wrap">
                <div className="chainup-title">
                  <p>MARKET REPORT</p>
                  <h2>
                    discover the latest market <br /> trends
                  </h2>
                </div>
              </div>
              <div className="market-report-grid">
                <div
                  className="market-card"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="card-main-content">
                    <div className="market-card-img">
                      <img src="assets/img/icon/card.png" alt="" />
                    </div>
                    <div className="market-card-content">
                      <h3>
                        Yearly NFT Market Report <br /> 2022
                      </h3>
                    </div>
                  </div>
                  <div className="get-btn">
                    <a href="">get the report</a>
                  </div>
                </div>
                <div
                  className="market-card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card-main-content">
                    <div className="market-card-img">
                      <img src="assets/img/icon/card.png" alt="" />
                    </div>
                    <div className="market-card-content">
                      <h3>
                        Quarterly NFT Market Report <br /> 2022
                      </h3>
                    </div>
                  </div>
                  <div className="get-btn">
                    <a href="">get the report</a>
                  </div>
                </div>
              </div>
            </div>
            <img src="assets/img/inner/market-1.png" alt="" className="bbl1" />
            <img src="assets/img/inner/market-2.png" alt="" className="bbl2" />
            <img src="assets/img/inner/market-3.png" alt="" className="bbl3" />
            <img src="assets/img/inner/market-4.png" alt="" className="bbl4" />
            <img src="assets/img/inner/market-5.png" alt="" className="bbl5" />
          </div>
        </section>
        {/* ===================MARKET REPORT section end  ================== */}
        {/* ===================Newsletter section  ================== */}
        <div
          className="newsletters"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="newsletter-content">
            <div className="flex-col">
              <p className="urbanist-dark-42">Newsletters</p>
              <p className="raleway-white-18">
                Get Updates About Our Latest Service Trends
              </p>
            </div>

            <div className="subscribe-inputs">
              <input
                type="text"
                placeholder="Your Name"
                className="subscriber-name"
              />

              <div className="input-withbtn">
                <input type="text" placeholder="Enter Email Address" />
                <button className="subscirbe-btn">
                  <img src="assets/imgs/send.svg" alt="Send" /> Subscribe
                </button>
              </div>
            </div>
          </div>

          <img src="assets/imgs/banner-img.png" alt="" className="banner-img" />
        </div>
        {/* ===================Newsletter section end ================== */}

        {/* =====================top project===================== */}
        <div className="projects cpt-6">
          <div className="section-title">
            <p className="sm-title">best service</p>
            <h2 className="sec-title">Top 5 Projects</h2>
            <p className="sec-des">
              Get more software development information about exchange software
              wallet software derivate products and ETC
            </p>
          </div>

          <div className="project-content">
            <button className="btn-purple-2">View Ranking</button>

            <div
              className="table-responsive"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Volume 7 days</th>
                    <th>Sales 7 days</th>
                    <th>Volume All Time</th>
                    <th>Sales-All Times</th>
                  </tr>
                </thead>

                <tbody>
                  {table.map((table, index) => (
                    <tr key={index}>
                      <td>{table.projectName}</td>
                      <td>{table.volume}</td>
                      <td>{table.sales}</td>
                      <td>{table.allVolume}</td>
                      <td>{table.totalSale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ===============top project end=============== */}
        {/* ==============pricing==================== */}
        <div className="container">
          <div className="plans cpy-6">
            <div className="section-title">
              <p className="sm-title">pricing</p>
              <h2 className="sec-title">Our Pricing Plan</h2>
              <p className="sec-des">
                Pay securely online and manage your projects by sitting in your
                desk
              </p>
            </div>

            <div
              className="plans-options"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                loop="true"
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="plan">
                    <div className="price">
                      <p className="urbanist-dark-48">6$</p>
                      <p className="urbanist-grey-15">/ month</p>
                    </div>

                    <div className="plan-category">
                      <p className="urbanist-black-32">Standard 🛵</p>
                    </div>

                    <p className="raleway-grey-16">
                      The national average cost of buying coin easy.
                    </p>

                    <ul className="plan-list">
                      <li>
                        <img src="assets/imgs/checked-s.svg" alt="Checked" />
                        <p className="raleway-grey-16">Group Consulting</p>
                      </li>
                      <li>
                        <img src="assets/imgs/checked-s.svg" alt="Checked" />
                        <p className="raleway-grey-16">Free Bitcoin</p>
                      </li>

                      <li>
                        <img src="assets/imgs/checked-s.svg" alt="Checked" />
                        <p className="raleway-grey-16">New Relations</p>
                      </li>

                      <li>
                        <img src="assets/imgs/checked-none.svg" alt="Checked" />
                        <p className="raleway-grey-16 lined">House Meeting</p>
                      </li>

                      <li>
                        <img src="assets/imgs/checked-none.svg" alt="Checked" />
                        <p className="raleway-grey-16 lined">Anti-Bankrupt</p>
                      </li>
                    </ul>
                    <button className="btn-plan">Book now</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="plan">
                    <div className="price">
                      <p className="urbanist-dark-48">12$</p>
                      <p className="urbanist-grey-15">/ month</p>
                    </div>

                    <div className="plan-category">
                      <p className="urbanist-black-32">Extended 🚗</p>
                    </div>

                    <p className="raleway-grey-16">
                      The national average cost of buying coin easy.
                    </p>

                    <ul className="plan-list">
                      <li>
                        <img src="assets/imgs/checked-s.svg" alt="Checked" />
                        <p className="raleway-grey-16">Group Consulting</p>
                      </li>
                      <li>
                        <img src="assets/imgs/checked-s.svg" alt="Checked" />
                        <p className="raleway-grey-16">Free Bitcoin</p>
                      </li>

                      <li>
                        <img src="assets/imgs/checked-s.svg" alt="Checked" />
                        <p className="raleway-grey-16">New Relations</p>
                      </li>

                      <li>
                        <img src="assets/imgs/checked-s.svg" alt="Checked" />
                        <p className="raleway-grey-16">House Meeting</p>
                      </li>

                      <li>
                        <img src="assets/imgs/checked-s.svg" alt="Checked" />
                        <p className="raleway-grey-16">Anti-Bankrupt</p>
                      </li>
                    </ul>
                    <button className="btn-plan">Book now</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="plan">
                    <div className="price">
                      <p className="urbanist-dark-48">24$</p>
                      <p className="urbanist-grey-15">/ month</p>
                    </div>

                    <div className="plan-category">
                      <p className="urbanist-black-32">Premium 🚛</p>
                    </div>

                    <p className="raleway-grey-16">
                      The national average cost of buying coin easy.
                    </p>

                    <ul className="plan-list">
                      <li>
                        <img src="assets/imgs/checked-s.svg" alt="Checked" />
                        <p className="raleway-grey-16">Group Consulting</p>
                      </li>
                      <li>
                        <img src="assets/imgs/checked-s.svg" alt="Checked" />
                        <p className="raleway-grey-16">Free Bitcoin</p>
                      </li>

                      <li>
                        <img src="assets/imgs/checked-s.svg" alt="Checked" />
                        <p className="raleway-grey-16">New Relations</p>
                      </li>

                      <li>
                        <img src="assets/imgs/checked-s.svg" alt="Checked" />
                        <p className="raleway-grey-16">House Meeting</p>
                      </li>

                      <li>
                        <img src="assets/imgs/checked-s.svg" alt="Checked" />
                        <p className="raleway-grey-16 ">Anti-Bankrupt</p>
                      </li>
                    </ul>
                    <button className="btn-plan">Book now</button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        {/* ===================================pricing end ===================== */}
        {/* ===================Mentioned section ================== */}
        <section>
          <div className="mentioned-area">
            <div className="section-title">
              <p className="sm-title">best service</p>
              <h2 className="sec-title">We’ve Worked With</h2>
            </div>
            <div className="mentioned-section ">
              <div className="images-slider-1">
                <div className="images-slider-wrapper">
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.png" alt="" />
                    <img src="assets/img/inner/logo/2.png" alt="" />
                    <img src="assets/img/inner/logo/3.png" alt="" />
                    <img src="assets/img/inner/logo/4.png" alt="" />
                    <img src="assets/img/inner/logo/5.png" alt="" />
                    <img src="assets/img/inner/logo/6.png" alt="" />
                    <img src="assets/img/inner/logo/7.png" alt="" />
                  </div>
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.png" alt="" />
                    <img src="assets/img/inner/logo/2.png" alt="" />
                    <img src="assets/img/inner/logo/3.png" alt="" />
                    <img src="assets/img/inner/logo/4.png" alt="" />
                    <img src="assets/img/inner/logo/5.png" alt="" />
                    <img src="assets/img/inner/logo/6.png" alt="" />
                    <img src="assets/img/inner/logo/7.png" alt="" />
                  </div>
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.png" alt="" />
                    <img src="assets/img/inner/logo/2.png" alt="" />
                    <img src="assets/img/inner/logo/3.png" alt="" />
                    <img src="assets/img/inner/logo/4.png" alt="" />
                    <img src="assets/img/inner/logo/5.png" alt="" />
                    <img src="assets/img/inner/logo/6.png" alt="" />
                    <img src="assets/img/inner/logo/7.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================Mentioned section end ================== */}
        {/* ===================Million Of people ================== */}
        <section>
          <div className="million-area cpy-6">
            <div className="section-title">
              <p className="sm-title">pricing</p>
              <h2 className="sec-title">Million Of people Joining Us Daily</h2>
              <p className="sec-des">
                Pay securely online and manage the booking via <br /> desktop or
                via the mobile app.
              </p>
            </div>
            <div
              className="million-section "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="assets/img/inner/map.png" alt="" />
            </div>
          </div>
        </section>
        {/* ===================Million Of people end ================== */}
        {/* =====================happy clients======================= */}
        <section>
          <div className="happy-area cpy-6">
            <div className="container">
              <div className="section-wrap">
                <div className="chainup-title">
                  <p>Happy clients</p>
                  <h2>What Our Client Say’s</h2>
                </div>
                <p>
                  This is what clients have been saying after using the <br />
                  great service we do for clients.
                </p>
              </div>

              <div
                className="client-review"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                  }}
                  loop="true"
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div className="client-review-slider">
                      <div className="review-img">
                        <img src="assets/img/inner/review.png" alt="" />
                      </div>
                      <div className="review-content">
                        <h2 className="content-title">
                          Save time managing social media for your business
                        </h2>
                        <p>
                          “This is by far the simplest, most frictionless,
                          easiest-to-get-going platform that I’ve ever worked
                          in. Just being able to upload a link and bounce”
                        </p>
                        <div className="rating">
                          <ul className="rating-ul">
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                          </ul>
                        </div>

                        <div className="client-info">
                          <div className="client-img">
                            <img src="assets/img/inner/client.png" alt="" />
                          </div>
                          <div className="client-name">
                            <h3>Branun Yes </h3>
                            <p>CEO of Arcane</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="client-review-slider">
                      <div className="review-img">
                        <img src="assets/img/inner/review.png" alt="" />
                      </div>
                      <div className="review-content">
                        <h2 className="content-title">
                          Save time managing social media for your business
                        </h2>
                        <p>
                          “This is by far the simplest, most frictionless,
                          easiest-to-get-going platform that I’ve ever worked
                          in. Just being able to upload a link and bounce”
                        </p>
                        <div className="rating">
                          <ul className="rating-ul">
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                          </ul>
                        </div>

                        <div className="client-info">
                          <div className="client-img">
                            <img src="assets/img/inner/client.png" alt="" />
                          </div>
                          <div className="client-name">
                            <h3>Branun Yes </h3>
                            <p>CEO of Arcane</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="slider-nav">
                  <div className="prev">
                    <i className="icofont-arrow-left"></i>
                  </div>
                  <div className="next">
                    <i className="icofont-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =====================happy clients end======================= */}
        {/* ==========================faq================== */}
        <div className="faqs-section cpb-6">
          <div className="container">
            <div className="section-title">
              <p className="sm-title">Question & Answer</p>
              <h2 className="sec-title">Frequently Asked Questions (FAQ)</h2>
              <p className="sec-des">
                BROWSE OUR FAQ’S BELOW, IF YOU CAN NOT FIND THE ANSWER TO YOU’RE
                LOOKING FOR PLEASE CONTACT US.
              </p>
            </div>

            <div className="content">
              <div
                className="faq-div"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <input
                  type="checkbox"
                  id="question1"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question1" className="question">
                    How can I look up a transaction on the platform?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Block Explorers provide a visually appealing and intuitive
                    way to navigate a cryptocurrency &apos; s. Our Block
                    Explorer launched in August 2011. It began as a way for
                    anyone to study bitcoin transactions, along with a variety
                    of helpful charts and statistics about activity on the
                    network.
                  </p>
                </div>
              </div>
              <div
                className="faq-div"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <input
                  type="checkbox"
                  id="question5"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question5" className="question">
                    How do I know a transaction has been successfully received
                    or sent?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Our hardcover books are library bound with exposed
                    reinforced endsheets, which means extra lasting power, use
                    after use. They are side sewn or section sewn, and all
                    covers are laminated with glossy film. The books are
                    vibrant, durable, and unconditionally guaranteed.
                  </p>
                </div>
              </div>
              <div
                className="faq-div"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <input
                  type="checkbox"
                  id="question2"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question2" className="question">
                    What is the difference between Stellar and lumens?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Our hardcover books are library bound with exposed
                    reinforced endsheets, which means extra lasting power, use
                    after use. They are side sewn or section sewn, and all
                    covers are laminated with glossy film. The books are
                    vibrant, durable, and unconditionally guaranteed.
                  </p>
                </div>
              </div>
              <div
                className="faq-div"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <input
                  type="checkbox"
                  id="question3"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question3" className="question">
                    Can I still receive PAX into my Wallet?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Our hardcover books are library bound with exposed
                    reinforced endsheets, which means extra lasting power, use
                    after use. They are side sewn or section sewn, and all
                    covers are laminated with glossy film. The books are
                    vibrant, durable, and unconditionally guaranteed.
                  </p>
                </div>
              </div>
              <div
                className="faq-div"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <input
                  type="checkbox"
                  id="question4"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question4" className="question">
                    Why do Stellar addresses have a minimum balance requirement?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Our hardcover books are library bound with exposed
                    reinforced endsheets, which means extra lasting power, use
                    after use. They are side sewn or section sewn, and all
                    covers are laminated with glossy film. The books are
                    vibrant, durable, and unconditionally guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ==========================faq end================== */}
      </div>
    </>
  );
}

Home.title = "Full Stack Web Development Services";
Home.image = "assets/img/hero/webdevlopment.gif";
Home.description =
  "We provide Non-Fungible Development Services that can help you create NFTs for artworks, digital collectibles, gaming, sports, music, video, content Subscription, etc";
Home.layout = AppLayout;

const table = [
  {
    projectName: "The meta maid",
    volume: "$ 534,226,452 ",
    sales: "435",
    allVolume: "$ 534,2426,452.19",
    totalSale: "95557",
  },
  {
    projectName: "1 Bored Ape Yacht Club",
    volume: "$ 534,226,452 ",
    sales: "435",
    allVolume: "$ 534,2426,452.19",
    totalSale: "95557",
  },
  {
    projectName: "1 Bored Ape Yacht Club",
    volume: "$ 534,226,452 ",
    sales: "435",
    allVolume: "$ 534,2426,452.19",
    totalSale: "95557",
  },
  {
    projectName: "1 Bored Ape Yacht Club",
    volume: "$ 534,226,452 ",
    sales: "435",
    allVolume: "$ 534,2426,452.19",
    totalSale: "95557",
  },
  {
    projectName: "1 Bored Ape Yacht Club",
    volume: "$ 534,226,452 ",
    sales: "435",
    allVolume: "$ 534,2426,452.19",
    totalSale: "95557",
  },
  {
    projectName: "1 Bored Ape Yacht Club",
    volume: "$ 534,226,452 ",
    sales: "435",
    allVolume: "$ 534,2426,452.19",
    totalSale: "95557",
  },
  {
    projectName: "1 Bored Ape Yacht Club",
    volume: "$ 534,226,452 ",
    sales: "435",
    allVolume: "$ 534,2426,452.19",
    totalSale: "95557",
  },
];
export default Home;
