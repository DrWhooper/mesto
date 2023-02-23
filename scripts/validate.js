const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

function errorInput(input, config) {
  const errorText = document.querySelector(`#${input.id}-error`)
  if (input.validity.valid){
    input.classList.remove(config.inputErrorClass)
    errorText.textContent = ''
  } else {
    input.classList.add(config.inputErrorClass)
    errorText.textContent = input.validationMessage
  }
}

function addInputListener(form, config) {
  const inputField = form.querySelectorAll(config.inputSelector)
  inputField.forEach(itemElement => {
    itemElement.addEventListener('input', (evt) => {
      const evtInput = evt.target
      errorInput(evtInput, config)
    })
  })
}

function toggleButtonPopup(form, config) {
  const buttonPopup = form.querySelector(config.submitButtonSelector)
  const isFormValid = form.checkValidity();
  buttonPopup.disabled = !isFormValid
  buttonPopup.classList.toggle(config.inactiveButtonClass, !isFormValid)
}

function enableValidation(config) {
  const popupForm = Array.from(document.querySelectorAll(config.formSelector))
  popupForm.forEach(form => {
    toggleButtonPopup(form, config)
    addInputListener(form, config)
    form.addEventListener('input', () => {
      toggleButtonPopup(form, config)
    })
  })
}

enableValidation(formValidationConfig)