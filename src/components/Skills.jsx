import { about_img } from "../assets";

const Skills = () => {
  return (
    <section id="skills" className="about container section ">
      <h2
        className={`text-[#141824] flex justify-center font-Montserrat font-semibold text-4xl py-10`}
      >
        SKILLS
      </h2>
      <div className="about_container grid">
        <img
          src={about_img}
          alt=""
          className="about_img rounded-[20px] object-cover overflow-hidden w-[100%] h-[100%]"
        />
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I'm adept at constructing robust applications and devising
              creative cloud strategies. With a dedication to solutions, I
              approach every project with a client-centric focus, and my
              commitment to staying abreast of industry trends ensures the
              delivery of cutting-edge solutions aligned with evolving needs.
            </p>
            <a href="https://vasssystems.s3.ap-south-1.amazonaws.com/Documents/Anand_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="main_btn mt-5">Download CV</button>
            </a>

          </div>
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Python</h3>
                <span className="skills_number">85%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage python"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">JavaScript (Full stack)</h3>
                <span className="skills_number">54%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage javasript"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Cloud & DevOps</h3>
                <span className="skills_number ">68%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage Cloud_and_DevOps"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name"> AI & Data Engineering</h3>
                <span className="skills_number">35%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage ai"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
