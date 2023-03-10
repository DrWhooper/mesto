import { openPopup } from "../utils/utils.js"

export default class Card {
  constructor(cardTemplate, namePhoto, srcPhoto, elementsCard, photoCardInZoom, titleCardInZoom, cardInZoom) {
    this._cardTemplate = cardTemplate
    this._cardsName = namePhoto
    this._cardsImg = srcPhoto
    this._elementsCard = elementsCard
    this._titleCardInZoom = titleCardInZoom
    this._photoCardInZoom = photoCardInZoom
    this._cardInZoom = cardInZoom
  }

  _getCardTemplate() {
    this._cardElem = this._cardTemplate.querySelector('.article').cloneNode(true)
    return this._cardElem
  }

  _setDeleteCard(cardElement) {
    const cardsTrash = cardElement.querySelector('.article__trash')
    cardsTrash.addEventListener('click', () => {
      cardElement.remove()
    })
  }

  _setLikeCard(cardElement) {
    const cardLike = cardElement.querySelector('.article__button-like')
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

  _setEventListeners(cardElement) {
    this._setDeleteCard(cardElement)
    this._setLikeCard(cardElement)
  }

  createCard() {
    this._elementCard =  this._getCardTemplate()
    const cardsNameElement = this._elementCard.querySelector('.article__title')
    const cardsPhotoMesto = this._elementCard.querySelector(".article__card-img");
    cardsNameElement.textContent = this._cardsName;
    cardsPhotoMesto.src = this._cardsImg;
    cardsPhotoMesto.alt = this._cardsName;
    this._setEventListeners(this._elementCard)

    cardsPhotoMesto.addEventListener("click", () => {
      this._setHandleZoomPhoto()
    });
    
    return this._elementCard;
  }
}
