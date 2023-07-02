export const validation = async (
  form,
  errors,
  setErrors,
  valid,
  setValid,
  isFormCompleted
) => {
  //? NAME VALIDATION
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
  //? LASTNAME VALIDATION
  if (form.lastname.length > 50) {
    setErrors((errors) => ({
      ...errors,
      lastname: "Please enter a last name with less than 50 characters",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      lastname: "",
    }));
  }
  //? USERNAME VALIDATION

  if (form.username.length > 15) {
    setErrors((errors) => ({
      ...errors,
      username: "Please enter a Username with less than 15 characters",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      username: "",
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
  if (form.aboutme.length > 500) {
    setErrors((errors) => ({
      ...errors,
      aboutme: "Please enter a description with less than 500 characters",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      aboutme: "",
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

  //? ISVALID STATE
  const isValid = isFormCompleted();
  setValid(isValid);
};
