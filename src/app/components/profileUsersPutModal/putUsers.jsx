"use client";

import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import Link from "next/link";
import ReactDatePicker from "react-datepicker";
import format from "date-fns/format";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../../profile/layout";
import Layout from "../../profile/layout";
import { validation } from "../../helpers/putUsers/validation";
import "react-datepicker/dist/react-datepicker.css";
import {
  progLanguages,
  countries,
  softSkills,
  seniority,
  working,
  languages,
  specialization,
} from "../../helpers/signup-users/variables";
import styles from "./putUsers.module.css";

const PutUsers = ({ setUserData }) => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    birth: "",
    aboutme: "",
    working: false,
    country: "",
    degree: "",
    languages: [],
    progLanguages: [],
    seniority: "",
    softSkills: [],
    specialization: "",
    recruiter: false,
  });

  //? USE STATE ERRORS
  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    birth: "",
    aboutme: "",
    degree: "",
  });

  //? USE STATE SPAN CONFIRMATION
  const [span, setSpan] = useState(false);
  //? TURN OFF SPAN
  const spanOff = () => {
    setSpan(false);
  };

  //? USE STATE MODAL
  const [showModal, setShowModal] = useState(false);
  //? TOGGLE MODAL
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  //? USE STATE DATE PICKER
  const [startDate, setStartDate] = useState(new Date());

  //? CHANGE HANDLER DATE PICKER
  const handleDateOfBirthChange = (date) => {
    const formattedDate = format(date, "dd/MM/yyyy");
    setStartDate(date);
    setForm({
      ...form,
      birth: formattedDate,
    });
  };

  //? ON CHANGE INPUT HANDLER
  const changeHandler = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    if (
      property === "Relevance" ||
      property === "workday" ||
      property === "seniority"
    ) {
      value = value ? value.value : "";
    }

    if (property === "programming_Languages") {
      value = Array.isArray(value) ? value.map((option) => option.value) : [];
    }

    if (property === "salary") {
      value = parseInt(value);
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
      setErrors
    );
    console.log(form);
  };

  //? USE EFFECT - SEND INFO TO VALIDATION.JS
  useEffect(() => {
    setSpan(false);
    validation(form, errors, setErrors);
  }, [form]);

  //? SUBMIT BUTTON HANDLER
  const submitHandler = (event) => {
    event.preventDefault();
    // setForm(form);
    console.log(form);
    setSpan(true);

    // axios
    //   .post("/api/vacancies", form)
    //   .then((response) => {
    //     setSpan(true);
    //     setValid(false);
    //   })
    //   .catch((err) => ({ error: err.message }));
  };

  return (
    <>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={toggleModal}></div>
          <div className={styles.modal_content}>
            <h2>Edit your personal info</h2>

            <div className={styles.form_container}>
              <form
                className={styles.form}
                onSubmit={submitHandler}
                onClick={spanOff}
              >
                <div className={styles.row1_container}>
                  {/* Name */}
                  <div className={styles.name_container}>
                    <label className={styles.name}>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your first name"
                      className={styles.input_name}
                      onChange={changeHandler}
                    />
                    {errors.name !== null && (
                      <span className={styles.error_span}>{errors.name}</span>
                    )}
                  </div>
                  {/* LastName */}
                  <div className={styles.lastname_container}>
                    <label className={styles.lastname}>Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Enter your last name"
                      className={styles.input_lastname}
                      onChange={changeHandler}
                    />
                    {errors.lastname !== null && (
                      <span className={styles.error_span}>
                        {errors.lastname}
                      </span>
                    )}
                  </div>
                </div>
                <div className={styles.row1_container}>
                  {/* Date of Birth */}
                  <div className={styles.dateOfBirth_container}>
                    <label className={styles.dateOfBirth}>Date of Birth</label>

                    <ReactDatePicker
                      selected={startDate}
                      onChange={handleDateOfBirthChange}
                      placeholder="Enter your date of birth"
                      className={styles.input_dateOfBirth}
                    />
                    {errors.birth !== null && (
                      <span className={styles.error_span}>{errors.birth}</span>
                    )}
                  </div>

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
                  </div>
                </div>
                <div className={styles.row1_container}>
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
                          target: {
                            name: "progLanguages",
                            value: selectedOptions,
                          },
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
                  </div>
                  {/* Degree */}
                  <div className={styles.degree_container}>
                    <label className={styles.degree}>Degree</label>
                    <input
                      type="text"
                      name="degree"
                      placeholder="Select the last degree you have"
                      className={styles.input_degree}
                      onChange={changeHandler}
                    />
                    {errors.degree !== null && (
                      <span className={styles.error_span}>{errors.degree}</span>
                    )}
                  </div>
                </div>
                <div className={styles.row1_container}>
                  {/* Soft Skills */}
                  <div className={styles.softSkills_container}>
                    <label className={styles.softSkills}>Soft Skills</label>
                    <Select
                      isMulti
                      options={softSkills}
                      name="softSkills"
                      onChange={(selectedOptions) =>
                        changeHandler({
                          target: {
                            name: "softSkills",
                            value: selectedOptions,
                          },
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
                      <span className={styles.error_span}>
                        {errors.softSkills}
                      </span>
                    )}
                  </div>
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
                  </div>
                </div>

                <div className={styles.row1_container}>
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
                  </div>
                  {/* Specialization */}
                  <div className={styles.specialization_container}>
                    <label className={styles.specialization}>
                      Specialization
                    </label>
                    <Select
                      options={specialization}
                      name="specialization"
                      onChange={(selectedOption) =>
                        changeHandler({
                          target: {
                            name: "specialization",
                            value: selectedOption,
                          },
                        })
                      }
                      isClearable={true}
                      placeholder="What do you specialize in?"
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

                <div className={styles.row1_container}>
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
                  </div>
                  {/* About Me */}
                  <div className={styles.working_container}>
                    <label className={styles.working}>About you</label>
                    <textarea
                      type="text"
                      name="aboutme"
                      placeholder="Write a short summary about yourself"
                      className={styles.textarea_aboutMe}
                      onChange={changeHandler}
                    />
                    {errors.aboutme !== null && (
                      <span className={styles.error_span}>
                        {errors.aboutme}
                      </span>
                    )}
                  </div>
                </div>
                <button className={styles.btn_modal} type="submit">
                  Confirm & Save
                </button>
                {span && (
                  <div className={styles.confirmation_container}>
                    <p className={styles.confirmation_p}>
                      Your info was modified successfully!
                    </p>
                    <span className={styles.confirmation_span}>
                      <Link
                        href="/profile/mydata"
                        onClick={() => {
                          toggleModal();
                          spanOff();
                        }}
                      >
                        Go back to your dashboard
                      </Link>
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      <div className={styles.page_container}>
        <div className={styles.button_container}>
          <button className={styles.btn_toForm} onClick={toggleModal}>
            Edit your personal info
          </button>
        </div>
      </div>
    </>
  );
};

export default PutUsers;
