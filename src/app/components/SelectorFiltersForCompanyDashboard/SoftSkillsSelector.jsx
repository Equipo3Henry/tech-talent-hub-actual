const Optionb = ({ setSelectedProgLanguage, setSelectedSeniority }) => {
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

  return (
    <div>
      <select onChange={(e) => setSelectedProgLanguage(e.target.value)}>
        <option value="">-- select a language --</option>
        {progLanguages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
      <select onChange={(e) => setSelectedSeniority(e.target.value)}>
        <option value="">-- select a seniority --</option>
        {seniority.map((seniority, index) => (
          <option key={index} value={seniority}>
            {seniority}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Optionb;
