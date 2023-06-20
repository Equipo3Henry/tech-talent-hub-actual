//? OPTIONS SELECT PROGRAMMING LANGUAGES -
const progLanguages = [
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

//? OPTIONS SELECT COUNTRIES
const countries = [
  { value: "argentina", label: "Argentina" },
  { value: "bolivia", label: "Bolivia" },
  { value: "brasil", label: "Brasil" },
  { value: "chile", label: "Chile" },
  { value: "colombia", label: "Colombia" },
  { value: "costaRica", label: "Costa Rica" },
  { value: "cuba", label: "Cuba" },
  { value: "ecuador", label: "Ecuador" },
  { value: "elSalvador", label: "El Salvador" },
  { value: "guatemala", label: "Guatemala" },
  { value: "honduras", label: "Honduras" },
  { value: "mexico", label: "Mexico" },
  { value: "nicaragua", label: "Nicaragua" },
  { value: "panama", label: "Panama" },
  { value: "paraguay", label: "Paraguay" },
  { value: "peru", label: "Perú" },
  { value: "puertoRico", label: "Puerto Rico" },
  { value: "dominicana", label: "República Dominicana" },
  { value: "uruguay", label: "Uruguay" },
  { value: "venezuela", label: "Venezuela" },
];

//? OPTIONS SELECT SOFT SKILLS
const softSkills = [
  { value: "Optimism", label: "Optimism" },
  { value: "Adaptability", label: "Adaptability" },
  { value: "Communication", label: "Communication" },
  { value: "Teamwork", label: "Teamwork" },
  { value: "Problem_Solving", label: "Problem Solving" },
  { value: "Time_Management", label: "Time Management" },
  { value: "Critical_Thinking", label: "Critical Thinking" },
  { value: "Decision_Making", label: "Decision Making" },
  { value: "Organizational", label: "Organizational" },
  { value: "Stress_Management", label: "Stress Management" },
  { value: "Attention_To_Detail", label: "Attention to Detail" },
  { value: "Conflict_Management", label: "Conflict Management" },
  { value: "Leadership", label: "Leadership" },
  { value: "Creativity", label: "Creativity" },
  { value: "Resourcefulness", label: "Resourcefulness" },
  { value: "Persuasion", label: "Persuasion" },
  { value: "Openness_To_Criticism", label: "Openness to Criticism" },
  { value: "Interpersonal_Skills", label: "Interpersonal Skills" },
  { value: "Work_Ethic", label: "Work Ethic" },
  { value: "Self_Motivation", label: "Self Motivation" },
  { value: "Collaboration", label: "Collaboration" },
];

//? OPTIONS SELECT LANGUAGES
const languages = [
  { value: "englishBasic", label: "English (Basic)" },
  { value: "englishIntermediate", label: "English (Intermediate)" },
  { value: "englishAdvanced", label: "English (Advanced)" },
  { value: "englishNative", label: "English (Native)" },
  { value: "spanishBasic", label: "Spanish (Basic)" },
  { value: "spanishIntermediate", label: "Spanish (Intermediate)" },
  { value: "spanishAdvanced", label: "Spanish (Advanced)" },
  { value: "spanishNative", label: "Spanish (Native)" },
  { value: "portugueseBasic", label: "Portuguese (Basic)" },
  { value: "portugueseIntermediate", label: "Portuguese (Intermediate)" },
  { value: "portugueseAdvanced", label: "Portuguese (Advanced)" },
  { value: "portugueseNative", label: "Portuguese (Native)" },
  { value: "italianBasic", label: "Italian (Basic)" },
  { value: "italianIntermediate", label: "Italian (Intermediate)" },
  { value: "italianAdvanced", label: "Italian (Advanced)" },
  { value: "italianNative", label: "Italian (Native)" },
];

//? OPTIONS SELECT SENIORITY
const seniority = [
  { value: "trainee", label: "Trainee" },
  { value: "junior", label: "Junior" },
  { value: "semiSenior", label: "Semi-Senior" },
  { value: "senior", label: "Senior" },
];

//? OPTIONS SELECT SPECIALIZATION
const specialization = [
  { value: "FRONTEND", label: "Front-end" },
  { value: "BACKEND", label: "Back-end" },
  { value: "DATASCIENTIST", label: "Data Scientist" },
  { value: "FULLSTACK", label: "Full-stack" },
  { value: "AI_ENGINEER", label: "AI Engineer" },
];

//? OPTIONS SELECT ARE YOU WORKING
const working = [
  { value: true, label: "Yes" },
  { value: false, label: "No" },
];

module.exports = {
  working,
  specialization,
  seniority,
  languages,
  softSkills,
  progLanguages,
  countries,
};
