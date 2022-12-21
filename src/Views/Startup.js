import "../startup.css";
import brand from "../../public/Assests/brand.jpg";
import love from "../../public/Assests/love.png";
import flag from "../../public/Assests/fla.jpg";
import user from "../../public/Assests/user.png";
import wings from "../../public/Assests/wings.png";
import down from "../../public/Assests/less.png";

const Startup = () => {
  return (
    <div className="startcontainer">
      <div className="startleft">
        <div className="startnav">
          <img src={`${brand}`} alt="brand" className="startbrand" />
          <p>Home</p>
          <p>About Us</p>
          <p>Migrate</p>
          <p>Services</p>
          <p>Contact Us</p>
        </div>
        <div className="quotation">
          <div>
            <p className="big">Let your</p>
            <p className="startbold">dream take</p>
          </div>
          <div className="logo">
            <img src={`${wings}`} alt="logo" className="logo" />
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="chosecountry">
          <img src={flag} alt="country" className="starticon" />
          <input className="startinput" placeholder="choose Country" />
          <img src={down} alt="country" className="startdown" />
        </div>
        <p className="divider"></p>
        <div className="chosedegree">
          <input
            type="text"
            className="startinput"
            placeholder="choose your degree"
          />
          <img src={down} alt="country" className="startdown" />
        </div>
        <p className="divider"></p>
        <div className="chosearea">
          <input className="startinput" placeholder="Area of study" />
          <img src={down} alt="country" className="startdown" />
        </div>
        <div className="chosecourse">
          <input className="startinput" placeholder="choose your Course" />
          <img src={down} alt="country" className="startdown" />
        </div>
      </div>
      <div className="startright">
        <div className="starticons">
          <img src={`${love}`} className="starticon love" alt="love" />
          <img src={`${user}`} className="starticon user" alt="user" />
        </div>
        <div className="poster">
          {/* <img src={`${person}`} alt="poster" className="poster" /> */}
        </div>
      </div>
    </div>
  );
};
export default Startup;
