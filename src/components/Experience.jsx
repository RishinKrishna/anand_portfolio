// import gsap from "gsap-trial"
// import { SplitText } from "gsap-trial/SplitText";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

// // gsap.config({ trialWarn: false });

// gsap.registerPlugin(SplitText, ScrollTrigger)

// let mySplitText = new SplitText('#sub_heading_experience', {type : 'chars'} )

// let chars = mySplitText.chars

// gsap.from(chars, {
//   yPercent: 130,
//   stagger: 0.05,
//   delay:0.2,
//   ease: "back.out",
//   duration: 1,
//   lineHeight: 0.2,
//   scrollTrigger:{
//     trigger: '#sub_heading_experience',
//     start:'top 80%',
//     markers: true
//   }
// })

const Experience = () => {
  return (
    <div id="experience" className="qualifications_container ">
      <h2
        id="sub_heading_experience"
        className={` overflow-hidden text-[#141824] flex justify-center font-Montserrat font-semibold text-4xl py-[30px]`}
      >
        EXPERIENCE
      </h2>
      <main className="_row my[30px]">
        <section className="_col">
          <header className="_title"></header>
          <div className="_contents">
            <div className="_box">
              <h4>July 2022 - Present</h4>
              <h3> Senior System Analyst</h3>
              <p>
                I'm a Senior Systems Analyst at a renowned multinational IT
                service company in Technopark, Trivandrum. I decipher business
                needs, offer tech solutions to clients, and oversee the tech
                team. I'm skilled in Python, API development, cloud computing,
                and more.
              </p>
            </div>
            <div className="_box">
              <h4>March 2016 - June 2020 | (On Going till now)</h4>
              <h3> Co Founder and CTO</h3>
              <p>
                Since March 2016, I've co-founded VASS Systems, delivering tech
                consulting, product development, and IoT solutions with a
                commitment to ethics and professionalism. Our portfolio includes
                IoT products, dynamic websites, MVPs, digital marketing, ERP
                consulting for NASS Commercial Bahrain, and other SAAS products.
              </p>
            </div>
          </div>
        </section>

        <section className="_col">
          <header className="_title"></header>
          <div className="_contents">
            <div className="_box">
              <h4>June 2020 - June 2022</h4>
              <h3>Full Stack Developer (Python)</h3>
              <p>
                I served as a full-stack web developer at Zinfoge Code Labs
                (Govt Cyber Park Kozhikode) and Beinex Consulting (Infopark
                Kochi). My tasks spanned team management, Python-based solutions
                via web frameworks, architecture selection, cloud deployment
                (AWS), and Python-based data analytics
              </p>
            </div>
            <div className="_box">
              <h4>July 2013 - December 2015</h4>
              <h3>QA / QC Analyst</h3>
              <p>
                I'm a self-taught IT pro with a Mechanical Engineering degree. I
                previously worked as a Quality Control Analyst at Reliance
                Petroleum Refinery in Jamnagar on the J3 project. Through Gannon
                Dunkerley and Company Ltd. and subcontractors, I ensured
                pipeline quality, performed welding inspections, followed HSE
                standards, and managed documentation.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Experience;
