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
import { project_01, project_02, project_03 } from "../assets";
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
            src={project_01}
            alt=""
          />
          <div className="portfolio_card_leyer">
            <h3>Real-time Data Analytics Platform:</h3>
            <p>
            For a fast-growing e-commerce startup, I developed a real-time data analytics platform using Python and cloud resources. By designing optimal data pipelines.
            </p>
            <a href="">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
        <div className="_work">
          <img
            src={project_02}
            alt=""
          />
          <div className="portfolio_card_leyer">
            <h3>IoT Data Integration Solution</h3>
            <p>
            Working with a manufacturing company, I engineered an end-to-end IoT data integration solution. Leveraging my Data Engineering skills.
            </p>
            <a href="">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
        <div className="_work">
          <img
            src={project_03}
            alt=""
          />
          <div className="portfolio_card_leyer">
            <h3>Scalable Healthcare Data Solution</h3>
            <p>
            Collaborating with a healthcare provider, I developed a scalable data solution to manage patient records securely. By employing Python for data processing and integrating cloud storage
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
