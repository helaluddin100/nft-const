import { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import { Navigation, A11y } from "swiper";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
function HiCoin() {
  const [service, setService] = useState(1);

  return (
    <>
      <div id="hiCoin" className="cpy-5">
        <div className="decor-balls">
          <img src="assets/imgs/decor-ball-1.svg" alt="" />
          <img src="assets/imgs/decor-ball-2.svg" alt="" />
          <img src="assets/imgs/decor-ball-3.svg" alt="" />
        </div>
        <div className="container">
          <section className="hero cpy-5">
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
                src="assets/imgs/hero-img-6.png"
                alt="Hero IMG"
                className="hero-img-5"
              />

              <div className="charts-container">
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
              </div>
              <img src="assets/imgs/wheel.svg" alt="" className="wheel" />
              <img src="assets/imgs/decor-4.png" alt="" className="decor-4" />
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
                    <img src="assets/img/icon/minting.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>NFT Minting Platform Development</h3>
                    <p>
                      Give your non-tech users a good start for NFT trading and
                      investment. Build an NFT minting platform with SemiDot
                      where there is no need for knowledge of coding and
                      technology. Let your user mint a new token without
                      worrying about the underlying blockchain story.
                    </p>
                  </div>
                </div>
                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/smart-contract.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>NFT Smart Contract Development</h3>
                    <p>
                      The core processing NFTs are developed for storing the
                      information. Assuring the immutability and transparency of
                      the information, NFT smart contract developed by Semidot
                      is best for controlling the digital asset. Join the wagon
                      and step forward with the successful development.
                    </p>
                  </div>
                </div>
                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/crypto.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Crypto Collectibles</h3>
                    <p>
                      Bring the attestation of ownership for digital products.
                      Sell and earn the royalty of your artwork resale. SemiDot
                      understands your requirements, and with the glitch proof,
                      you can own digital assets and assign them to your name.
                      The ownership of the asset is immutable using NFT.
                    </p>
                  </div>
                </div>
                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/exchange.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>NFT Exchange Development</h3>
                    <p>
                      We provide Blockchain-enabled secured NFT exchange
                      development services for selling, trading, and exchanging
                      NFT tokens. Let creators explore the plethora of revenue
                      streams by minting the creation and selling them. Also,
                      your NFT exchange could be the next great possibility for
                      investors.
                    </p>
                  </div>
                </div>

                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/open.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Open Trading Place</h3>
                    <p>
                      Build an open marketplace with exchanges and order books.
                      Users can sell, buy, or trade crypto assets. Reliable
                      association with SemiDot can give a good beginning,
                      development, and smooth procurement to the task. We are
                      one of the best in Open trade place development.
                    </p>
                  </div>
                </div>

                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/identity.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Identity Management with NFT</h3>
                    <p>
                      Leverage the uniqueness of NFTs for identity management.
                      Every token has a unique value and is owned by a
                      particular entity. Find the best possible opportunities
                      with NFT using the seamless development skills of the
                      SemiDot team. NFTs are considered best for micromanaging
                      scattered things.
                    </p>
                  </div>
                </div>

                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/asset.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Asset Lifecycle Management</h3>
                    <p>
                      Build a simple medium to prove the ownership of things.
                      Try asset life-cycle management services from SemiDot and
                      enjoy the hassle-free life-cycle. NFTs for buying and
                      selling any physical or digital asset. You can transfer
                      ownership of the token to any other user, and trade your
                      assets in a jiff.
                    </p>
                  </div>
                </div>

                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/software.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Software License Management</h3>
                    <p>
                      Manage the software license through NFT numbers. NFTs are
                      authenticated by the owner of the software and are
                      transferable too. Similar to other assets, your software
                      could be secure with non-fungible tokens and are ready to
                      be traded in the marketplace. Ensure the safe ground with
                      SemiDot Infotech.
                    </p>
                  </div>
                </div>

                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/real.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Real Estate Tokenization</h3>
                    <p>
                      Amaze your audience and build a strong future for the Real
                      estate world. Take real estate space to the next level
                      using NFT. Take the virtual ownership of the land and list
                      it on the market to attract the audience. SemiDot is an
                      award-winning blockchain development team with accolades
                      for breach-proof development.
                    </p>
                  </div>
                </div>

                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/peer.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Peer to Peer Exchange</h3>
                    <p>
                      NFT platform for establishing the reliable NFT community.
                      You can trade a variety of NFTs with third-party wallet
                      integration. Always select the NFT development company
                      which has a proven record of P2P crypto exchange
                      development with reliable security standards. Build a safe
                      crypto exchange with SemiDot Infotech.
                    </p>
                  </div>
                </div>

                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/ipo.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>IPO Development</h3>
                    <p>
                      Launch your NFT business with a fundraising NFT platform.
                      You can build an NFT poster with a QR code linked to
                      Etherscan or Blockchain. The most advanced IPO development
                      service ensures your groundbreaking presence in the market
                      and impressive deals. Choose us because we are the best at
                      IPO development.
                    </p>
                  </div>
                </div>

                <div className="service-car">
                  <div className="service-icon">
                    <img src="assets/img/icon/nft.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>NFT Maintenance & Support</h3>
                    <p>
                      With a wide range of services, SemiDot provides continuous
                      support and maintenance for client projects. We are best
                      at project procurement and hassle-free upgrades to the
                      latest versions. Alongside, smooth migration is our forte
                      for your first digital attempt.
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
        {/* ===================development track ================== */}
        <section>
          <div className="development-track" id="nft-development">
            <div className="container">
              <div className="section-title">
                <p className="sm-title">best services</p>
                <h2 className="sec-title">NFT Development Tech Stack</h2>
                <p className="sec-des">
                  SemiDot is a leading NFT marketplace development company. We
                  are highly innovative & work with advanced technologies.
                </p>
              </div>
              <div className="options">
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
                <div>
                  <p>Storage Platform</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt=""
                    className="arrow-down"
                  />
                </div>
                <div>
                  <p>NFT Standards</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt=""
                    className="arrow-down"
                  />
                </div>
                <div>
                  <p>Front End Frameworks</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt=""
                    className="arrow-down"
                  />
                </div>
                <div>
                  <p>Programming Languages</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt=""
                    className="arrow-down"
                  />
                </div>
                <div>
                  <p>Cloud Platforms</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt=""
                    className="arrow-down"
                  />
                </div>
              </div>

              <div className={service === 1 ? "coins active" : "coins"}>
                <div>
                  <img src="assets/imgs/etherium.png" alt="Etherium" />
                  <p>Ethereum</p>
                </div>
                <div>
                  <img src="assets/imgs/tezos.png" alt="Etherium" />
                  <p>Tezos</p>
                </div>
                <div>
                  <img src="assets/imgs/wax.png" alt="Etherium" />
                  <p>Wax</p>
                </div>
                <div>
                  <img src="assets/imgs/cortana.png" alt="Etherium" />
                  <p>Cortana</p>
                </div>
                <div>
                  <img src="assets/imgs/hyperledger.png" alt="Etherium" />
                  <p>Hyperledger</p>
                </div>
                <div>
                  <img src="assets/imgs/multichain.png" alt="Etherium" />
                  <p>Multichain</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================development track end ================== */}
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
                        Yearly NFT Market Report
                        <br /> 2022
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
        {/* =======================technologies===================== */}
        <section className="cpy-6">
          <div className="container">
            <div className="tools-technologies">
              <div className="tools-txt">
                <div className="section-wrap">
                  <div className="chainup-title">
                    <p>best services</p>
                    <h2>Tools And Technologies</h2>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    &apos; s standard dummy text ever since the 1500s, when an
                    unknown printer took
                  </p>
                </div>

                <ul className="tools-list">
                  <li>
                    <img src="assets/imgs/check.png" alt="Checked" />
                    <p className="raleway-grey-16">Creding System Style</p>
                  </li>
                  <li>
                    <img src="assets/imgs/check.png" alt="Checked" />
                    <p className="raleway-grey-16">HTML</p>
                  </li>
                  <li>
                    <img src="assets/imgs/check.png" alt="Checked" />
                    <p className="raleway-grey-16">Java Script</p>
                  </li>
                  <li>
                    <img src="assets/imgs/check.png" alt="Checked" />
                    <p className="raleway-grey-16">MySQL</p>
                  </li>
                  <li>
                    <img src="assets/imgs/check.png" alt="Checked" />
                    <p className="raleway-grey-16">PHP</p>
                  </li>
                </ul>

                <p className="raleway-grey-16">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry &apos;
                  s standard dummy text ever since the 1500s, when an unknown
                  printer took
                </p>
              </div>

              <img
                src="assets/imgs/decor-1.png"
                alt="Papers"
                className="tools-img"
              />
            </div>
          </div>
        </section>
        {/* =================================technologies========================= */}
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
            <div className="million-section ">
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

HiCoin.title = "Full Stack Web Development Services";
HiCoin.layout = AppLayout;

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
export default HiCoin;
