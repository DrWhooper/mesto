const buttonEdit = document.querySelector('.profile__edit-button');
const popupFrom = document.querySelectorAll('.popup')
const popupEditProfile = document.querySelector('.popup_edit_name');
const photoAddButtonCard = document.querySelector('.profile__add-button')
const popupAddPhotoCard = document.querySelector('.popup_add_photo')
const popupBtnSubmit = document.querySelector('.popup__btn');
const elementsCard = document.querySelector('.elements');
const buttonClose = document.querySelectorAll('.popup__close');
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

function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

function addLikePhoto (evt) {
  evt.target.classList.toggle('article__button-like_active');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJobs.textContent = jobInput.value;
  closePopup(popupEditProfile)
}

buttonClose.forEach(closeButton => {
  closeButton.addEventListener('click', closeButtonClick)
})

function closeButtonClick() {
  closePopup(popupAddPhotoCard)
  closePopup(popupEditProfile)
  fieldResetAddPhotoPopup.reset()
}

buttonEdit.addEventListener('click', showEditPopup);
photoAddButtonCard.addEventListener('click', () => openPopup(popupAddPhotoCard))
formCard.addEventListener('submit', handleFormSubmit);
cardInZoom.querySelector('.popup__close').addEventListener('click', () => closePopup(cardInZoom))

function removeCard() {
  cardsElem.remove()
}

const cardsTample = document.querySelector('#atricle-tamplate').content;

const cardFromCreat = (evt) => {
  evt.preventDefault()
  const cardsName = namePhoto.value;
  const cardsImg = srcPhoto.value; 
  renderCards(cardsName, cardsImg);
  closePopup(popupAddPhotoCard)
  fieldResetAddPhotoPopup.reset()
}

popupAddPhotoCard.addEventListener('submit', cardFromCreat);

const cardCreat = (cardsName, cardsImg) => {
  const cardsElem = cardsTample.querySelector('.article').cloneNode(true);
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

const mestoPage = document.querySelector('.page')

const renderCards = (cardsName, cardsImg) => {
  elementsCard.prepend(cardCreat(cardsName, cardsImg));
}

initialCards.forEach((card) => {
  const cardsName = card.name;
  const cardsImg = card.link;
  renderCards(cardsName, cardsImg)
})