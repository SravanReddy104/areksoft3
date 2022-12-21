import "../service.css";
const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="servicecontainer">
      <div className="top">
        <img className="icon" src={icon} alt="icom" />
      </div>
      <p className="title">{title}</p>
      <p className="desc">{desc}</p>
      <div className="button">
        <button className="btn">Use Service</button>
        <p className="next">&gt;</p>
      </div>
    </div>
  );
};
export default ServiceCard;
