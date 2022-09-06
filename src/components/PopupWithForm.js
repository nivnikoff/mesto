import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }, formSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector(formSelector);
    this._inputList = this._formElement.querySelectorAll(".popup__input-text");
    this._buttonSubmit = this._formElement.querySelector('.popup__submit-button');
    this._buttonSubmitText = this._buttonSubmit.textContent;
  }
  _getInputValues() {
    this._inputsValues = {};
    this._inputList.forEach((input) => {
      this._inputsValues[input.name] = input.value;
    });
    return this._inputsValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
  close() {
    super.close();
    this._formElement.reset();
  }
  renderLoading(isLoading) {
    if (isLoading) {
      this._buttonSubmit.textContent = 'Сохранение...';
    } else {
      this._buttonSubmit.textContent = this._buttonSubmitText;
    }
  }
}