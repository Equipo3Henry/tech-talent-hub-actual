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
    specialization: [],
    working: false,
    aboutMe: "",
  });

  //? ON CHANGE INPUT HANDLER
  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });
  };

  //? SUBMIT BUTTON HANDLER
  const submitHandler = (event) => {
    axios
      .post("ruta del post", form)
      .then((response) => {
        alert("Yay! The user was created successfully.");
      })
      .catch((err) => alert("An error occurred"));
  };

  //? OPTIONS SELECT PROGRAMMING LANGUAGES
  const options = [
    { value: "react", label: "React" },
    { value: "javascript", label: "JavaScript" },
    { value: "c++", label: "C++" },
    { value: "mongodb", label: "MongoDB" },
    { value: "python", label: "Python" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
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
              <input
                type="text"
                name="country"
                className={styles.input_country}
                onChange={changeHandler}
              />
            </div>

            {/* Programming Languages */}
            <div className={styles.progLanguages_container}>
              <label className={styles.progLanguages}>
                Programming Languages
              </label>
              <Select
                isMulti
                options={options}
                isClearable={false}
                isSearchable={true}
                closeMenuOnSelect={false}
              />
              {/* <input
                type="text"
                name="progLanguages"
                className={styles.input_progLanguages}
                onChange={changeHandler}
              /> */}
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
              <input
                type="text"
                name="softSkills"
                className={styles.input_softSkills}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className={styles.row6_container}>
            {/* Languages */}
            <div className={styles.languages_container}>
              <label className={styles.languages}>Languages</label>
              <input
                type="text"
                name="languages"
                className={styles.input_languages}
                onChange={changeHandler}
              />
            </div>

            {/* Seniority */}
            <div className={styles.seniority_container}>
              <label className={styles.seniority}>Seniority</label>
              <input
                type="text"
                name="seniority"
                className={styles.input_seniority}
                onChange={changeHandler}
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
              <input
                type="text"
                name="working"
                className={styles.input_working}
                onChange={changeHandler}
              />
            </div>
          </div>

          {/* About Me */}
          <div className={styles.working_container}>
            <label className={styles.working}>
              A brief description about you
            </label>
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
      <div className={styles.footer}>
        <h3 className={styles.footer_title}>Already have an account?</h3>
        <h3 className={styles.footer_login}>Log in here</h3>
      </div>
    </div>
  );
}

export default SignUp;
