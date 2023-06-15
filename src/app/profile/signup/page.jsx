"use client";

import React from "react";
import styles from "./signup.module.css";
import { useState } from "react";
import Select from "react-select";

function SignUp() {
  //? USE STATE FORM
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    birth: "",
    cv: "",
    country: "",
    progLanguages: [],
    degree: "",
    softSkills: [],
    languages: [],
    seniority: "",
    specialization: "",
    working: false,
    aboutMe: "",
  });

  //? ON CHANGE INPUT HANDLER
  const changeHandler = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    if (
      property === "progLanguages" ||
      property === "softSkills" ||
      property === "languages"
    ) {
      value = Array.isArray(value) ? value.map((option) => option.value) : [];
    } else if (
      property === "country" ||
      property === "seniority" ||
      property === "working"
    ) {
      value = value.value;
    }

    setForm({
      ...form,
      [property]: value,
    });
  };

  //? SUBMIT BUTTON HANDLER
  const submitHandler = (event) => {
    event.preventDefault();
    // setForm(form);
    // console.log(form);
    axios
      .post("ruta", form)
      .then((response) => {
        alert("Yay! The user was created successfully.");
      })
      .catch((err) => alert("An error occurred"));
  };

  //? OPTIONS SELECT PROGRAMMING LANGUAGES -
  const progLanguages = [
    { value: "react", label: "React" },
    { value: "javascript", label: "JavaScript" },
    { value: "c++", label: "C++" },
    { value: "mongodb", label: "MongoDB" },
    { value: "python", label: "Python" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
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
    { value: "communication", label: "Communication" },
    { value: "teamWork", label: "Team Work" },
    { value: "problemSolving", label: "Problem Solving" },
    { value: "timeManagement", label: "Time Management" },
    { value: "critialThinking", label: "Critical Thinking" },
    { value: "decisionMaking", label: "Decision Making" },
    { value: "organizational", label: "Organizational" },
    { value: "stressManagement", label: "Stress Management" },
    { value: "adaptability", label: "Adaptability" },
    { value: "conflictManagement", label: "Conflict Management" },
    { value: "leadership", label: "Leadership" },
    { value: "creativity", label: "Creativity" },
    { value: "resourcefulness", label: "Resourcefulness" },
    { value: "persuasion", label: "Persuasion" },
    { value: "openToCriticism", label: "Open to Criticism" },
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

  //? OPTIONS SELECT ARE YOU WORKING
  const working = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];

  return (
    <div className={styles.page_container}>
      <div className={styles.titles_container}>
        <h1 className={styles.title}>Sign up to Tech Talent Hub</h1>
        <h3 className={styles.subtitle}>
          Ready to find your dream job? Discover companies from all over Israel
        </h3>
      </div>
      <div className={styles.form_container}>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.row1_container}>
            {/* Name */}
            <div className={styles.name_container}>
              <label className={styles.name}>Name</label>
              <input
                type="text"
                name="name"
                className={styles.input_name}
                onChange={changeHandler}
              />
            </div>

            {/* LastName */}
            <div className={styles.lastname_container}>
              <label className={styles.lastname}>Last Name</label>
              <input
                type="text"
                name="lastName"
                className={styles.input_lastname}
                onChange={changeHandler}
              />
            </div>
          </div>
          {/* Email */}
          <div className={styles.email_container}>
            <label className={styles.email}>Email</label>
            <input
              type="text"
              name="email"
              className={styles.input_email}
              onChange={changeHandler}
            />
          </div>

          <div className={styles.row2_container}>
            {/* Username */}
            <div className={styles.username_container}>
              <label className={styles.username}>Username</label>
              <input
                type="text"
                name="username"
                className={styles.input_username}
                onChange={changeHandler}
              />
            </div>

            {/* Password */}
            <div className={styles.password_container}>
              <label className={styles.password}>Password</label>
              <input
                type="text"
                name="password"
                className={styles.input_password}
                onChange={changeHandler}
              />
            </div>

            {/* DIVIDER   */}
          </div>
          <div className={styles.divider}>
            <hr />
          </div>

          <div className={styles.row3_container}>
            {/* Date of Birth */}
            <div className={styles.dateOfBirth_container}>
              <label className={styles.dateOfBirth}>Date of Birth</label>
              <input
                type="text"
                name="birth"
                className={styles.input_dateOfBirth}
                onChange={changeHandler}
              />
            </div>

            {/* CV */}
            <div className={styles.cv_container}>
              <label className={styles.cv}>Curriculum Vitae</label>
              <input
                type="text"
                name="cv"
                className={styles.input_cv}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className={styles.row4_container}>
            {/* Country */}
            <div className={styles.country_container}>
              <label className={styles.country}>Country</label>
              <Select
                options={countries}
                name="country"
                onChange={(selectedOption) =>
                  changeHandler({
                    target: { name: "country", value: selectedOption },
                  })
                }
                isClearable={true}
                isSearchable={true}
                closeMenuOnSelect={true}
                styles={{
                  container: (baseStyles, state) => ({
                    ...baseStyles,
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: "0.5px 0.5px 4px 0.5px",
                    fontSize: 18,
                    width: "93%",
                  }),
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    height: 50,
                  }),
                }}
              />
            </div>

            {/* Programming Languages */}
            <div className={styles.progLanguages_container}>
              <label className={styles.progLanguages}>
                Programming Languages
              </label>
              <Select
                isMulti
                options={progLanguages}
                name="progLanguages"
                onChange={(selectedOptions) =>
                  changeHandler({
                    target: { name: "progLanguages", value: selectedOptions },
                  })
                }
                isClearable={false}
                isSearchable={true}
                closeMenuOnSelect={false}
                styles={{
                  container: (baseStyles, state) => ({
                    ...baseStyles,
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: "0.5px 0.5px 4px 0.5px",
                    fontSize: 18,
                    width: "93%",
                  }),
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    height: 50,
                  }),
                }}
              />
            </div>
          </div>

          <div className={styles.row5_container}>
            {/* Degree */}
            <div className={styles.degree_container}>
              <label className={styles.degree}>Degree</label>
              <input
                type="text"
                name="degree"
                className={styles.input_degree}
                onChange={changeHandler}
              />
            </div>

            {/* Soft Skills */}
            <div className={styles.softSkills_container}>
              <label className={styles.softSkills}>Soft Skills</label>
              <Select
                isMulti
                options={softSkills}
                name="softSkills"
                onChange={(selectedOptions) =>
                  changeHandler({
                    target: { name: "softSkills", value: selectedOptions },
                  })
                }
                isClearable={false}
                isSearchable={true}
                closeMenuOnSelect={false}
                styles={{
                  container: (baseStyles, state) => ({
                    ...baseStyles,
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: "0.5px 0.5px 4px 0.5px",
                    fontSize: 18,
                    width: "93%",
                  }),
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    height: 50,
                  }),
                }}
              />
            </div>
          </div>

          <div className={styles.row6_container}>
            {/* Languages */}
            <div className={styles.languages_container}>
              <label className={styles.languages}>Languages</label>
              <Select
                isMulti
                options={languages}
                name="languages"
                onChange={(selectedOptions) =>
                  changeHandler({
                    target: { name: "languages", value: selectedOptions },
                  })
                }
                isClearable={false}
                isSearchable={true}
                closeMenuOnSelect={false}
                styles={{
                  container: (baseStyles, state) => ({
                    ...baseStyles,
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: "0.5px 0.5px 4px 0.5px",
                    fontSize: 18,
                    width: "93%",
                  }),
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    height: 50,
                  }),
                }}
              />
            </div>

            {/* Seniority */}
            <div className={styles.seniority_container}>
              <label className={styles.seniority}>Seniority</label>
              <Select
                options={seniority}
                name="seniority"
                onChange={(selectedOption) =>
                  changeHandler({
                    target: { name: "seniority", value: selectedOption },
                  })
                }
                isClearable={true}
                isSearchable={true}
                closeMenuOnSelect={true}
                styles={{
                  container: (baseStyles, state) => ({
                    ...baseStyles,
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: "0.5px 0.5px 4px 0.5px",
                    fontSize: 18,
                    width: "93%",
                  }),
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    height: 50,
                  }),
                }}
              />
            </div>
          </div>

          <div className={styles.row7_container}>
            {/* Specialization */}
            <div className={styles.specialization_container}>
              <label className={styles.specialization}>Specialization</label>
              <input
                type="text"
                name="specialization"
                className={styles.input_specialization}
                onChange={changeHandler}
              />
            </div>

            {/* Working */}
            <div className={styles.working_container}>
              <label className={styles.working}>
                Are you currently working?
              </label>
              <Select
                options={working}
                name="working"
                onChange={(selectedOption) =>
                  changeHandler({
                    target: { name: "working", value: selectedOption },
                  })
                }
                isClearable={true}
                isSearchable={true}
                closeMenuOnSelect={true}
                styles={{
                  container: (baseStyles, state) => ({
                    ...baseStyles,
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: "0.5px 0.5px 4px 0.5px",
                    fontSize: 18,
                    width: "93%",
                  }),
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    height: 50,
                  }),
                }}
              />
            </div>
          </div>

          {/* About Me */}
          <div className={styles.working_container}>
            <label className={styles.working}>About you</label>
            <textarea
              type="text"
              name="aboutMe"
              className={styles.textarea_aboutMe}
              onChange={changeHandler}
            />
          </div>

          {/* Botón */}
          <div className={styles.boton_container}>
            <button className={styles.button} type="submit">
              Sign up
            </button>
          </div>
        </form>
      </div>
      {/* <div className={styles.footer}>
        <h3 className={styles.footer_title}>Already have an account?</h3>
        <h3 className={styles.footer_login}>Log in here</h3>
      </div> */}
    </div>
  );
}

export default SignUp;
