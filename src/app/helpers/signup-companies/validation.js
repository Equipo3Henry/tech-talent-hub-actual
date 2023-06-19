export const validation = async (form, errors, setErrors) => {
  //? NAME VALIDATION (debería validar que no haya otro en la BDD)
  if (form.name.length > 50) {
    setErrors((errors) => ({
      ...errors,
      name: "Please enter a name with less than 50 characters",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      name: "",
    }));
  }

  //? PASSWORD VALIDATION
  if (form.password.length > 12) {
    setErrors((errors) => ({
      ...errors,
      password: "Your password should have less than 12 characters",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      password: "",
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

  //? EMAIL VALIDATION
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (form.email.trim() === "") {
    setErrors((errors) => ({
      ...errors,
      email: "",
    }));
  } else if (!emailRegex.test(form.email)) {
    setErrors((errors) => ({
      ...errors,
      email: "Please enter a valid email address",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      email: "",
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

  //? LOGO VALIDATION
  const logoLinkRegex = /^https?:\/\/.*\.png$/;
  if (form.logo_Company.trim() === "") {
    setErrors((errors) => ({
      ...errors,
      logo_Company: "",
    }));
  } else if (!logoLinkRegex.test(form.logo_Company)) {
    setErrors((errors) => ({
      ...errors,
      logo_Company: "Please enter a valid PNG link for the logo",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      logo_Company: "",
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
