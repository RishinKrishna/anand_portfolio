import styles, { layout } from "../style";
const About = () => (
  <section id="" className={`${layout.sectionReverse} my-[30px]`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img
        src="https://th.bing.com/th/id/OIP.nuR81VxPJg5ewn6HPz_EZgHaE8?pid=ImgDet&rs=1"
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] rounded-[12px]"
      />
    
      
    </div>
    <div className={layout.sectionInfo}>
      {/* <div className="absolute z-[0] w-[60%] h-[60%] right-[50%] rounded-full blue__gradient" /> */}
      <h2 className={`text-[#141824] font-poppins font-semibold text-4xl`}>
        About
      </h2>
      <p className={`${styles.paragraph} max-w-[540px] mt-5 text-[#141824]`}>
        As a seasoned IT consultant, I specialize in providing expert guidance
        on startup MVP development, budget planning for app
        development,Python,Data Engineering & ERP consulting and cloud
        solutions. My services also include technology implementation consulting
        and leveraging technology to solve complex organizational problems. My
        goal is to help businesses achieve their objectives by utilizing
        cutting-edge tools and strategies to optimize their technology solutions
      </p>
      <button
        className="bg-[#D43B2A] mt-5 py-2 px-9 text-white rounded-md
      rounded-br-3xl text-[15px] "
      >
       Get Free Consultation
      </button>
      

      {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" /> */}
    </div>
  </section>
);

export default About;
