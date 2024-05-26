import "./app.scss";
import { Navbar } from "./Components/navbar/Navbar";
import { Hero } from "./Components/hero/Hero";
import About from "./Components/About";
import { Parallex } from "./Components/parallax/Parallex";
import {Services} from "./Components/services/Services";
import { Skills } from "./Components/skills/Skills";
import {Portfolio} from "./Components/portfolio/Portfolio";
import {Contact} from "./Components/Contact/Contact";
import { Cursor } from "./Components/cursor/Cursor";
import { AboutMe } from "./Components/about/About";
import { Reviews } from "./Components/reviews/Reviews"

const App = () => {
  return (
    <div className="pageContent">
      <Cursor/>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <AboutMe/>
       
      </section>
      <section>
      <Reviews/>
      </section>
      
      <section id="Experience" className="Parallex">
        <Parallex type="Experience" />
      </section>
      <section className="Experi">
        <About />
      </section>
 
      <Portfolio id="Projects"/>

      <section id="Skills">
        <Skills/>
      </section>

      <section id="Services" className="Parallex">
        <Parallex type="Services" />
      </section>
      <section><Services/></section>
      {/* <section id="About" className="Parallex">
        <Parallex type="About" />
      </section> */}
      <section id="Contact">
        <Contact/>
      </section>
      
      
    </div>
  );
};

export default App;
