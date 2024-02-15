import "./Slider.css";
import partners from "../../partners";

function Slider() {
  return (
    <div>
      <div className="logo">
        <div className="logo-slide">
          {partners.map((partner) => {
            return (
              <>
                <img
                  key={partner.id}
                  className="logo-img"
                  src={partner.url}
                  alt={partner.name}
                />
              </>
            );
          })}
        </div>

        <div className="logo-slide">
          {partners.map((partner) => {
            return (
              <>
                <img
                  key={partner.id}
                  className="logo-img"
                  src={partner.url}
                  alt={partner.name}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Slider;
