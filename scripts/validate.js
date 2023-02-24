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
  const inputFields = form.querySelectorAll(config.inputSelector)
  inputFields.forEach(itemElement => {
    itemElement.addEventListener('input', (evt) => {
      const evtInput = evt.target
      errorInput(evtInput, config)
    })
  })
}

function toggleButtonPopup(form, config) {
  const submitButton = form.querySelector(config.submitButtonSelector)
  const isFormValid = form.checkValidity();
  submitButton.disabled = !isFormValid
  submitButton.classList.toggle(config.inactiveButtonClass, !isFormValid)
}

function deactivationSubmitButton(form, config) {
  form.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonPopup(form, config)
    }, 0);
  });
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach(form => {
    toggleButtonPopup(form, config)
    deactivationSubmitButton(form, config)
    addInputListener(form, config)
    form.addEventListener('input', () => {
      toggleButtonPopup(form, config)
    })
  })
}

enableValidation(formValidationConfig)