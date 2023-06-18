export const validation = (form, errors, setErrors) => {
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
  //! traer los usernames de la bdd y que se muestre un mensaje de error si el ingresado ya existe

  //? PASSWORD

  //? BIRTH VALIDATION
  //? ABOUT ME VALIDATION
  //? EMAIL VALIDATION
  //? DEGREE VALIDATION
  //? CV VALIDATION
};
