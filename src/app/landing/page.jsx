import Services from "../services/page";
import JobsLanding from "../jobs/page";
import LandingFirstPart from "../components/landing/Landing";
import styles from "./landing.module.css";

function Landing(props) {
  return (
    <div className={styles.container}>
      <LandingFirstPart />

      <JobsLanding />
      <Services />
    </div>
  );
}

export default Landing;

//
