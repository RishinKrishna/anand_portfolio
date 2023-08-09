import styles from "./style";
import { Navbar, Footer, Hero, Experience, About, Portfolio, Testimonials, Skills, Contact } from "./components";

const App = () => (
  <div className="w-full h-screen">
    <div
      className="w-full  h-sreen bg-top bg-no-repeat  bg-cover bg-fixed overflow-hidden main_image"
      // style={{
      //   backgroundImage: `url("https://wallpapercave.com/wp/wp2722874.jpg")`
      // }}
    >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
    <div className={`bg-[#F0F0F0] ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Experience />
        <Portfolio/>
        <Skills/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
    <div className={`bg-[#141824] ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>

  </div>
);

export default App;
