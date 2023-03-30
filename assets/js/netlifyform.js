const handleSubmit = (event) => {
  event.preventDefault();
  const myForm = event.target;
  const formData = new FormData(myForm);
  const alertSuccess = document.querySelector("#success-message");

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      console.log("Form successfully submitted");
      myForm.style.display = "none";
      alertSuccess.style.display = "block";
    })
    .catch((error) => {
      alert(error);
    });
};

document
  .querySelector("#contact-form")
  .addEventListener("submit", handleSubmit);
