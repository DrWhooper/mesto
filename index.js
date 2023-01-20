let editButton = document.querySelector('.profile__edit-button');
let popupOpen = document.querySelector('.popup');

let closeBtn = document.querySelector('.popup__close');

editButton.addEventListener('click', function popupShow() {
  popupOpen.classList.remove('popup_opened');
});

closeBtn.addEventListener('click', function popupClose() {
    popupOpen.classList.add('popup_opened');
})


let formElement = document.querySelector('.popup__form')
let nameInput = formElement.querySelector('.popup__input-name')
let jobInput = formElement.querySelector('.popup__input-jobs')
let profileName = document.querySelector('.profile__name')

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName = nameInput.getAttribute('value');
    jobInput.getAttribute('value');
}

formElement.addEventListener("submit", formElement);