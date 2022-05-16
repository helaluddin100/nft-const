import { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import { Navigation, A11y } from "swiper";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
function Coin() {
  const [serviceActive, setServiceActive] = useState(1);

  return (
    <>
      <div id="Coin" className="cpy-5">
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
              <img
                src="assets/img/inner/website-design.gif"
                alt=""
                className="he"
              />
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
        {/* ===================service section ================== */}
        <section>
          <div className="service cpy-6">
            <div className="container">
              <div className="section-title">
                <h2 className="sec-title">NFT Web Design Services</h2>
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
                    <img src="assets/img/icon/innovative.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Innovative Designs</h3>
                    <p>
                      Our UI/UX developers believe in simple, innovative, and
                      immersive website and web app designing.
                    </p>
                  </div>
                </div>
                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/effective.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Effective Communication</h3>
                    <p>
                      To build a strong and long-term relationship with our
                      clients, we will always keep you updated.
                    </p>
                  </div>
                </div>
                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/time.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>On-Time Delivery</h3>
                    <p>
                      Nothing is more important than launching the website or
                      web app on time, we ensure on-time delivery.
                    </p>
                  </div>
                </div>
                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/creativity.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Creativity</h3>
                    <p>
                      The websites or web apps designed by us are creative
                      enough to draw the attention of your users.
                    </p>
                  </div>
                </div>

                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/flexible.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Flexible Hiring Models</h3>
                    <p>
                      At SemiDot, we offer different business models, of which
                      you can choose the one that fits your needs.
                    </p>
                  </div>
                </div>

                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/certified.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Certified Designers</h3>
                    <p>
                      We have a team of certified UI/UX designers, that works
                      round the clock to make your project unique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================service section end ================== */}
        {/* ===============Benefits================== */}
        <section>
          <div id="inner-area">
            <div className="benefits-area">
              <div className="benefits-decor">
                <img src="assets/imgs/decor-ball-5.png" alt="" />
                <img src="assets/imgs/decor-ball-6.png" alt="" />
                <img src="assets/imgs/decor-ball-7.png" alt="" />
              </div>
              <div className="container benefit-section">
                <div className="title">
                  <p className="colorful-txt">BENIFITS OF</p>
                  <h2>NFT Developement</h2>
                  <div className="title-line"></div>
                </div>

                <div className="spider">
                  <img
                    src="assets/imgs/center-nft.png"
                    alt=""
                    className="spider-center"
                  />

                  <div className="benefits">
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img src="assets/imgs/liquidity.png" alt="" />
                        <p>NFT Liquidity</p>
                      </div>
                      <div className="benefit-box">
                        <img src="assets/imgs/gas.png" alt="" />
                        <p>Lowest Gas Price</p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img src="assets/imgs/marketplace.png" alt="" />
                        <p>Multi-Chain NFT Marketplace</p>
                      </div>
                      <div className="benefit-box">
                        <img src="assets/imgs/smart-contract.png" alt="" />
                        <p>
                          Smart contract <br /> Audited NFT
                        </p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img src="assets/imgs/stakling.png" alt="" />
                        <p>NFT Staking</p>
                      </div>
                      <div className="benefit-box">
                        <img src="assets/imgs/lending.png" alt="" />
                        <p>NFT Lending</p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img src="assets/imgs/launchpad.png" alt="" />
                        <p>NFT Launch Pad</p>
                      </div>
                      <div className="benefit-box">
                        <img src="assets/imgs/auction.png" alt="" />
                        <p>Bidding & Auction</p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img src="assets/imgs/ownership.png" alt="" />
                        <p>Fractional Ownership</p>
                      </div>
                      <div className="benefit-box">
                        <img src="assets/imgs/minting.png" alt="" />
                        <p>Lazy Minting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===============Benefits end================== */}
        {/* =======================technologies=================
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
                        <img src="assets/imgs/paper.png" alt="" />
                        <img src="assets/imgs/paper-pu.png" alt="" />
                      </div>

                      <p>Standardization</p>
                      <p>
                        You can create reusable, inheritable, and common
                        standards for all NFTs. Begin token standardization of
                        collectibles.
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img src="assets/imgs/chart-99.png" alt="" />
                        <img src="assets/imgs/chart-99-pu.png" alt="" />
                      </div>

                      <p>Marketplace</p>
                      <p>
                        The various NFT marketplaces are highly productive for
                        NFT trading & unique ownership.
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img src="assets/imgs/hand.png" alt="" />
                        <img src="assets/imgs/hand-pu.png" alt="" />
                      </div>

                      <p>Ownership</p>
                      <p>
                        NFT tokens are immutable ownership of antique
                        collectibles that eliminate unauthorized changes
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img src="assets/imgs/hammer.png" alt="" />
                        <img src="assets/imgs/hammer-pu.png" alt="" />
                      </div>

                      <p>Bidding</p>
                      <p>
                        Trade in multiple marketplaces and bid over them to take
                        part in the trade.
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img src="assets/imgs/trace.png" alt="" />
                        <img src="assets/imgs/trace-pu.png" alt="" />
                      </div>

                      <p>Traceability</p>
                      <p>
                        The various NFT marketplaces are highly productive for
                        NFT trading & unique ownership.
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img src="assets/imgs/rocket.png" alt="" />
                        <img src="assets/imgs/rocket-pu.png" alt="" />
                      </div>

                      <p>New Project</p>
                      <p>
                        Wallet providers are eyeing every new project arriving
                        in the NFT marketplace. Enjoy smooth trade.
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img src="assets/imgs/circles.png" alt="" />
                        <img src="assets/imgs/circles-pu.png" alt="" />
                      </div>

                      <p>Tracking</p>
                      <p>
                        You can track the owner of any asset and avoid
                        third-party verification requirements.You can also track
                        traffic & sales analytics.
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img src="assets/imgs/goverment.png" alt="" />
                        <img src="assets/imgs/goverment-pu.png" alt="" />
                      </div>

                      <p>Governance Attributes</p>
                      <p>
                        Users can vote on upgrades of the platform developed by
                        a Governance attribute.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================Features ================== */}
        {/* =====================top project===================== */}

        <div className="projects ">
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
        {/* ===================Mentioned section ================== */}
        <section>
          <div className="mentioned-area cpt-6">
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

Coin.title = "Full Stack Web Development Services";
Coin.layout = AppLayout;

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
export default Coin;
