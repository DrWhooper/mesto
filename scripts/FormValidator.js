export default class FromValidator {
  constructor(config, formElement) {
    this._formValidationConfig = config
    this._formElement = formElement
  }

  _toggleInputError(input) {
    const errorText = document.querySelector(`#${input.id}-error`)
    if (input.validity.valid){
      input.classList.remove(this._formValidationConfig.inputErrorClass)
      errorText.textContent = ''
    } else {
      input.classList.add(this._formValidationConfig.inputErrorClass)
      errorText.textContent = input.validationMessage
    }
  }

  _addInputListener() {
    const inputFields = this._formElement.querySelectorAll(this._formValidationConfig.inputSelector)
    inputFields.forEach(itemElement => {
      itemElement.addEventListener('input', (evt) => {
        const evtInput = evt.target
        this._toggleInputError(evtInput)
      })
    })
  }

  _toggleButtonPopup() {
    const submitButton = this._formElement.querySelector(this._formValidationConfig.submitButtonSelector)
    const isFormValid = this._formElement.checkValidity();
    submitButton.disabled = !isFormValid
    submitButton.classList.toggle(this._formValidationConfig.inactiveButtonClass, !isFormValid)
  }

  _setResetHandler() {
    this._formElement.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonPopup(this._formElement, this._formValidationConfig)
      }, 0);
    });
  }
  
  enableValidation() {
    this._toggleButtonPopup(this._formElement, this._formValidationConfig)
    this._setResetHandler(this._formElement, this._formValidationConfig)
    this._addInputListener(this._formElement, this._formValidationConfig)
    this._formElement.addEventListener('input', () => {
      this._toggleButtonPopup(this._formElement, this._formValidationConfig)
    })
  }
}