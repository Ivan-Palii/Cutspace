const form = document.querySelector(".form");
const formInput = document.querySelector(".form__input");

formInput.addEventListener("focus", function () {
  form.classList.add("form_active");
});

formInput.addEventListener("blur", function () {
  form.classList.remove("form_active");
});
