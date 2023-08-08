// import gsap from "gsap-trial";
// import { SplitText } from "gsap-trial/SplitText";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

// gsap.config({ trialWarn: false });

// gsap.registerPlugin(SplitText, ScrollTrigger);

// let mySplitText = new SplitText("#sub_heading_portfolio", { type: "chars" });

// let chars = mySplitText.chars;

// gsap.from(chars, {
//   yPercent: 130,
//   stagger: 0.05,
//   ease: "back.out",
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#sub_heading_portfolio",
//     start: "top 80%",
//     markers: true,
//   },
// });

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2 id="sub_heading_portfolio"
        className={` text-[#141824] flex justify-center font-Montserrat font-semibold text-4xl py-[30px]`}
      >
        PORTFOLIO
      </h2>
      <div className="_work_list">
        <div className="_work">
          <img
            src="https://th.bing.com/th/id/OIP.nuR81VxPJg5ewn6HPz_EZgHaE8?pid=ImgDet&rs=1"
            alt=""
          />
          <div className="portfolio_card_leyer">
            <h3>Web Development</h3>
            <p>
              Our new Project every processes had become fragmented; meaning
              quality and service were inconsistent.
            </p>
            <a href="">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
        <div className="_work">
          <img
            src="https://th.bing.com/th/id/OIP.nuR81VxPJg5ewn6HPz_EZgHaE8?pid=ImgDet&rs=1"
            alt=""
          />
          <div className="portfolio_card_leyer">
            <h3>Web Development</h3>
            <p>
              Our new Project every processes had become fragmented; meaning
              quality and service were inconsistent.
            </p>
            <a href="">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
        <div className="_work">
          <img
            src="https://th.bing.com/th/id/OIP.nuR81VxPJg5ewn6HPz_EZgHaE8?pid=ImgDet&rs=1"
            alt=""
          />
          <div className="portfolio_card_leyer">
            <h3>Web Development</h3>
            <p>
              Our new Project every processes had become fragmented; meaning
              quality and service were inconsistent.
            </p>
            <a href="">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> 
            </a>
          </div>
        </div>
      </div>
      {/* <button className="see_more_btn">See More</button> */}
    </div>
  );
};

export default Portfolio;
