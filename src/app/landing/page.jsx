import Services from "../services/page";
import JobsLanding from "../jobs/page";
import LandingFirstPart from "../components/landing/Landing";

function Landing(props) {
  return (
    <div>
      <LandingFirstPart />

      <JobsLanding />
      <Services />
    </div>
  );
}

export default Landing;
