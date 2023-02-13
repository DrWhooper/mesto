const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const popupFrom = document.querySelectorAll('.popup')
const popupEditProfile = document.querySelector('.popup_edit_name');
const photoAddButtonCard = document.querySelector('.profile__add-button')
const popupAddPhotoCard = document.querySelector('.popup_add_photo')
const popupBtnSubmit = document.querySelector('.popup__btn');
const elementsCard = document.querySelector('.elements');
const buttonsClosePopup = document.querySelectorAll('.popup__close');
const formCard = document.querySelector('.popup__form');
const fieldResetAddPhotoPopup = document.querySelector('.popup__form_clear_field')
const nameInput = formCard.querySelector('.popup__input_user_name');
const jobInput = formCard.querySelector('.popup__input_user_jobs');
const namePhoto = popupAddPhotoCard.querySelector('.popup__input_card_name')
const srcPhoto = popupAddPhotoCard.querySelector('.popup__input_card_img')
const profileName = document.querySelector('.profile__name');
const profileJobs = document.querySelector('.profile__jobs');
const cardInZoom = document.querySelector('.popup_img_zoom');
const photoCardInZoom = cardInZoom.querySelector('.popup__img');
const titleCardInZoom = cardInZoom.querySelector('.popup__title-img');

function showEditPopup() {
  openPopup(popupEditProfile)
  nameInput.value = profileName.textContent;
  jobInput.value = profileJobs.textContent;
}

function showAddPhotoPopup() {
  openPopup(popupAddPhotoCard);
  fieldResetAddPhotoPopup.reset();
}

function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJobs.textContent = jobInput.value;
  closePopup(popupEditProfile)
}


buttonsClosePopup.forEach(closeButton => {
  closeButton.addEventListener('click', closeButtonClick)
})

function closeButtonClick(evt) {
  const evtTarget = evt.target.closest('.popup')
  closePopup(evtTarget)
}

buttonOpenEditProfilePopup.addEventListener('click', showEditPopup);
photoAddButtonCard.addEventListener('click', showAddPhotoPopup)
formCard.addEventListener('submit', submitEditProfileForm);


const cardTemplate = document.querySelector('#atricle-tamplate').content;

const submitAddCardForm = (evt) => {
  evt.preventDefault()
  const cardsName = namePhoto.value;
  const cardsImg = srcPhoto.value; 
  renderCards(cardsName, cardsImg);
  closePopup(popupAddPhotoCard)
}

popupAddPhotoCard.addEventListener('submit', submitAddCardForm);

const createCard = (cardsName, cardsImg) => {
  const cardsElem = cardTemplate.querySelector('.article').cloneNode(true);
  const cardsNameElement = cardsElem.querySelector('.article__title')
  const cardsPhotoMesto = cardsElem.querySelector('.article__card-img');
  cardsNameElement.textContent = cardsName;
  cardsPhotoMesto.src = cardsImg;
  cardsPhotoMesto.alt = cardsName;
  
  //Удаление элемента 
  const cardsTrash = cardsElem.querySelector('.article__trash')
  cardsTrash.addEventListener('click', () => {
    cardsElem.remove()
  })

  //Лайки 
  const cardLike = cardsElem.querySelector('.article__button-like')
  cardLike.addEventListener('click', () => {
    cardLike.classList.toggle('article__button-like_active')
  })

  //Увеличение фото 
  const cardsPhoto = cardsElem.querySelectorAll('.article__card-img');
  cardsPhoto.forEach((photoCard) => {
    photoCard.addEventListener('click', zoomInPhoto)
  })
  
  function zoomInPhoto() {
    photoCardInZoom.src = cardsImg
    titleCardInZoom.textContent = cardsName
    photoCardInZoom.alt = cardsName;
    openPopup(cardInZoom)
  }
  
  return cardsElem;   
}

const renderCards = (cardsName, cardsImg) => {
  elementsCard.prepend(createCard(cardsName, cardsImg));
}

initialCards.forEach((card) => {
  const cardsName = card.name;
  const cardsImg = card.link;
  renderCards(cardsName, cardsImg)
})