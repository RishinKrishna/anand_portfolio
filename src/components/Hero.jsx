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

import styles from "../style";

const Hero = () => (
  <section
    id="home"
    className={`flex flex-1 md:flex-row flex-col ${styles.paddingY} h-[100vh]`}
  >
    {/* className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} */}

    <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="name_heading flex-1 font-poppins  ss:text-[82px]  text-[32px] text-white ss:leading-[100px] leading-[75px]">
          <span className="ss:text-[80px] font-semibold text-[32px] ss:bottom-0">
            Anand Nambissan
          </span>{" "}
        </h1>
      </div>
      <h5 className="font-Montserrat text-white  text-[18px]">
        THE NEXT BIG IDEA IS WAITING FOR ITS NEXT BIG CHANGER WITH{" "}
        <span className="text-red-600 text-[21px] font-semibold">VASS</span>
      </h5>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
  </section>
);

export default Hero;
