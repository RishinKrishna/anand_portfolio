// src/components/CareerGoals.jsx
import React from "react";
import { Navbar, Footer, Hero } from "../components";
import styles from "../style";
import { careerRequirements, careerObjectives } from "../constants";
const CareerGoals = () => {
  return (
    <div className="bg-[#F0F0F0]">
      <div className="w-fill h-screen">
        <div
          className="w-full   h-screen bg-top bg-no-repeat  bg-cover bg-fixed overflow-hidden careee_main_image"
          // style={{
          //   backgroundImage: `url("https://wallpapercave.com/wp/wp2722874.jpg")`
          // }}
        >
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth} `}>
              <Navbar />
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <h2
              className={`text-[#fefefe] flex justify-center   font-poppins font-semibold text-[75px] text-center py-10`}
            >
              CAREER GOALS
            </h2>
          </div>
        </div>
      </div>

      <h2
        className={`text-[#141824] flex justify-center text-center font-poppins font-semibold text-4xl py-12`}
      >
        Key Requirements for my next Role
      </h2>

      {/* Your content for career goals */}

      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className="services_container grid">
          {careerRequirements.map(({ id, image, title, description }) => {
            return (
              <div
                className="career_requirements_card flex flex-col justify-start items-center mb-7"
                key={id}
              >
                <img src={image} alt="" className="w-[65px]  items-center" />
                <h3 className="services_title text-[22px] mt-3 font-semibold text-[#8b88b1] hover:text-[#990033]">
                  {title}
                </h3>
                <p className="services_description text-[14px] mt-2 ">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <h2
        className={`text-[#141824] flex justify-center font-poppins font-semibold text-4xl py-10`}
      >
        Career Objectives
      </h2>

      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className="services_container grid">
          {careerObjectives.map(({ id, image, title, description }) => {
            return (
              <div
                className="career_objectives_card flex flex-col justify-center items-center mb-7"
                key={id}
              >
                <img src={image} alt="" className="w-[65px]  items-center" />
                <h3 className="services_title text-[22px] mt-3 font-semibold text-[#8b88b1] hover:text-[#990033]">
                  {title}
                </h3>
                <p className="services_description text-[14px] mt-2 ">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`bg-[#141824] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CareerGoals;