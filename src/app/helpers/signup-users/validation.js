export const validation = (
  form,
  errors,
  setErrors,
  placeholder,
  setPlaceholder
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
  //? PASSWORD
  //? BIRTH VALIDATION
  //? ABOUT ME VALIDATION
  //? WORKING VALIDATION
  //? COUNTRY VALIDATION
  //? EMAIL VALIDATION
  //? DEGREE VALIDATION
  //? LANGUAGES VALIDATION
  //? PROGRAMMING LANGUAGES VALIDATION
  //? SENIORITY VALIDATION
  //? SOFT SKILLS VALIDATION
  //? SPECIALIZATION VALIDATION
};
