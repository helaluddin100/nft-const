import { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import { Navigation, A11y } from "swiper";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
function SmartContract() {
  const [service, setService] = useState(1);

  return (
    <>
      <div id="home3" className="cpy-5">
        <div className="container">
          <section className="hero">
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>
                Decentralized Smart
                <span> Contract</span>
                <br /> Development
              </h1>

              <p className="raleway-black-16">
                Built over $10B in on-chain value across 1000+ projects!
                Experienced smart contract developers at your service.
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

            <div
              className="hero-img"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img
                src="assets/img/hero/smart-contract-dev.png"
                alt=""
                className="hero-bg"
              />
              <img src="assets/img/hero/5.png" alt="" className="contract1" />
              <img src="assets/img/hero/6.png" alt="" className="contract2" />
              <img src="assets/img/hero/7.png" alt="" className="contract3" />
              <img src="assets/img/hero/8.png" alt="" className="contract4" />
            </div>
          </section>
        </div>
      </div>
      {/* =============service card section ================== */}
      <section>
        <div className="service-card">
          <div className="container">
            <div className="row-4">
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # Reliable Platform
                    </a>
                    <img src="assets/img/inner/timer.svg" alt="" />
                  </div>
                  <p>Most Realiable Developers</p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # Project&apos;s Confidentiality
                    </a>
                    <img src="assets/img/inner/doller.svg" alt="" />
                  </div>
                  <p>All of Your Information Is Secure</p>
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
                      # Communicative
                    </a>
                    <img src="assets/img/inner/notice.svg" alt="" />
                  </div>
                  <p>Clients say the team feels like their employees. </p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # 24/7 Support
                    </a>
                    <img src="assets/img/inner/vip.svg" alt="" />
                  </div>
                  <p>Our developers are there to support you 24*7</p>
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
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="about-us-img">
                  <img src="assets/img/inner/about-us.png" alt="" />
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="about-us-content">
                  <div className="about-content-inner">
                    <h2>description</h2>
                    <p>
                      As a Non Funglible Token & Blockchain Smart Contract
                      Creator,we help you to make the best NFT smart contract
                      that would allow you to automate the complete execution of
                      an solid agreement so that all parties are immidietly
                      aware of the outcome which is backed by blockchain
                      technologies.The major part of the NFT development is done
                      when the smart contract is developed perfectly with proper
                      testing & audit.Smart contracts are the major key in
                      developing the NFT and many other major crypto tokenized
                      services that are recreating WEB3 eco system effectively.
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
        <section
          className="demo-request"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
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

        {/* ===================Mentioned section ================== */}
        <section>
          <div
            className="mentioned-area cpt-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="section-title">
              <p className="sm-title">best service</p>
              <h2 className="sec-title">We’ve Been Mentioned In....</h2>
            </div>
            <div className="mentioned-section ">
              <div className="images-slider-1">
                <div className="images-slider-wrapper">
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
                  </div>
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
                  </div>
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
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
                          <CountUp end={60} duration={5} /> +
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
                          <CountUp end={160} duration={5} /> +
                        </h3>
                        <p>Liquidity Service Client</p>
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
        {/* ===================development track ================== */}
        <section>
          <div className="development-track cpb-6" id="nft-development">
            <div className="container">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="sm-title">best services</p>
                <h2 className="sec-title">NFT Development Tech Stack</h2>
                <p className="sec-des">
                  SemiDot is a leading NFT marketplace development company. We
                  are highly innovative & work with advanced technologies.
                </p>
              </div>
              <div
                className="options"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div
                  className={service === 1 ? "option active" : "option"}
                  onClick={() => {
                    setService(1);
                  }}
                >
                  <p>BlockChain Platform</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt=""
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 2 ? "option active" : "option"}
                  onClick={() => {
                    setService(2);
                  }}
                >
                  <p>Storage Platform</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt=""
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 3 ? "option active" : "option"}
                  onClick={() => {
                    setService(3);
                  }}
                >
                  <p>NFT Standards</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt=""
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 4 ? "option active" : "option"}
                  onClick={() => {
                    setService(4);
                  }}
                >
                  <p>Front End Frameworks</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt=""
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 5 ? "option active" : "option"}
                  onClick={() => {
                    setService(5);
                  }}
                >
                  <p>Programming Languages</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt=""
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 6 ? "option active " : "option"}
                  onClick={() => {
                    setService(6);
                  }}
                >
                  <p>Cloud Platforms</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt=""
                    className="arrow-down"
                  />
                </div>
              </div>
              <div className="" data-aos="fade-up" data-aos-duration="1000">
                <div className={service === 1 ? "coins active" : "coins"}>
                  <div className="eth">
                    <img src="assets/imgs/etherium.png" alt="Etherium" />
                    <p>Ethereum</p>
                  </div>
                  <div className="tezos">
                    <img src="assets/imgs/tezos.png" alt="Etherium" />
                    <p>Tezos</p>
                  </div>
                  <div className="wax">
                    <img src="assets/imgs/wax.png" alt="Etherium" />
                    <p>Wax</p>
                  </div>
                  <div className="cortana">
                    <img src="assets/imgs/cortana.png" alt="Etherium" />
                    <p>Cortana</p>
                  </div>
                  <div className="hyperledger">
                    <img src="assets/imgs/hyperledger.png" alt="Etherium" />
                    <p>Hyperledger</p>
                  </div>
                  <div className="multichain">
                    <img src="assets/imgs/multichain.png" alt="Etherium" />
                    <p>Multichain</p>
                  </div>
                </div>
                <div className={service === 2 ? "coins active" : "coins"}>
                  <div className="ipfs">
                    <img src="assets/img/icon/ipfs.png" alt="Etherium" />
                    <p>IPFS</p>
                  </div>
                  <div className="filecoin">
                    <img src="assets/img/icon/file-coin.png" alt="Etherium" />
                    <p>File Coin</p>
                  </div>
                  <div className="mangodb">
                    <img src="assets/img/icon/mangodb.png" alt="Etherium" />
                    <p>MangoDB</p>
                  </div>
                  <div className="couchbd">
                    <img src="assets/img/icon/couchbd.png" alt="Etherium" />
                    <p>CouchDB</p>
                  </div>
                </div>
                <div className={service === 3 ? "coins active" : "coins"}>
                  <div className="eth">
                    <img src="assets/imgs/etherium.png" alt="Etherium" />
                    <p>ERC-721A</p>
                  </div>
                  <div className="eth">
                    <img src="assets/imgs/etherium.png" alt="Etherium" />
                    <p>ERC-1155</p>
                  </div>
                  <div className="tezos">
                    <img src="assets/imgs/tezos.png" alt="Etherium" />
                    <p>Tezos</p>
                  </div>

                  <div className="dgoods">
                    <img src="assets/img/icon/dgoods.png" alt="Etherium" />
                    <p>Dgoods</p>
                  </div>
                  <div className="trc">
                    <img src="assets/img/icon/trc.png" alt="Etherium" />
                    <p>Trc-721</p>
                  </div>
                  <div className="dgoods">
                    <img src="assets/img/icon/bep.png" alt="Etherium" />
                    <p>Bep-20</p>
                  </div>
                  <div className="rust">
                    <img src="assets/img/icon/rust.png" alt="Etherium" />
                    <p>Rust Programing</p>
                  </div>
                </div>

                <div className={service === 4 ? "coins active" : "coins"}>
                  <div className="vue">
                    <img src="assets/img/icon/vuejs.png" alt="Etherium" />
                    <p>Vue Js</p>
                  </div>
                  <div className="angular">
                    <img src="assets/img/icon/angular.png" alt="Etherium" />
                    <p>Angular</p>
                  </div>
                  <div className="react">
                    <img src="assets/img/icon/react.png" alt="Etherium" />
                    <p>React</p>
                  </div>
                  <div className="kafka">
                    <img src="assets/img/icon/cafca.png" alt="Etherium" />
                    <p>Kafka</p>
                  </div>
                  <div className="couchdb">
                    <img src="assets/img/icon/couchdb.png" alt="Etherium" />
                    <p>CouchDB</p>
                  </div>
                  <div className="couchdb2">
                    <img src="assets/img/icon/couchdb-2.png" alt="Etherium" />
                    <p>CouchDB</p>
                  </div>
                </div>

                <div className={service === 5 ? "coins active" : "coins"}>
                  <div className="kafka">
                    <img src="assets/img/icon/solidity.png" alt="Etherium" />
                    <p>Solidity</p>
                  </div>
                  <div className="angular1">
                    <img src="assets/img/icon/angular1.png" alt="Etherium" />
                    <p>Angular</p>
                  </div>
                  <div className="react">
                    <img src="assets/img/icon/c++.png" alt="Etherium" />
                    <p>C++</p>
                  </div>
                  <div className="react">
                    <img src="assets/img/icon/c.png" alt="Etherium" />
                    <p>C</p>
                  </div>
                  <div className="couchdb">
                    <img src="assets/img/icon/couchdb.png" alt="Etherium" />
                    <p>CouchDB</p>
                  </div>
                  <div className="php">
                    <img src="assets/img/icon/php.png" alt="Etherium" />
                    <p>PHP</p>
                  </div>
                </div>

                <div className={service === 6 ? "coins active" : "coins"}>
                  <div className="aws">
                    <img src="assets/img/icon/aws.png" alt="Etherium" />
                    <p>aws</p>
                  </div>
                  <div className="ibm">
                    <img src="assets/img/icon/ibm.png" alt="Etherium" />
                    <p>IBM BLUEMIX</p>
                  </div>
                  <div className="rass">
                    <img src="assets/img/icon/rass.png" alt="Etherium" />
                    <p>Eth rass</p>
                  </div>
                  <div className="kaleido">
                    <img src="assets/img/icon/kaleido.png" alt="Etherium" />
                    <p>Kaleido Insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================development track end ================== */}
        {/* ===================MARKET REPORT section  ================== */}
        <section>
          <div className="market-report-area cpy-6">
            <div className="container">
              <div
                className="section-wrap"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
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
                        Quarterly NFT Market Report <br /> 2021
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
        {/* ==================Features================== */}
        <section>
          <div id="inner-area" data-aos="fade-up" data-aos-duration="1000">
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
                  <h2 className="sec-title">
                    Smart Contract Development Services
                  </h2>
                </div>

                <div className="services">
                  <div className="services-container">
                    <div className="service">
                      <div className="services-icon">
                        <img src="assets/img/icon/1.png" alt="" />
                        <img src="assets/img/icon/1-a.png" alt="" />
                      </div>

                      <p>Smart Contract Development</p>
                      <p>
                        We help you to build your unalterable smart contract on
                        popular blockchain platforms including Ethereum, TRON,
                        EOS, Bitcoins, Binance Chain, Polygon, Solana, etc.
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img src="assets/img/icon/2.png" alt="" />
                        <img src="assets/img/icon/2-a.png" alt="" />
                      </div>

                      <p>Smart Contract Audit</p>
                      <p>
                        Security is critical in the development of blockchain.
                        Our comprehensive smart contract audit service helps
                        startups and enterprises to launch and maintain their
                        NFT platforms.
                      </p>
                    </div>
                    <div className="service">
                      <div className="services-icon">
                        <img src="assets/img/icon/3.png" alt="" />
                        <img src="assets/img/icon/3-a.png" alt="" />
                      </div>

                      <p>NFT(ERC721 & ERC1155) Development</p>
                      <p>
                        With our NFT Development Services, you get end-to-end
                        NFT solutions so you can create scalable NFT creation
                        system and marketplaces for transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================Features ================== */}
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
        {/* ===============Benefits================== */}
        <section>
          <div id="inner-area" data-aos="fade-up" data-aos-duration="1000">
            <div className="benefits-area">
              <div className="benefits-decor">
                <img src="assets/imgs/decor-ball-5.png" alt="" />
                <img src="assets/imgs/decor-ball-6.png" alt="" />
                <img src="assets/imgs/decor-ball-7.png" alt="" />
              </div>
              <div className="container benefit-section">
                <div className="title">
                  <p className="colorful-txt">Types OF</p>
                  <h2> Smart Contract Development Services</h2>
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
        {/* ==================benefit================== */}
        <section>
          <div className="bene cpy-6">
            <div className="container">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="sm-title">BENIFITS OF</p>
                <h2 className="sec-title">
                  {" "}
                  Smart Contract Development Services
                </h2>
                <p className="sec-des">
                  Our unique approach of developing smart contrats gives
                  businesses the confidenceof bigger investment3. in blockchain
                  technology.
                </p>
              </div>

              <div className="benefit-container cpt-7">
                <div className="benefit-box">
                  <div
                    className="benefit-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="benefit-img">
                      <img src="assets/img/icon/4.png" alt="" />
                    </div>
                    <div className="benefit-de">
                      <h2>Secure & Safe</h2>
                      <p>
                        We offer highly secured protection against malicious
                        activities and fraud in the NFT craze.
                      </p>
                    </div>
                  </div>

                  <div
                    className="benefit-item c-derection"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div className="benefit-de">
                      <h2>Customized Solutions</h2>
                      <p>
                        Our NFT Marketplaces can be compatible with different
                        devices (e.g. PCs, smartphones, tablets)
                      </p>
                    </div>
                    <div className="benefit-img">
                      <img src="assets/img/icon/5.png" alt="" />
                    </div>
                  </div>
                  <div
                    className="benefit-item"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="benefit-img">
                      <img src="assets/img/icon/6.png" alt="" />
                    </div>
                    <div className="benefit-de">
                      <h2>Highly Scalable</h2>
                      <p>
                        We will design a NFT Marketplace that can cope with
                        newly added listings and an expanding pool of customers
                      </p>
                    </div>
                  </div>
                  <div
                    className="benefit-item c-derection"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    <div className="benefit-de">
                      <h2>Post-launch Support</h2>
                      <p>
                        TokenMinds believes in customer satisfaction and hence
                        we provide ongoing support even after deployment.
                      </p>
                    </div>
                    <div className="benefit-img">
                      <img src="assets/img/icon/7.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================benefit================== */}
        {/* =====================top project===================== */}
        <div className="projects" data-aos="fade-up" data-aos-duration="1000">
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
            <div
              className="section-title"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="sm-title">pricing</p>
              <h2 className="sec-title">Our Pricing Plan</h2>
              <p className="sec-des">
                Pay securely online and manage the booking via desktop or via
                the mobile app.
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

        {/* =====================happy clients======================= */}
        <section>
          <div className="happy-area cpb-6">
            <div className="container">
              <div
                className="section-wrap"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="chainup-title">
                  <p>Happy clients</p>
                  <h2>What Our Client Say’s</h2>
                </div>
                <p>
                  This is what clients have been saying after using the great
                  service we do for clients.
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
        <div
          className="faqs-section cpb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
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

SmartContract.title = "Full Stack Web Development Services";
SmartContract.layout = AppLayout;

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
export default SmartContract;
