import React from 'react';
import ProfileImage from '../../Assets/ProfileImage.png';
import './Profile.css';
import { FaMouse } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

function Profile() {
  return (
    <div className="Profilediv">
      <h1 className="BackgroundText">DEVELOPER</h1>

      <div className="profilepicdiv">
        <img className="Profilepic" src={ProfileImage} alt="Profile" />
        <div className="profilefade"></div>
        <div className="profileName">
          <h3 className="Textname">TOGIN DENNIS</h3>
        </div>
      </div>

      <div className="Profiledetailsdiv">
        <h1 className="Position">
          <span className="line1">APP & SOFTWARE</span><br />
          <span className="line2">DEVELOPER</span>
        </h1>
        <h2 className="name">TOGIN DENNIS</h2>
        <button className="contactbutton">CONTACT ME</button>

        <div className="downbutton">
          <FaMouse className="mouseicon" style={{ rotate: '180deg' }} />
          <br />
          <BsChevronDown className="downicon" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
