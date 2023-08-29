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
        className={`text-[#141824] flex justify-center font-Montserrat font-semibold text-4xl py-[30px]`}
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
            <h3>Full Stack Web Application:</h3>
            <p>
            I've crafted diverse full-stack web apps from scratch, playing roles of client consultant, product architect, backend developer, team lead, and financial planner for startup ventures. Notable projects include Reliva Global, a crypto trading platform, and Easy NAAC, an in-house tool for streamlined management of accreditation data, backed by Python Django and React JS.
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
            <h3>IoT Data Engineering Solution</h3>
            <p>
            I've explored and developed a GPS-based location announcement system. I also created a physical product for my early startup using my knowledge in IoT and electronics, focusing on automation and mechatronics. Right now, I'm learning and researching popular technologies like AI, ML, and data engineering. I'm working on creating data pipelines for the Industry 4.0 trend.
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
            <h3>Cloud & DevOps Solution</h3>
            <p>
            Exploring and actively working on different cloud and DevOps technologies. Accomplished the setup of CI/CD pipelines for a Django product on AWS cloud using Docker. Currently delving into Assure Data pipelines. Possess strong expertise in Linux-based systems.
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
