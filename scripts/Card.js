import {openPopup} from "./index.js"

export default class Card {
  constructor(cardTemplate, namePhoto, srcPhoto, elementsCard, photoCardInZoom, titleCardInZoom, cardInZoom) {
    this._cardElem = cardTemplate.querySelector('.article').cloneNode(true)
    this._cardsName = namePhoto
    this._cardsImg = srcPhoto
    this._elementsCard = elementsCard
    this._titleCardInZoom = titleCardInZoom
    this._photoCardInZoom = photoCardInZoom
    this._cardInZoom = cardInZoom
  }

  _setDeleteCard() {
    const cardsTrash = this._cardElem.querySelector('.article__trash')
    cardsTrash.addEventListener('click', () => {
      this._cardElem.remove()
    })
  }

  _setLikeCard() {
    const cardLike = this._cardElem.querySelector('.article__button-like')
    cardLike.addEventListener('click', () => {
      cardLike.classList.toggle('article__button-like_active')
    })
  }

  _setHandleZoomPhoto() {
    this._photoCardInZoom.src = this._cardsImg
    this._titleCardInZoom.textContent = this._cardsName
    this._photoCardInZoom.alt = this._cardsName;
    openPopup(this._cardInZoom)
  }

  createCard() {
    const cardsNameElement = this._cardElem.querySelector('.article__title')
    const cardsPhotoMesto = this._cardElem.querySelector(".article__card-img");
    cardsNameElement.textContent = this._cardsName;
    cardsPhotoMesto.src = this._cardsImg;
    cardsPhotoMesto.alt = this._cardsName;
    this._setDeleteCard()
    this._setLikeCard()

    cardsPhotoMesto.addEventListener("click", () => {
      this._setHandleZoomPhoto()
    });
    
    return this._cardElem;
  }
}
