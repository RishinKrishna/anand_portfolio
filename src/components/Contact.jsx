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
            Let's talk about <br /> everything
          </h3>
          <p className="mt-5">
            Absolutely, let's delve into everything. I am an accomplished IT
            consultant with a strong background in Python programming, Data
            Engineering, and cloud solutions.
          </p>

          <a href="mailto:anand@vass.co.in" className="flex mt-6">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="social_icons bg-[#141824] py-2 px-2  rounded-[5px] text-white text-[20px]"
            />
            <p className="ml-4 mt-1 text-[#141824] text-[16px] font-semibold contact_links">
              anand@vass.co.in
            </p>
          </a>

          <a href="tel:+917907606844" className="flex mt-6">
            <FontAwesomeIcon
              icon={faPhone}
              className="social_icons bg-[#141824] py-2 px-2  rounded-[5px] text-white text-[20px]"
            />
            <p className="ml-4 mt-1 text-[#141824] text-[16px] font-semibold contact_links">
              +91 790 760 6844
            </p>
          </a>
        </div>
        <form
          action="https://formspree.io/f/xrgwpkya"
          method="POST"
          className="contact_form"
        >
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                placeholder="Enter your name"
                required
                autoComplete="off"
                min={10}
                name="name"
              />
            </div>
            <div className="contact_form-div">
              <input
                type="email"
                className="contact_form-input"
                placeholder="Enter your email"
                required
                autoComplete="off"
                name="email"
              />
            </div>
          </div>

          <div className="contact_form-div">
            <input
              type="text"
              className="contact_form-input"
              placeholder="Enter your subject"
              required
              autoComplete="off"
              name="subject"
            />
          </div>

          <div className="contact_form-div contact_form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact_form-input"
              placeholder="Write your message"
              required
              autoComplete="off"
              min="5"
            ></textarea>
          </div>
          <button className="main_btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
