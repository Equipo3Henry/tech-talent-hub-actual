//? OPTIONS SELECT PROGRAMMING LANGUAGES -
const programming_Languages = [
  { value: "C", label: "C" },
  { value: "GO", label: "Go" },
  { value: "JAVA", label: "Java" },
  { value: "JAVASCRIPT", label: "JavaScript" },
  { value: "KOTLIN", label: "Kotlin" },
  { value: "R", label: "R" },
  { value: "OBJECTIVEC", label: "Objective-C" },
  { value: "PHP", label: "PhP" },
  { value: "POSTSCRIPT", label: "PostScript" },
  { value: "PYTHON", label: "Python" },
  { value: "REACT", label: "React" },
  { value: "RUBY", label: "Ruby" },
  { value: "RUST", label: "Rust" },
  { value: "SCALA", label: "Scala" },
  { value: "SCHEME", label: "Scheme" },
  { value: "SQL", label: "SQL" },
  { value: "SWIFT", label: "Swift" },
  { value: "TYPESCRIPT", label: "TypeScript" },
  { value: "VISUALBASICNET", label: "Visual Basic .NET" },
  { value: "ELIXIR", label: "Elixir" },
  { value: "ERLANG", label: "Erlang" },
];

//? OPTIONS VACANCY NAME
const vacancy = [
  { value: "FRONTEND", label: "Front-end Developer" },
  { value: "BACKEND", label: "Back-end Developer" },
  { value: "DATASCIENTIST", label: "Data Scientist" },
  { value: "FULLSTACK", label: "Fullstack Developer" },
  { value: "AI_ENGINEER", label: "AI Engineer" },
];

//? OPTIONS SELECT WORKDAY
const workday = [
  { value: "FULLTIME", label: "Full-Time" },
  { value: "PARTTIME", label: "Part-Time" },
  { value: "INTERMEDIATE", label: "Intermediate" },
  { value: "TEMPORAL", label: "Temporal" },
  { value: "INTERNSHIPTRAINEE", label: "Internship/Trainee" },
];

//? OPTIONS SELECT SENIORITY
const seniority = [
  { value: "JUNIOR", label: "Junior" },
  { value: "SEMISENIOR", label: "Semi-Senior" },
  { value: "SENIOR", label: "Senior" },
];

module.exports = {
  seniority,
  workday,
  vacancy,
  programming_Languages,
};
