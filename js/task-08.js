const submitFormEL = document.querySelector(".login-form");
submitFormEL.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  //   console.log(email.value, password.value);
  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("All fields must be filled in");
  }
  const userData = {
    name: email.value,
    password: password.value,
  };
  console.log(userData);
  evt.target.reset();
}
