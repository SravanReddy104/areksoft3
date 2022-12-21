import play from "../../public/Assests/play.png";
import apple from "../../public/Assests/apple.png";
import phone from "../../public/Assests/download.png";
import email from "../../public/Assests/email.png";

import "../contact.css";
const Contact = () => {
  return (
    <div className="contactcontainer">
      <div className="nav">
        <p className="white">Available</p>
        <div className="icons">
          <img className="contacticon white" src={`${play}`} alt="icon" />
          <img className="contacticon white" src={`${apple}`} alt="icon" />
        </div>
        <div className="btns">
          <input
            className="text"
            type="text"
            placeholder="Enter your mobile number"
          />
          <button className="submit">Submit</button>

          <p className="or">or</p>

          <input
            className="text"
            type="text"
            placeholder="Enter your email id"
          />
          <button className="submit">Submit</button>
          <p className="white get">to get the app link</p>
        </div>
      </div>
      <div className="innerdetails">
        <div className="leftpart">
          <p className="bold">Office Address</p>
          <p className="address">
            The One Way, No 29, Tyagraj Nagar Road, near Vidyapeeta Circle,
            Vidyapeeta Layout, Ashok Nagar, Banashankari Stage I, Banashankari,
            Bengaluru, Karnataka 560050
          </p>
          <div className="phone">
            <img src={`${phone}`} alt="phone" className="contacticon" />
            <p>+91 90030 76571</p>
            <p className="divid"></p>
            <p>+91 87545 45254</p>
          </div>
          <div className="email">
            <img src={`${email}`} alt="email" className="contacticon" />
            <p>info@edutrust.in</p>
          </div>
        </div>
        <div className="rightpart">
          <div className="links">
            <pre className="head">Useful Links</pre>
            <p>Home</p>
            <p>About Us</p>
            <p>Migrate</p>
            <p>Services</p>
            <p>Contact Us</p>
          </div>
          <div className="links">
            <pre className="head">International Career Streams</pre>
            <p>Medicine</p>
            <p>Health Care</p>
            <p>Engineering</p>
            <p>Maritime</p>
            <p>Business Management</p>
            <p>Finance and Accounts</p>
            <p>Hospitality</p>
            <p>Visual Media</p>
          </div>
          <div className="links">
            <pre className="head">Study In</pre>
            <p>USA</p>
            <p>UK</p>
            <p>Canada</p>
            <p>Australia</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
