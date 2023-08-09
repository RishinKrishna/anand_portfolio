import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="contact container section">
      <h2
        className={`text-[#141824] flex justify-center font-Montserrat font-semibold text-4xl py-10`}
      >
        CONTACT
      </h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title font-semibold text-[16px]">
            Let's tailk about <br /> everything
          </h3>
          <p className="contact_details">
            Don't like forms? send me an email.{" "}
          </p>
          <p className="mt-5">
            As a seasoned IT consultant, I specialize in providing expert
            guidance on startup MVP development, budget planning for app
            development
          </p>

          <a href="" className="flex mt-6">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="social_icons bg-[#141824] py-2 px-2  rounded-[5px] text-white text-[20px]"
            />
            <p className="ml-4 mt-1 text-[#141824] text-[16px] font-semibold contact_links">
              anand@vass.co.in
            </p>
          </a>

          <a href="" className="flex mt-6">
            <FontAwesomeIcon
              icon={faPhone}
              className="social_icons bg-[#141824] py-2 px-2  rounded-[5px] text-white text-[20px]"
            />
            <p className="ml-4 mt-1 text-[#141824] text-[16px] font-semibold contact_links">
              +91 9496 686 256
            </p>
          </a>
        </div>
        <form action="" className="contact_form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact_form-div">
              <input
                type="email"
                className="contact_form-input"
                placeholder="Insert your email"
              />
            </div>
          </div>

          <div className="contact_form-div">
            <input
              type="text"
              className="contact_form-input"
              placeholder="Insert your subject"
            />
          </div>

          <div className="contact_form-div contact_form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact_form-input"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="main_btn">Sent Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
