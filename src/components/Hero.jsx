import styles from "../style";

const Hero = () => (
  <section
    id="home"
    className={`flex flex-1 md:flex-row flex-col ${styles.paddingY} h-[100vh]`}
  >
    {/* className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} */}

    <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[82px]  text-[32px] text-white ss:leading-[100px] leading-[75px]">
          <span className="text-gradient ss:text-[72px] text-[32px] ss:bottom-0">
            ANAND NAMBISSAN
          </span>{" "}
        </h1>
      </div>
      <h5 className="font-poppins font-semibold ">
        THE NEXT BIG IDEA IS WAITING FOR ITS NEXT BIG CHANGER WITH VASS
      </h5>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
  </section>
);

export default Hero;
