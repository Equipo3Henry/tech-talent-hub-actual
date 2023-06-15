import Services from "../services/page";
import JobsLanding from "../jobs/page";

function Landing(props) {
  return (
    <div>
      <JobsLanding />
      <Services />
    </div>
  );
}

export default Landing;
