import { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import { Navigation, A11y } from "swiper";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
function Business() {
  const [serviceActive, setServiceActive] = useState(1);

  return (
    <>
      <div id="home2" className="cpy-5">
        <div className="container">
          <section className="hero">
            <div className="hero-content">
              <h1>
                HiCoin Recruiting <br /> Global <span> Business</span>
                <br /> Partners
              </h1>

              <p className="raleway-black-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="hero-btns">
                <button className="btn-hero-1">Get Started</button>
                <button className="btn-hero-2">Learn More</button>
              </div>

              <div className="hero-checks">
                <div>
                  <img src="assets/imgs/check.svg" alt="Checked" />
                  <p className="raleway-grey-14">Free Register</p>
                </div>
                <div>
                  <img src="assets/imgs/check.svg" alt="Checked" />
                  <p className="raleway-grey-14">Great Service</p>
                </div>
              </div>
            </div>

            <div className="hero-img">
              <img src="assets/img/hero/website-analysis.png" alt="Hero IMG" />
              <img src="assets/img/hero/9.png" alt="" className="sm-an1" />
              <img src="assets/img/hero/10.png" alt="" className="sm-an2" />
            </div>
          </section>
        </div>
      </div>
      {/* =============service card section ================== */}
      <section>
        <div className="service-card">
          <div className="container">
            <div className="row-4">
              <div className="col-md-3">
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # Quick Start 1
                    </a>
                    <img src="assets/img/inner/timer.svg" alt="" />
                  </div>
                  <p>Start An exchange company In </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # Recomended Cash Back
                    </a>
                    <img src="assets/img/inner/doller.svg" alt="" />
                  </div>
                  <p>Start An exchange company In </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # Promotion
                    </a>
                    <img src="assets/img/inner/notice.svg" alt="" />
                  </div>
                  <p>Start An exchange company In </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # VIP Customization
                    </a>
                    <img src="assets/img/inner/vip.svg" alt="" />
                  </div>
                  <p>Start An exchange company In </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============service card section ================== */}

      <div className="white-bg">
        {/* ================about us section ================== */}
        <section className="about-us cpy-6">
          <div className="container">
            <div className="row-col-2">
              <div className="col-md-6">
                <div className="about-us-img">
                  <img src="assets/img/inner/about-us.png" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-us-content">
                  <div className="about-content-inner">
                    <h2>description</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      &apos; s standard dummy text ever since the 1500s, when an
                      unknown printer tookLorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum has
                      been the industry &apos; s standard dummy text ever since
                      the 1500s, when an unknown printer took Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry &apos; s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took unknown printer tookLorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry &apos; s standard dummy text
                      ever since the 1500s, when an unknown printer took Lorem
                      Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry &apos; s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img src="assets/img/inner/cr-8.png" alt="" className="cr8-img" />
          <img src="assets/img/inner/cr-6.png" alt="" className="cr6-img" />
        </section>
        {/* ================about us section end ================== */}
        {/* ===================demo request section ================== */}
        <section className="demo-request">
          <div className="container">
            <div className="section-title">
              <p className="sm-title">best service</p>
              <h2 className="sec-title">Request A demo</h2>
              <p className="sec-des">
                Get more software development information about exchange
                software wallet software derivate products and ETC
              </p>
            </div>

            <div className="row cpt-7">
              <div className="request-form">
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
                      Get A Demo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* ===================demo request section end ================== */}
        {/* ===================service section ================== */}
        <section>
          <div className="service cpy-6">
            <div className="container">
              <div className="section-title">
                <p className="sm-title">OUR NON FUNGIBLE</p>
                <h2 className="sec-title">Token Development Services</h2>
                <p className="sec-des">
                  Being a top NFT token development company, our non-fungible
                  token development services facilitate the digital assets to be
                  tokenized for collection. Majorly, we work on Ethereum NFTs,
                  which are too popular in the market. SemiDot helps you to
                  launch your NFT for all your business needs.
                </p>
              </div>

              <div className="service-grid cpt-7">
                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/contract.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Contract Clause Analysis</h3>
                    <p>
                      Identification and automated tagging and extraction of
                      specific clauses, wordings, and paragraphs (e.g. change of
                      control, forensic topics).
                    </p>
                  </div>
                </div>
                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/risk.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Risk & Compliance Management </h3>
                    <p>
                      Identification and automated tagging of business-specific
                      risk patterns (e.g. animal testing in the cosmetics
                      industry)
                    </p>
                  </div>
                </div>
                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/spent.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Spent Analysis</h3>
                    <p>
                      Identification and automated tagging and extraction of
                      duplicate contracts (e.g. indirect purchasing)
                    </p>
                  </div>
                </div>

                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/reg.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Redaction (GDPR, Competitive Reg.)</h3>
                    <p>
                      Identification and automated redaction of competitive
                      sensitive information and/or information with regard to
                      GDPR requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================service section end ================== */}
        {/* ===================Mentioned section ================== */}
        <section>
          <div className="mentioned-area">
            <div className="section-title">
              <p className="sm-title">best service</p>
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
                <div className="chainup-img">
                  <img src="assets/img/inner/chainup.png" alt="" />
                </div>
                <div className="chainup-content">
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
                        <p>Data Center Worldwide</p>
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
                          <CountUp end={300} duration={5} /> +
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
                <div className="market-card">
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
                <div className="market-card">
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
        <div className="newsletters">
          <div className="newsletter-content">
            <div className="flex-col">
              <p className="urbanist-dark-42">Newsletters</p>
              <p className="raleway-white-18">
                Most popular gaming digital nft Website
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
        {/* ==================Features================== */}
        <section>
          <div id="inner-area">
            <div className="features cpy-6">
              <div className="services-decor">
                <img src="assets/imgs/decor-ball-1.png" alt="" />
                <img src="assets/imgs/decor-ball-2.png" alt="" />
                <img src="assets/imgs/decor-ball-3.png" alt="" />
                <img src="assets/imgs/decor-ball-4.png" alt="" />
              </div>
              <div className="container">
                <div className="section-title">
                  <p className="sm-title">FEATURES OF</p>
                  <h2 className="sec-title"> NFT Development Services</h2>
                </div>

                <div className="services">
                  <div className="services-container">
                    <div className="service">
                      <div className="services-icon">
                        <img src="assets/img/icon/speed.png" alt="" />
                        <img src="assets/img/icon/speeda.png" alt="" />
                      </div>

                      <p>Speed</p>
                      <ul className="feature-list">
                        <li>
                          <p>Fast paced – hardly any manual processing</p>
                        </li>
                        <li>
                          <p>Limitless scalable resources</p>
                        </li>
                        <li>
                          <p>
                            Global Deloitte network facilitates processes
                            24x7/365
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img src="assets/img/icon/securitya.png" alt="" />
                        <img src="assets/img/icon/security.png" alt="" />
                      </div>

                      <p>Security</p>
                      <ul className="feature-list">
                        <li>
                          <p>
                            Deloitte data center in Germany and two-factor
                            authentication
                          </p>
                        </li>
                        <li>
                          <p>Client on premise solutions</p>
                        </li>
                        <li>
                          <p>
                            Maximum objectivity and error reduction vs. manual
                            review
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="service">
                      <div className="services-icon">
                        <img src="assets/img/icon/certificat.png" alt="" />
                        <img src="assets/img/icon/3-a.png" alt="" />
                      </div>

                      <p>Certification</p>
                      <ul className="feature-list">
                        <li>
                          <p>
                            Utilization of Deloitte’s global network of lawyers
                            and subject matter experts
                          </p>
                        </li>
                        <li>
                          <p>
                            Legally compliant certifications of the analyses
                            carried out
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================Features ================== */}

        {/* =====================top project===================== */}
        <div className="projects">
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

            <div className="table-responsive">
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

            <div className="plans-options">
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

              <div className="client-review">
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
              <div className="faq-div">
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
              <div className="faq-div">
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
              <div className="faq-div">
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
              <div className="faq-div">
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
              <div className="faq-div">
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

Business.title = "Full Stack Web Development Services";
Business.layout = AppLayout;

const table = [
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
  {
    projectName: "1 Bored Ape Yacht Club",
    volume: "$ 534,226,452 ",
    sales: "435",
    allVolume: "$ 534,2426,452.19",
    totalSale: "95557",
  },
];
export default Business;
