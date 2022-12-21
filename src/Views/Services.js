import ServiceCard from "../Components/ServiceCard";
import wallet from "../../public/Assests/w.png";
import "../service.css";
const Services = () => {
  return (
    <div className="services">
      <p className="title">
        Our <span className="bold">Services</span>
      </p>
      <div className="servicecards">
        <ServiceCard
          icon={wallet}
          title="Financial Preparation"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <ServiceCard
          icon={wallet}
          title="Financial Preparation"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>
    </div>
  );
};
export default Services;
