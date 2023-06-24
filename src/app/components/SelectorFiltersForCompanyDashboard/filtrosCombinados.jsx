import styles from "./SelectorFiltersForCompanyDashboard.module.css";

const FiltersSelector = ({
  setSelectedProgLanguage,
  setSelectedSeniority,
  setSelectedSoftSkill,
}) => {
  const progLanguages = [
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

  const softSkills = [
    "Optimism",
    "Adaptability",
    "Communication",
    "Teamwork",
    "Problem_Solving",
    "Time_Management",
    "Critical_Thinking",
    "Decision_Making",
    "Organizational",
    "Stress_Management",
    "Attention_To_Detail",
    "Conflict_Management",
    "Leadership",
    "Creativity",
    "Resourcefulness",
    "Persuasion",
    "Openness_To_Criticism",
    "Interpersonal_Skills",
    "Work_Ethic",
    "Self_Motivation",
    "Collaboration",
  ];

  const specialization = [
    "FRONTEND",
    "BACKEND",
    "FULLSTACK",
    "DATASCIENTIST",
    "AI_ENGINEER",
  ];

  return (
    <div className={styles.selectorsContainer}>
      <select
        onChange={(e) => setSelectedProgLanguage(e.target.value)}
        className={styles.selectors}
      >
        <option value="">-- select a language --</option>
        {progLanguages.map((language, index) => (
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
      <select
        onChange={(e) => setSelectedSoftSkill(e.target.value)}
        className={styles.selectors}
      >
        <option value="">-- select a soft skill --</option>
        {softSkills.map((softSkill, index) => (
          <option key={index} value={softSkill}>
            {softSkill}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FiltersSelector;
