import Services from "../services/page";
import JobsLanding from "../jobs/page";
import LandingFirstPart from "../components/landing/Landing";
import styles from "./landing.module.css";
import AboutProject from "../components/aboutProject/aboutProject";

function Landing(props) {
  return (
    <div className={styles.container}>
      <LandingFirstPart />
      <AboutProject />
      <JobsLanding />
      <Services section="landing"/>
    </div>
  );
}

export default Landing;

//
