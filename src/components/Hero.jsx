// import gsap from "gsap-trial"
// import { SplitText } from "gsap-trial/SplitText";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

// // gsap.config({ trialWarn: false });

// gsap.registerPlugin(SplitText, ScrollTrigger)

// let mySplitText = new SplitText('.name_heading', {type : 'chars'} )

// let chars = mySplitText.chars

// gsap.from(chars, {
//   yPercent: 130,
//   stagger: 0.1,
//   ease: "back.out",
//   duration: 1.5,
//   lineHeight: 0.2,
//   scrollTrigger:{
//     trigger: '.name_heading',
//     start:'top 80%',
//     markers: true
//   }
// })

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "../style";

const Hero = () => (
  <section
    id="home"
    className={`flex flex-1 md:flex-row flex-col ${styles.paddingY} h-[100vh]`}
  >
    <a href="https://wa.me/919496686256" target="_blank">
      <FontAwesomeIcon
        icon={faWhatsapp}
        className="whatsapp_icon  bottom-12 right-12 bg-[#54EC68] py-2 px-3 absolute  rounded-[12px] text-white text-[45px]"
      />
    </a>

    <div
      className={`flex ${styles.flexStart} flex-col xl:px-0 sm:pl-16 px-6 header_text`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="name_heading flex-1 font-poppins  ss:text-[82px]  text-[32px] text-white ss:leading-[100px] leading-[75px]">
          <span className="ss:text-[80px] font-semibold text-[32px] ss:bottom-0 main_heading">
            Anand <br /> Nambissan
          </span>{" "}
        </h1>
      </div>
      <h5 className="font-Montserrat text-white mt-5  text-[18px]  banner_about">
        THE NEXT BIG IDEA IS WAITING FOR ITS NEXT BIG CHANGER WITH{" "}
        <span className="text-red-600 text-[21px] font-semibold">VASS</span>
      </h5>
      <p
        className={`${styles.paragraph} banner_paragraph max-w-[650px] mt-5 text-white`}
      >
        Experienced IT consultant focusing on startup MVPs, app budgets, Python,
        Data Engineering, ERP consulting, and cloud solutions. Providing tech
        advice, creative solutions, and advanced tools for optimizing business
        goals.
      </p>
      <a
        href="https://calendly.com/vasssystems/free-consultation?month=2023-08"
        target="_blank"
        className="consultation_btn mt-5"
      >
        Get Free Consultation
      </a>
    </div>
  </section>
);

export default Hero;
