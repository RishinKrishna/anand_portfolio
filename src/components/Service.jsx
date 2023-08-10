import { serviceCard } from "../constants";

const Service = () => {
  return (
    <section id="servives" className="services container section">
      <h2
        className={`text-[#141824] flex justify-center font-Montserrat font-semibold text-4xl py-10`}
      >
        SERVICES
      </h2>

      <div className="services_container grid">
        {serviceCard.map(({id, image , title ,description}) =>{
          return (
            <div className="services_card" key={id}>
              <img src={image} alt="" className="services_img" />
              <h3 className="services_title text-[22px] mt-3 font-semibold text-[#8b88b1] hover:text-[#990033]">
                {title}
              </h3>
              <p className="services_description text-[14px] mt-2 ">
                {description}
              </p>
            </div>
        )
        })}
      </div>
    </section>
  );
};

export default Service;
