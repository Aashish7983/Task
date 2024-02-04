import React from "react";
import imglogo from "../img/img.jpg";
import vector from "../img/Vector.png";
import vector1 from "../img//Vector (1).png";
import vector2 from "../img/Vector (2).png";
import vector3 from "../img/Vector4.png";
import { PiBagSimpleFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiNewspaperClipping } from "react-icons/pi";
import { RiCommunityLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { PiNotebookFill } from "react-icons/pi";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="inside-home">
          <div className="first-part">
            <img className="image" src={imglogo} alt="" />
            <h4 className="discount-70">
              70% <span className="vibes-match-text">Vibes Match</span>
            </h4>
          </div>
          <div className="outside-nav">
            <ul className="head-nav">
              <li className="vibes-text">(0.0 vibes)</li>
              <li>IQ</li>
              <li>Appeal</li>
              <li>Social</li>
              <li>Humanity</li>
            </ul>

            <div className="rating-part">
              <ul className="rating-nav">
                <li className="first-rate">4.2</li>
                <li className="second-rate">
                  3.5
                  <img className="vector-img1" src={vector} alt="" />
                </li>
                <li className="third-rate">
                  4.0
                  <img className="vector-img2" src={vector1} alt="" />
                </li>
                <li className="fourth-rate">
                  4.2
                  <img className="vector-img3" src={vector2} alt="" />
                </li>
                <li className="fifth-rate">
                  3.8
                  <img className="vector-img4" src={vector3} alt="" />
                </li>
              </ul>
            </div>

            <div className="name-container">
              <span className="main-name">Charlotte Nolan</span>
            </div>
            <span className="emailid">@charlottenolan880</span>

            <div className="likes-container">
              <span className="vibers">Vibers: 5.2K</span>
              <span className="posts">Posts: 25</span>
            </div>

            <div className="post-box">
              <div className="post-box-text">
                <ul className="post-box-list">
                  <span className="inner">
                    15
                    <li className="inner-part">Inner</li>
                  </span>
                  <span className="line1"></span>
                  <span className="outer">
                    2.3K
                    <li className="outer-part">Outer</li>
                  </span>

                  <span className="line2"></span>
                  <span className="universe">
                    2.3K
                    <li className="universe-part">Universe</li>
                  </span>
                </ul>
              </div>
            </div>

            <div className="content">
              <span className="main-content">
                Things may come to thode who wait, but only the things left by{" "}
                <br />
                those who hustle. Things may come to those who wait.
              </span>
            </div>

            <div className="occupation">
              <span className="position">
                <PiBagSimpleFill className="position-icon" /> CEO, Ooumph
              </span>
              <span className="location">
                <IoMdHome className="location-icon" /> Lucknow, India
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-card">
        <div className="people-card">
          <FaPeopleGroup />
          <span>People</span>
        </div>
        <div className="content-card">
          <PiNewspaperClipping />
          <span>Content</span>
        </div>
        <div className="community-card">
          <RiCommunityLine />
          <span>Community</span>
        </div>
        <div className="offer-card">
          <BiSolidOffer />
          <span>Offer</span>
        </div>
        <div className="diary-card">
          <PiNotebookFill />
          <span>Diary</span>
        </div>
      </div>
    </>
  );
};

export default Home;
