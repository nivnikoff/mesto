import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector, pictureSelector, placeSelector) {
    super(popupSelector);
    this._popupImgPic = this._popup.querySelector(pictureSelector);
    this._popupImgPlace = this._popup.querySelector(placeSelector);
  }
  open(name, link) {
    this._popupImgPic.src = link;
    this._popupImgPic.alt = name;
    this._popupImgPlace.textContent = name;
    super.open();
  }
}