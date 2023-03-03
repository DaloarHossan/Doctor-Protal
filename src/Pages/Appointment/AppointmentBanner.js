
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = ({setSelected,selected}) => {
  
  

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt="" className="rounded-lg w-1/2" />
        <div className="mr-8">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
           
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
