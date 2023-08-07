import styles from "./style";
import { Navbar, Footer, Hero, Experience, About, Contact, Portfolio, Testimonials } from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <div
      className="w-[100%] h-[100vh] overflow-hidden main_image"
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp2722874.jpg")`,
      }}
    >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
    <div className={`bg-[#F0F0F0] ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
      </div>
    </div>
    <div className={`bg-[#F0F0F0] ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Experience />
        <Portfolio/>
      </div>
    </div>
    <div className={`bg-[#F0F0F0] ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials/>
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
