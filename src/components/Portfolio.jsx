import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2 className={`text-[#141824] flex justify-center font-poppins font-semibold text-4xl py-10`}>
      Portfolio
      </h2>
      <div className="_work_list">
        <div className="_work">
          <img src="https://anand.vass.co.in/img/portfolio/p-4.jpg" alt="" />
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
          <img src="https://anand.vass.co.in/img/portfolio/p-4.jpg" alt="" />
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
          <img src="https://anand.vass.co.in/img/portfolio/p-4.jpg" alt="" />
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
