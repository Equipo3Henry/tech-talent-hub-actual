import styles from "../SelectorFiltersForCompanyDashboard/SelectorFiltersForCompanyDashboard.module.css";

const FiltersSelectorProfile = ({
  setSelectedProgLanguage,
  setSelectedSeniority,
  /*   setSelectedCompanyType,
   */ setSelectedSpec,
  setSelectedWorkday,
}) => {
  const programming_Languages = [
    "C",
    "GO",
    "JAVA",
    "JAVASCRIPT",
    "KOTLIN",
    "R",
    "OBJECTIVEC",
    "PHP",
    "POSTSCRIPT",
    "PYTHON",
    "REACT",
    "RUBY",
    "RUST",
    "SCALA",
    "SCHEME",
    "SQL",
    "SWIFT",
    "TYPESCRIPT",
    "VISUALBASICNET",
    "ELIXIR",
    "ERLANG",
  ];

  const seniority = ["JUNIOR", "SEMISENIOR", "SENIOR"];

  /*   const companyType = ["STARTUP", "SMALL", "MEDIUM", "BIG", "MULTINATIONAL"];
   */
  const specialization = [
    "FRONTEND",
    "BACKEND",
    "FULLSTACK",
    "DATASCIENTIST",
    "AI_ENGINEER",
  ];

  const workday = [
    "FULLTIME",
    "PARTTIME",
    "INTERMEDIATE",
    "TEMPORAL",
    "INTERSHIPTRAINEE",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.selectorsContainer}>
        <select
          onChange={(e) => setSelectedProgLanguage(e.target.value)}
          className={styles.selectors}
        >
          <option value="">-- select a language --</option>
          {programming_Languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setSelectedSeniority(e.target.value)}
          className={styles.selectors}
        >
          <option value="">-- select a seniority --</option>
          {seniority.map((seniority, index) => (
            <option key={index} value={seniority}>
              {seniority}
            </option>
          ))}
        </select>
        {/*     <select
          onChange={(e) => setSelectedCompanyType(e.target.value)}
          className={styles.selectors}
        >
          <option value="">-- select a company type -- </option>
          {companyType.map((companyType, index) => (
            <option key={index} value={companyType}>
              {companyType}
            </option>
          ))}
        </select> */}
        <select
          onChange={(e) => setSelectedSpec(e.target.value)}
          className={styles.selectors}
        >
          <option value="">-- select a specialization --</option>
          {specialization.map((specialization, index) => (
            <option key={index} value={specialization}>
              {specialization}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setSelectedWorkday(e.target.value)}
          className={styles.selectors}
        >
          <option value="">-- select a workday --</option>
          {workday.map((workday, index) => (
            <option key={index} value={workday}>
              {workday}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FiltersSelectorProfile;
