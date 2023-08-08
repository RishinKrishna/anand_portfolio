import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="about container section ">
      <h2 className={`text-[#141824] flex justify-center font-Montserrat font-semibold text-4xl py-10`}>
      SKILLS
      </h2>
      <div className="about_container grid">
        <img
          src="https://i.pinimg.com/736x/57/46/99/57469934607dc3015e7cafb3f6eb671e.jpg"
          alt="" className="about_img rounded-[50%] object-cover overflow-hidden w-[100%] h-[100%]"
        />
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              WebFind Person stock images in HD and millions of other
              royalty-free stock photos, illustrations and vectors in the
              Shutterstock collection. Thousands of new, high-quality pictures
              added …
            </p>
            <button className="main_btn mt-5">Download CV</button>
          </div>
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Development</h3>
                <span className="skills_number ">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Development</h3>
                <span className="skills_number ">50%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage javascript"></span>
              </div>
            </div> 

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Development</h3>
                <span className="skills_number">50%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage python"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
