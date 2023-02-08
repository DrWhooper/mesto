let editButton = document.querySelector('.profile__edit-button');
let popupFrom = document.querySelectorAll('.popup')
let popupOpen = document.querySelector('.popup_edit_name');
let addPhotoButton = document.querySelector('.profile__add-button')
let popupAddPhoto = document.querySelector('.popup_add_photo')
let popupBtn = document.querySelector('.popup__btn');
let elementsCard = document.querySelector('.elements');
let closeBtn = document.querySelectorAll('.popup__close');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_user_name');
let jobInput = formElement.querySelector('.popup__input_user_jobs');

let namePhoto = popupAddPhoto.querySelector('.popup__input_card_name')
let srcPhoto = popupAddPhoto.querySelector('.popup__input_card_img')

let profileName = document.querySelector('.profile__name');
let profileJobs = document.querySelector('.profile__jobs');

function popupShow() {
  popupOpen.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJobs.textContent;
}

function popupAdd() {
  popupAddPhoto.classList.add('popup_opened');
}

function popupClose() {
  popupOpen.classList.remove('popup_opened');
}

function popupAddClose() {
  popupAddPhoto.classList.remove('popup_opened')
}

function likeAdd (evt) {
  evt.target.classList.toggle('article__button-like_active');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJobs.textContent = jobInput.value;
  popupClose()
}

closeBtn.forEach(closeButton => {
  closeButton.addEventListener('click', closeButtonClick)
})

function closeButtonClick() {
  popupAddPhoto.classList.remove('popup_opened');
  popupClose()
}

editButton.addEventListener('click', popupShow);
addPhotoButton.addEventListener('click', popupAdd)
formElement.addEventListener('submit', handleFormSubmit);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function cardRemove() {
  cardsElem.remove()
}

const cardsTample = document.querySelector('#atricle-tamplate').content;

const cardFromCreat = (evt) => {
  evt.preventDefault()
  const cardsName = namePhoto.value;
  const cardsImg = srcPhoto.value; 
  renderCards(cardsName, cardsImg);
  popupAddClose()
  namePhoto.value = ''
  srcPhoto.value = ''
}

popupAddPhoto.addEventListener('submit', cardFromCreat);

const cardCreat = (cardsName, cardsImg) => {
  const cardsElem = cardsTample.querySelector('.article').cloneNode(true);
  const cardsNameElement = cardsElem.querySelector('.article__title')
  const cardsPhotoMesto = cardsElem.querySelector('.article__card-img');
  cardsNameElement.textContent = cardsName;
  cardsPhotoMesto.src = cardsImg;

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

  return cardsElem;
}

const mestoPage = document.querySelector('.page')

const renderCards = (cardsName, cardsImg) => {
  elementsCard.prepend(cardCreat(cardsName, cardsImg));
  
  // маштабированик фото 
  
  const cardsElem = document.querySelector('.article');
  const cardsPhoto = cardsElem.querySelectorAll('.article__card-img');
  cardsPhoto.forEach((photoCard) => {
    photoCard.addEventListener('click', zoomInPhoto)
  })

  function zoomInPhoto() {
    const photoCard = document.querySelector('.popup_img_zoom');
    photoCard.querySelector('.popup__img').src = cardsImg
    photoCard.querySelector('.popup__title-img').textContent = cardsName
    photoCard.classList.add('popup_opened')
    photoCard.querySelector('.popup__close').addEventListener('click', () => {
      photoCard.classList.remove('popup_opened')
    })
  }
}

initialCards.forEach((card) => {
  const cardsName = card.name;
  const cardsImg = card.link;
  renderCards(cardsName, cardsImg)
})