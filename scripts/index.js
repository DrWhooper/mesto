import Card from "./Card.js"
import FormValidator from "./FormValidator.js";
import { formValidationConfig } from "./validate.js";
import { openPopup, closePopup } from "../utils/utils.js"

const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const popups = document.querySelectorAll('.popup')
const popupEditProfile = document.querySelector('.popup_edit_name');
const photoAddButtonCard = document.querySelector('.profile__add-button')
const popupAddPhotoCard = document.querySelector('.popup_add_photo')
const elementsCard = document.querySelector('.elements');
const closeButtons = document.querySelectorAll('.popup__close');
const profileForm = document.querySelector('.popup__form');
const fieldResetAddPhotoPopup = document.querySelector('.popup__form_clear_field')
const nameInput = profileForm.querySelector('.popup__input_user_name');
const jobInput = profileForm.querySelector('.popup__input_user_jobs');
const namePhoto = popupAddPhotoCard.querySelector('.popup__input_card_name')
const srcPhoto = popupAddPhotoCard.querySelector('.popup__input_card_img')
const profileName = document.querySelector('.profile__name');
const profileJobs = document.querySelector('.profile__jobs');
const cardInZoom = document.querySelector('.popup_img_zoom');
const photoCardInZoom = cardInZoom.querySelector('.popup__img');
const titleCardInZoom = cardInZoom.querySelector('.popup__title-img');
const popupValidateEditForm = document.querySelector('.popup__form_validate_edit')
const popupValidatePhotoForm = document.querySelector('.popup__form_validate_photo')

function closeClickElement() {
  popups.forEach((element) => {
    element.addEventListener('click', (evt) => {
      const click = evt.target
      if (click.classList.contains('popup')) {
        closePopup(element)
      }
    })
  })
}

closeClickElement()

function setValidateForm(popupValidate) {
  const popupSetValidate = new FormValidator(formValidationConfig, popupValidate)
  popupSetValidate.enableValidation()

}

setValidateForm(popupValidateEditForm)
setValidateForm(popupValidatePhotoForm)

function showEditPopup() {
  openPopup(popupEditProfile)
  nameInput.value = profileName.textContent;
  jobInput.value = profileJobs.textContent;
}

function showAddPhotoPopup() {
  openPopup(popupAddPhotoCard);
  fieldResetAddPhotoPopup.reset();
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJobs.textContent = jobInput.value;
  closePopup(popupEditProfile)
}

closeButtons.forEach(closeButton => {
  closeButton.addEventListener('click', closeButtonClick)
})

function closeButtonClick(evt) {
  const evtTarget = evt.target.closest('.popup')
  closePopup(evtTarget)
}

buttonOpenEditProfilePopup.addEventListener('click', showEditPopup);
photoAddButtonCard.addEventListener('click', showAddPhotoPopup)
profileForm.addEventListener('submit', submitEditProfileForm);

const cardTemplate = document.querySelector('#atricle-tamplate').content;

function createCard(name, img) {
  const card = new Card(cardTemplate, name, img, elementsCard, photoCardInZoom, titleCardInZoom, cardInZoom)
  renderCards(card)
}

const submitAddCardForm = (evt) => {
  evt.preventDefault()
  const cardsName = namePhoto.value;
  const cardsImg = srcPhoto.value;
  createCard(cardsName, cardsImg)
  closePopup(popupAddPhotoCard)
  fieldResetAddPhotoPopup.reset(); 
}

popupAddPhotoCard.addEventListener('submit', submitAddCardForm);

const renderCards = (Cards) => {
  elementsCard.prepend(Cards.createCard());
}

initialCards.forEach((card) => {
  const cardsName = card.name;
  const cardsImg = card.link;
  createCard(cardsName, cardsImg)
})

export {openPopup}