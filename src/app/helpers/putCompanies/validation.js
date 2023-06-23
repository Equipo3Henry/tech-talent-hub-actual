export const validation = async (form, errors, setErrors) => {
  //? DESCRIPTION VALIDATION
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

  //? VACANCIES VALIDATION
  if (isNaN(form.vacancies)) {
    setErrors((errors) => ({
      ...errors,
      vacancies: "Please enter a numeric value",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      vacancies: "",
    }));
  }

  //? EMPLOYEES VALIDATION
  if (isNaN(form.employes)) {
    setErrors((errors) => ({
      ...errors,
      employes: "Please enter a numeric value",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      employes: "",
    }));
  }

  //? JOBS VALIDATION
  if (isNaN(form.jobs)) {
    setErrors((errors) => ({
      ...errors,
      jobs: "Please enter a numeric value",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      jobs: "",
    }));
  }
};
