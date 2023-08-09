import { clientsFeedback } from "../constants";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="clinets" className="testmonials container section">
      <h2
        className={`text-[#141824] flex justify-center font-poppins font-semibold text-4xl py-10`}
      >
        CLIENTS
      </h2>

      <Swiper
        className="testmonials_container grid "
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {clientsFeedback.map(({ id, image, title, subtitle, comments }) => {
          return (
            <SwiperSlide className="testmonials_item" key={id}>
              <div className="thumb">
                <img
                  src={image}
                  alt=""
                  className="rounded-[50%] h-[70px] object-cover"
                />
              </div>
              <h3 className="testmonials_title">{title}</h3>
              <span className="testmonials_subtitle">{subtitle}</span>
              <div className="testmonials_comments">{comments}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
