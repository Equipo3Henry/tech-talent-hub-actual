"use client";

import React, { useEffect, useState } from "react";
import styles from "./signup.module.css";
import Select from "react-select";
import axios from "axios";
import { validation } from "../helpers/signup-users/validation";
import {
  progLanguages,
  countries,
  softSkills,
  seniority,
  working,
  languages,
  specialization,
} from "../helpers/signup-users/variables";

function SignUp() {
  //? USE STATE FORM
  const [form, setForm] = useState({
    username: "",
    name: "",
    lastname: "",
    birth: "",
    aboutme: "",
    working: false,
    country: "",
    email: "",
    password: "",
    degree: "",
    languages: [],
    progLanguages: [],
    seniority: "",
    cv: "",
    softSkills: [],
    specialization: "",
    recruiter: false,
  });

  //? USE STATE ERRORS
  const [errors, setErrors] = useState({
    username: "",
    name: "",
    lastname: "",
    birth: "",
    aboutme: "",
    working: "",
    country: "",
    email: "",
    password: "",
    degree: "",
    languages: "",
    progLanguages: "",
    seniority: "",
    cv: "",
    softSkills: "",
    specialization: "",
    recruiter: "",
  });

  //? USE STATE PLACEHOLDER
  const [placeholder, setPlaceholder] = useState({
    username: "Enter the username you want to use on the site",
    name: "Enter your first name",
    lastname: "Enter your last name",
    birth: "Enter your date of birth",
    aboutme: "Write a short summary about yourself",
    email: "Enter your email",
    password: "Enter a password",
    degree: "Enter the last degree you have",
    cv: "Upload a CV in .pdf format",
  });

  //? USE EFFECT - SEND INFO TO VALIDATION.JS
  useEffect(() => {
    validation(form, errors, setErrors, placeholder, setPlaceholder);
  }, [form]);

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
      property === "working" ||
      property === "specialization"
    ) {
      value = value.value;
    }

    setForm({
      ...form,
      [property]: value,
    });

    validation(
      {
        ...form,
        [property]: value,
      },
      errors,
      setErrors,
      placeholder,
      setPlaceholder
    );
  };

  //? SUBMIT BUTTON HANDLER
  const submitHandler = (event) => {
    event.preventDefault();
    // setForm(form);
    console.log(form);
    axios
      .post("http://localhost:3000/api/users", form)
      .then((response) => {
        alert("Yay! The user was created successfully.");
        setForm({
          username: "",
          name: "",
          lastname: "",
          birth: "",
          aboutme: "",
          working: false,
          country: "",
          email: "",
          password: "",
          degree: "",
          languages: [],
          progLanguages: [],
          seniority: "",
          cv: "",
          softSkills: [],
          specialization: "",
          recruiter: false,
        });
      })
      .catch((err) => ({ error: err.message }));
  };

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
              <label className={styles.name}>
                Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder={placeholder.name}
                className={styles.input_name}
                onChange={changeHandler}
              />
              {errors.name !== null && (
                <span className={styles.name_span}>{errors.name}</span>
              )}
            </div>

            {/* LastName */}
            <div className={styles.lastname_container}>
              <label className={styles.lastname}>
                Last Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="lastname"
                required
                placeholder={placeholder.lastname}
                className={styles.input_lastname}
                onChange={changeHandler}
              />
              {errors.lastname !== null && (
                <span className={styles.lastname_span}>{errors.lastname}</span>
              )}
            </div>
          </div>
          {/* Email */}
          <div className={styles.email_container}>
            <label className={styles.email}>
              Email <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="email"
              required
              placeholder={placeholder.email}
              className={styles.input_email}
              onChange={changeHandler}
            />
            {errors.email !== null && (
              <span className={styles.email_span}>{errors.email}</span>
            )}
          </div>

          <div className={styles.row2_container}>
            {/* Username */}
            <div className={styles.username_container}>
              <label className={styles.username}>
                Username <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="username"
                required
                placeholder={placeholder.username}
                className={styles.input_username}
                onChange={changeHandler}
              />
              {errors.username !== null && (
                <span className={styles.username_span}>{errors.username}</span>
              )}
            </div>

            {/* Password */}
            <div className={styles.password_container}>
              <label className={styles.password}>
                Password <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="password"
                required
                placeholder={placeholder.password}
                className={styles.input_password}
                onChange={changeHandler}
              />
              {errors.password !== null && (
                <span className={styles.password_span}>{errors.password}</span>
              )}
            </div>

            {/* DIVIDER */}
          </div>
          <div className={styles.divider}>
            <hr />
          </div>

          <div className={styles.row3_container}>
            {/* Date of Birth */}
            <div className={styles.dateOfBirth_container}>
              <label className={styles.dateOfBirth}>
                Date of Birth <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="birth"
                required
                placeholder={placeholder.birth}
                className={styles.input_dateOfBirth}
                onChange={changeHandler}
              />
              {errors.password !== null && (
                <span className={styles.password_span}>{errors.password}</span>
              )}
            </div>

            {/* CV */}
            <div className={styles.cv_container}>
              <label className={styles.cv}>Curriculum Vitae</label>
              <input
                type="text"
                name="cv"
                placeholder={placeholder.cv}
                className={styles.input_cv}
                onChange={changeHandler}
              />
              {errors.cv !== null && (
                <span className={styles.cv_span}>{errors.cv}</span>
              )}
            </div>
          </div>

          <div className={styles.row4_container}>
            {/* Country */}
            <div className={styles.country_container}>
              <label className={styles.country}>
                Country <span className={styles.required}>*</span>
              </label>
              <Select
                options={countries}
                name="country"
                required
                onChange={(selectedOption) =>
                  changeHandler({
                    target: { name: "country", value: selectedOption },
                  })
                }
                isClearable={true}
                isSearchable={true}
                placeholder="Select your country of residence"
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
              {errors.country !== null && (
                <span className={styles.country_span}>{errors.country}</span>
              )}
            </div>

            {/* Programming Languages */}
            <div className={styles.progLanguages_container}>
              <label className={styles.progLanguages}>
                Programming Languages <span className={styles.required}>*</span>
              </label>
              <Select
                isMulti
                options={progLanguages}
                name="progLanguages"
                required
                onChange={(selectedOptions) =>
                  changeHandler({
                    target: { name: "progLanguages", value: selectedOptions },
                  })
                }
                isClearable={false}
                placeholder="Select the programming languages you know"
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
              {errors.progLanguages !== null && (
                <span className={styles.progLanguages_span}>
                  {errors.progLanguages}
                </span>
              )}
            </div>
          </div>

          <div className={styles.row5_container}>
            {/* Degree */}
            <div className={styles.degree_container}>
              <label className={styles.degree}>Degree</label>
              <input
                type="text"
                name="degree"
                placeholder={placeholder.degree}
                className={styles.input_degree}
                onChange={changeHandler}
              />
              {errors.degree !== null && (
                <span className={styles.degree_span}>{errors.degree}</span>
              )}
            </div>

            {/* Soft Skills */}
            <div className={styles.softSkills_container}>
              <label className={styles.softSkills}>
                Soft Skills <span className={styles.required}>*</span>
              </label>
              <Select
                isMulti
                options={softSkills}
                name="softSkills"
                required
                onChange={(selectedOptions) =>
                  changeHandler({
                    target: { name: "softSkills", value: selectedOptions },
                  })
                }
                isClearable={false}
                isSearchable={true}
                placeholder="Select the soft skills that better describe you"
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
              {errors.softSkills !== null && (
                <span className={styles.softSkills_span}>
                  {errors.softSkills}
                </span>
              )}
            </div>
          </div>

          <div className={styles.row6_container}>
            {/* Languages */}
            <div className={styles.languages_container}>
              <label className={styles.languages}>
                Languages <span className={styles.required}>*</span>
              </label>
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
                required
                placeholder="Select the languages you know"
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
              {errors.languages !== null && (
                <span className={styles.languages_span}>
                  {errors.languages}
                </span>
              )}
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
                placeholder="Select your seniority"
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
              {errors.seniority !== null && (
                <span className={styles.seniority_span}>
                  {errors.seniority}
                </span>
              )}
            </div>
          </div>

          <div className={styles.row7_container}>
            {/* Specialization */}
            <div className={styles.specialization_container}>
              <label className={styles.specialization}>
                Specialization <span className={styles.required}>*</span>
              </label>
              <Select
                options={specialization}
                name="specialization"
                onChange={(selectedOption) =>
                  changeHandler({
                    target: { name: "specialization", value: selectedOption },
                  })
                }
                isClearable={true}
                placeholder="What do you specialize in?"
                isSearchable={true}
                required
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
              {errors.specialization !== null && (
                <span className={styles.specialization_span}>
                  {errors.specialization}
                </span>
              )}
            </div>

            {/* Working */}
            <div className={styles.working_container}>
              <label className={styles.working}>Work</label>
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
                placeholder="Are you currently working?"
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
              {errors.working !== null && (
                <span className={styles.working_span}>{errors.working}</span>
              )}
            </div>
          </div>

          {/* About Me */}
          <div className={styles.working_container}>
            <label className={styles.working}>About you</label>
            <textarea
              type="text"
              name="aboutme"
              placeholder={placeholder.aboutme}
              className={styles.textarea_aboutMe}
              onChange={changeHandler}
            />
            {errors.aboutme !== null && (
              <span className={styles.aboutme_span}>{errors.aboutme}</span>
            )}
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
