import styles from "../style";
import { logo } from "../assets";
import { footerLinks } from "../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <section className={` ${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <h2 className="text-[#ccc] text-[30px] font-Montserrat">ANAND NAMBISSAN</h2>



        {/* <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        /> */}
        <p className={`${styles.paragraph} mt-4 max-w-[310px] text-white`}>
        THE NEXT BIG IDEA IS WAITING FOR ITS NEXT BIG CHANGER WITH VASS
        </p>
        <div className="flex gap-3">
          <a href="https://www.facebook.com/anandvm" className="flex mt-6">
            <FontAwesomeIcon
              icon={faFacebook}
              className="social_icons_footer bg-[#ccc] py-2 px-2  rounded-[5px] text-[#3765A3] text-[20px]"
            />
          </a>
          <a href="https://instagram.com/anandvmclt" target="_blank" className="flex mt-6">
            <FontAwesomeIcon
              icon={faInstagram}
              className="social_icons_footer bg-[#ccc] py-2 px-2  rounded-[5px] text-[#DE4465] text-[20px]"
            />
          </a>

          <a href="https://twitter.com/anandvm_clt" target="_blank" className="flex mt-6">
            <FontAwesomeIcon
              icon={faTwitter}
              className="social_icons_footer bg-[#ccc] py-2 px-2  rounded-[5px] text-[#1DA1F2] text-[20px]"
            />
          </a>
          <a href="https://www.linkedin.com/in/anandvmclt/" target="_blank" className="flex mt-6">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="social_icons_footer bg-[#ccc] py-2 px-2  rounded-[5px] text-[#007AB5] text-[20px]"
            />
          </a>
          <a href="https://www.youtube.com/@vasssystems" target="_blank" className="flex mt-6">
            <FontAwesomeIcon
              icon={faYoutube}
              className="social_icons_footer bg-[#ccc] py-2 px-2  rounded-[5px] text-[#FD0100] text-[20px]"
            />
          </a>
          <a href="https://github.com/anandvmclt" target="_blank" className="flex mt-6">
            <FontAwesomeIcon
              icon={faGithub}
              className="social_icons_footer bg-[#ccc] py-2 px-2  rounded-[5px] text-[#222222] text-[20px]"
            />
          </a>
          <a href="https://www.fiverr.com/vasssystems" target="_blank" className="flex mt-6">
            <FontAwesomeIcon
              icon={faGoogle}
              className="social_icons_footer bg-[#ccc] py-2 px-2  rounded-[5px] text-[#E94134] text-[20px]"
            />
          </a>
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLinks) => (
          <div
            key={footerLinks.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLinks.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLinks.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLinks.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-[#ccc]">
        Copyright 2023 Anand Nambissan. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {/* {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))} */}
      </div>
    </div>
  </section>
);

export default Footer;
