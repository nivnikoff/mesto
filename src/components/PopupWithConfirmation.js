import Popup from './Popup.js';
export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, { handleSubmit }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }
  submitCardDelete(cardId, cardElement) {
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(cardId, cardElement);
      this.close();
    });
  }
}