// src/components/CareerGoals.jsx
import React from "react";
import { Navbar, Footer } from "../components";
import styles from "../style";

const CareerGoals = () => {
  return (
    <div>
      <div className={`bg-slate-500 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <h2
        className={`text-[#141824] flex justify-center font-poppins font-semibold text-4xl py-10`}
      >
        CAREER GOALS
      </h2>

      {/* Your content for career goals */}
      <div className={`py-8 px-5`}>
        <h3 className={`text-2xl font-semibold mb-5`}>
          Key Requirements for My Next Role
        </h3>
        <ol className={`list-decimal pl-5`}>
          <li>Work Mode: I'm seeking positions that offer remote or hybrid working arrangements with defined time constraints.</li>
          <li>Role Preference: My expertise lies in architectural design. I thrive as a solution provider and prefer this over routine tasks like coding, documentation, and bug fixes.</li>
          <li>Project Management: I excel in initiating and developing projects from scratch within set timelines and budgets. However, adapting to existing systems or code without comprehensive documentation is challenging for me.</li>
          <li>Consultative Approach: I aim for a consulting role where I can harness my full potential, sincerity, and dedication, instead of a traditional employment model. My ideal work duration is 4-5 hours daily, not exceeding 100 hours monthly.</li>
          <li>Working Hours: My productivity peaks during early morning shifts in the Indian timezone. If the job requires an 8-hour workday, I'd prefer flexible hours to maximize my efficiency.</li>
          <li>Afternoon Constraints: I have personal commitments that make me unavailable post 1:00 PM IST, but I am readily available in the early mornings.</li>
          <li>Compensation Structure: If considering a permanent role, please note I operate my consultation agency and manage my insurance and funds (NPF & PPF). I would appreciate an hourly compensation without additional benefits (Optional).</li>
        </ol>
      </div>


         {/* Anand Nambissan's Career Objectives */}
         <div className={`py-8 px-5`}>
         <h3 className={`text-2xl font-semibold mb-5`}>
           Anand's Career Objectives
         </h3>
         <ol className={`list-decimal pl-5`}>
           <li>Passion and Purpose: I aspire to immerse myself in roles where passion meets purpose. Every task I undertake should resonate with my core values, ensuring I approach my work with enthusiasm and a fresh mindset daily. Monotony and fatigue should be strangers to my professional journey.</li>
           <li>Crystal Clarity: Comprehensive understanding is paramount. I desire to be involved in systems and architectures where every activity, no matter how minute, is transparent. This not only helps in efficiently navigating the complexities but also ensures that my contributions feel justified and purposeful.</li>
           <li>Innovation and Strategy: I am driven by the power of research and development. The freedom to implement my unique ideas and strategies is crucial. I aim to perpetually refine processes, enhancing productivity, efficiency, and profitability. Establishing streamlined operational systems remains a top priority.</li>
           <li>Consultation and Respect: My interactions should be characterized by mutual respect. I visualize a consulting model for my professional engagements, where my contributions are not just acknowledged but valued. Any engagement I undertake should factor in covering my personal expenses, ensuring a fair trade of services.</li>
           <li>Freedom and Scalability: Time and financial management should be under my control, granting me the liberty to design my work-life balance. My professional model should be scalable, leveraging my established personal brand for future ventures and opportunities. I am inclined towards straightforward, complication-free endeavors.</li>
           <li>Personal Time and Family Moments: After dedicating a decade to professional pursuits, it's imperative for me to reclaim lost moments. I need the flexibility to pause, to breathe, and prioritize family and personal life. Responsibilities towards my loved ones are paramount, and I wish to balance them alongside my professional commitments.</li>
         </ol>
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

