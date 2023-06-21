import { isBefore, format } from "date-fns";

export const validation = async (form, errors, setErrors) => {
  //? NAME VALIDATION (debería validar que no haya otro en la BDD)
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
  if (form.description.length > 500) {
    setErrors((errors) => ({
      ...errors,
      description: "Please enter a description with less than 500 characters",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      description: "",
    }));
  }

  //? HIRING DATE VALIDATION
  const today = new Date();
  const dateHire = new Date(form.date_Hire);

  if (isBefore(dateHire, today)) {
    setErrors((errors) => ({
      ...errors,
      date_Hire: "Please select a date after today",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      date_Hire: "",
    }));
  }

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
};
