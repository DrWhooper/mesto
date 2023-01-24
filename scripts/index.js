let editButton = document.querySelector('.profile__edit-button');
let popupOpen = document.querySelector('.popup');
let popupBtn = document.querySelector('.popup__btn');

let closeBtn = document.querySelector('.popup__close');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_user_name');
let jobInput = formElement.querySelector('.popup__input_user_jobs');
let profileName = document.querySelector('.profile__name');
let profileJobs = document.querySelector('.profile__jobs');


function popupShow() {
  popupOpen.classList.add('popup_opened');
}

function popupClose() {
  popupOpen.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJobs.textContent = jobInput.value;
  popupClose()
}

editButton.addEventListener('click', popupShow)
closeBtn.addEventListener('click', popupClose);
popupBtn.addEventListener('click', popupClose)
formElement.addEventListener("submit", handleFormSubmit);