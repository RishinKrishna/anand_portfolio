import styles from "../style";
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="w-full flex justify-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-[#141824]">
        Copyright 2021 HooBank. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
