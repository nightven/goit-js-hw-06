const submitFormEL = document.querySelector(".login-form");
submitFormEL.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  //   console.log(email.value, password.value);
  if (email.value === "" || password.value === "") {
    alert("All fields must be filled in");
  } else {
    const userData = {
      name: email.value,
      password: password.value,
    };
    console.log(userData);
  }
  submitFormEL.reset();
}
