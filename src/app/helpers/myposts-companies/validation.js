import { isBefore, format } from "date-fns";

export const validation = async (
  form,
  errors,
  setErrors,
  valid,
  setValid,
  isFormComplete
) => {
  //? VACANCY NAME VALIDATION
  if (form.name_Vacancy.length > 70) {
    setErrors((errors) => ({
      ...errors,
      name_Vacancy: "Please enter a name with less than 70 characters",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      name_Vacancy: "",
    }));
  }

  //? ABOUT ME VALIDATION
  if (form.description.length > 5000) {
    setErrors((errors) => ({
      ...errors,
      description: "Please enter a description with less than 5000 characters",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      description: "",
    }));
  }

  /*   //? HIRING DATE VALIDATION
  const dateHireParts = form.date_Hire.split("/"); // Dividir la cadena en partes día, mes y año
  const dateHire = new Date(
    dateHireParts[2],
    dateHireParts[1] - 1,
    dateHireParts[0]
  ); //
  const today = new Date();
  */

  /*  if (isBefore(dateHire, today)) {
    setErrors((errors) => ({
      ...errors,
      date_Hire: "Please select a date after today",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      date_Hire: "",
    }));
  } */

  //? VACANCIES VALIDATION
  if (isNaN(form.salary)) {
    setErrors((errors) => ({
      ...errors,
      salary: "Please enter a numeric value",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      salary: "",
    }));
  }

  //? ISVALID STATE
  const isValid = isFormComplete();
  setValid(isValid);
};
