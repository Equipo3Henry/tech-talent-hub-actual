"use client";

import React from "react";
import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import format from "date-fns/format";
import Link from "next/link";
import { validation } from "../../helpers/myposts-companies/validation";
import "react-datepicker/dist/react-datepicker.css";
import {
  seniority,
  workday,
  programming_Languages,
} from "../../helpers/myposts-companies/variables";
import styles from "./formMyPosts.module.css";

const FormMyPosts = () => {
  //? HARCODEO COMPANIES
  const idCompany = "24c1e6fa-3a1e-4f9f-a10a-9e3c0ba2f02a";
  const logoCompany =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png";

  //? USE STATE FORM
  const [form, setForm] = useState({
    name_Vacancy: "",
    logo_Company: logoCompany,
    programming_Languages: [],
    seniority: "",
    description: "",
    workday: "",
    salary: 0,
    date_Hire: "",
    isActive: true,
    Relevance: "GLOBAL",
    companyId: idCompany,
  });

  //? USE STATE FORM
  const [errors, setErrors] = useState({
    name_Vacancy: "",
    seniority: "",
    description: "",
    workday: "",
    salary: "",
    date_Hire: "",
  });

  //? USE STATE IS VALID (BOTÓN SUBMIT DESHABILITADO)
  const [valid, setValid] = useState(false);

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
  const initialDate = new Date();
  const nextWeekDate = new Date(
    initialDate.getTime() + 7 * 24 * 60 * 60 * 1000
  );
  const [startDate, setStartDate] = useState(nextWeekDate);

  //? CHANGE HANDLER DATE PICKER
  const handledateHireChange = (date) => {
    const formattedDate = format(date, "MM/dd/yyyy");
    setStartDate(date);
    setForm({
      ...form,
      date_Hire: formattedDate,
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
      setErrors,
      valid,
      setValid,
      isFormComplete
    );
    console.log(form);
  };

  //? ISFORMCOMPLETE FUNCTION
  const isFormComplete = () => {
    const {
      name_Vacancy,
      programming_Languages,
      seniority,
      description,
      workday,
      salary,
      date_Hire,
    } = form;
    const {
      name_Vacancy: nameVacancyError,
      programming_Languages: programmingLanguagesError,
      seniority: seniorityError,
      description: descriptionError,
      workday: workdayError,
      salary: salaryError,
      date_Hire: dateHireError,
    } = errors;

    return (
      name_Vacancy !== "" &&
      programming_Languages.length !== 0 &&
      seniority !== "" &&
      description !== "" &&
      workday !== "" &&
      salary > 0 &&
      date_Hire !== "" &&
      (nameVacancyError === "") & (seniorityError === "") &&
      descriptionError === "" &&
      workdayError === "" &&
      salaryError === "" &&
      dateHireError === ""
    );
  };

  //   //? USE EFFECT - SEND INFO TO VALIDATION.JS
  useEffect(() => {
    setSpan(false);
    validation(form, errors, setErrors, valid, setValid, isFormComplete);
  }, [form]);

  //? SUBMIT BUTTON HANDLER
  const submitHandler = (event) => {
    event.preventDefault();
    // setForm(form);
    console.log(form);
    // axios
    //   .post("/api/vacancies", form)
    //   .then((response) => {
    //     console.log(form);
    //     setSpan(true);
    //   })
    //   .catch((err) => ({ error: err.message }));
    setSpan(true);
    setValid(false);
  };

  return (
    <>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={toggleModal}></div>
          <div className={styles.modal_content}>
            <h2>Create New Post</h2>
            <p>
              Create a New Vacancy Post and find the best candidate for the job!
            </p>
            <div className={styles.form_container}>
              <form
                className={styles.form}
                onSubmit={submitHandler}
                onClick={spanOff}
              >
                <div className={styles.row1_container}>
                  {/* Name Vacancy */}
                  <div className={styles.name_Vacancy_container}>
                    <label className={styles.name_Vacancy}>
                      Vacancy Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name_Vacancy"
                      value={form.name_Vacancy}
                      required
                      placeholder="Enter the name of the vacancy"
                      className={styles.input_name_Vacancy}
                      onChange={changeHandler}
                    />
                    {errors.name_Vacancy !== null && (
                      <span className={styles.error_span}>
                        {errors.name_Vacancy}
                      </span>
                    )}
                  </div>
                  {/* Salary */}
                  <div className={styles.salary_container}>
                    <label className={styles.salary}>
                      Salary <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="number"
                      name="salary"
                      value={form.salary}
                      required
                      placeholder="Estimated Salary"
                      className={styles.input_salary}
                      onChange={changeHandler}
                    />
                    {errors.salary !== null && (
                      <span className={styles.error_span}>{errors.salary}</span>
                    )}
                  </div>
                </div>
                <div className={styles.row3_container}>
                  {/* Programming Languages */}
                  <div className={styles.programming_Languages_container}>
                    <label className={styles.programming_Languages}>
                      Programming Languages{" "}
                      <span className={styles.required}>*</span>
                    </label>
                    <Select
                      isMulti
                      options={programming_Languages}
                      name="programming_Languages"
                      required
                      onChange={(selectedOptions) =>
                        changeHandler({
                          target: {
                            name: "programming_Languages",
                            value: selectedOptions,
                          },
                        })
                      }
                      isClearable={false}
                      placeholder="Select the required programming languages"
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

                  {/* Hiring Date */}
                  <div className={styles.date_Hire_container}>
                    <label className={styles.date_Hire}>
                      Hiring date <span className={styles.required}>*</span>
                    </label>

                    <ReactDatePicker
                      selected={startDate}
                      onChange={handledateHireChange}
                      required
                      className={styles.input_date_Hire}
                    />
                    {errors.date_Hire !== null && (
                      <span className={styles.error_span}>
                        {errors.date_Hire}
                      </span>
                    )}
                  </div>
                </div>
                <div className={styles.row3_container}>
                  {/* Seniority */}
                  <div className={styles.seniority_container}>
                    <label className={styles.seniority}>
                      Seniority <span className={styles.required}>*</span>
                    </label>
                    <Select
                      options={seniority}
                      name="seniority"
                      required
                      onChange={(selectedOption) =>
                        changeHandler({
                          target: { name: "seniority", value: selectedOption },
                        })
                      }
                      isClearable={true}
                      isSearchable={true}
                      placeholder="Select the required seniority"
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
                  {/* Workday */}
                  <div className={styles.workday_container}>
                    <label className={styles.workday}>
                      Employment Type <span className={styles.required}>*</span>
                    </label>
                    <Select
                      options={workday}
                      name="workday"
                      required
                      onChange={(selectedOption) =>
                        changeHandler({
                          target: { name: "workday", value: selectedOption },
                        })
                      }
                      isClearable={true}
                      isSearchable={true}
                      placeholder="Select the required workday"
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
                {/* Description */}
                <div className={styles.description_container}>
                  <label className={styles.description}>
                    Description <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    type="textarea"
                    name="description"
                    value={form.description}
                    placeholder="Write a short summary about the vacancy"
                    className={styles.textarea_description}
                    onChange={changeHandler}
                  />
                  {errors.description !== null && (
                    <span className={styles.error_span}>
                      {errors.description}
                    </span>
                  )}
                </div>
                <button
                  className={styles.btn_modal}
                  type="submit"
                  id="submit-button"
                  disabled={!valid}
                >
                  Create New Post
                </button>
                {span && (
                  <div className={styles.confirmation_container}>
                    <p className={styles.confirmation_p}>
                      {" "}
                      The post was created successfully!
                    </p>
                    <span className={styles.confirmation_span}>
                      You can create a new post or{" "}
                      <Link
                        href="/company/my-posts"
                        onClick={() => {
                          toggleModal();
                          spanOff();
                        }}
                      >
                        go back to your dashboard.
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
            Create new Post
          </button>
        </div>
      </div>
    </>
  );
};

export default FormMyPosts;
