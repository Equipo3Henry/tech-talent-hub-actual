"use client";
import Services from "../services/page";
import JobsLanding from "../jobs/page";
import LandingFirstPart from "../components/landing/Landing";
import styles from "./landing.module.css";
import Carrousel from "../components/carrouselCompanies/carrousel";
import AboutProject from "../components/aboutProject/aboutProject";
import Chatbot from "../chatBot/chatbot";

function Landing(props) {
  return (
    <div className={styles.container}>
      <LandingFirstPart />
      {/*       <Chatbot />
       */}
      <AboutProject />
      <Carrousel />
      <JobsLanding />
      <Services section="landing"/>
    </div>
  );
}

export default Landing;

//
