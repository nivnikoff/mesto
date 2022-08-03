import { popupImg, popupImgPic, popupImgPlace, setPopupOpen } from './index.js';
export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(true);
    return cardElement;
  }
  generateCard () {
    this._card = this._getTemplate();
    this._card.querySelector('.element__name').textContent = this._name;
    this._cardPic = this._card.querySelector('.element__pic');
    this._cardPic.src = this._link;
    this._cardPic.alt = this._name;
    this._setEventListeners();
    return this._card;
  }
  _setEventListeners() {
    this._card.querySelector('.element__like-button').addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like-button_active')
    });
    this._card.querySelector('.element__delete-button').addEventListener('click', () => {
        this._card.remove()
    });
    this._cardPic.addEventListener('click', () => {
      popupImgPic.src = this._link;
      popupImgPic.alt = this._name;
      popupImgPlace.textContent = this._name;
      setPopupOpen(popupImg);
    });
  }
}