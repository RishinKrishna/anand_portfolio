// src/components/CareerGoals.jsx
import React from "react";
import { Navbar, Footer } from "../components";
import styles from "../style";
const CareerGoals = () => {
  return (
    <div>
      <div className={`bg-slate-500 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>

      
      <h2
        className={`text-[#141824] flex justify-center font-poppins font-semibold text-4xl py-10`}
      >
        CAREER GOALS
      </h2>


      {/* Your content for career goals */}



      <div className={`bg-[#141824] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CareerGoals;
