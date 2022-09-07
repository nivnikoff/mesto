export default class Card {
  constructor({ data, handleCardClick, handleLikeClick, handleDeleteClick }, userId, cardSelector) {
    this._likes = data.likes;
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._owner = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._userId = userId;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(true);
    return cardElement;
  }
  generateCard () {
    this._card = this._getTemplate();
    this._card.querySelector('.element__place').textContent = this._name;
    this._cardPic = this._card.querySelector('.element__pic');
    this._cardPic.src = this._link;
    this._cardPic.alt = this._name;
    this._counterLike = this._card.querySelector('.element__like-counter');
    this._buttonLike = this._card.querySelector('.element__like-button');
    this._buttonDelete = this._card.querySelector('.element__delete-button');
    this.countLike(this._likes);
    this._removeButtonDelete();
    this._setEventListeners();
    return this._card;
  }
  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._buttonDelete.addEventListener('click', () => {
      this._handleDeleteClick();
    });
    this._cardPic.addEventListener('click', () => {
      this._handleCardClick();
    });
  }
  addLike() {
    this._buttonLike.classList.add('element__like-button_active');
  }
  removeLike() {
    this._buttonLike.classList.remove('element__like-button_active');
  }
  countLike(data) {
    this._likes = data;
    this._counterLike.textContent = this._likes.length;
    if (this.isLiked()) {
      this.addLike()
    } else {
      this.removeLike()
    }
  }
  isLiked() {
    return this._likes.find(user => user._id === this._userId);
  }
  _removeButtonDelete() {
    if (this._owner !== this._userId) {
      this._buttonDelete.remove();
    }
  }
  deleteCard() {
    this._card.remove();
  }
}