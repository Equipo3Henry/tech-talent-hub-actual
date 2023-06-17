const LanguageSelector = ({ setSelectedProgLanguage }) => {
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
    </div>
  );
};

export default LanguageSelector;
