import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector, picture, place) {
    super(popupSelector);
    this._popupImgPic = picture;
    this._popupImgPlace = place;
  }
  open(name, link) {
    this._popupImgPic.src = link;
    this._popupImgPic.alt = name;
    this._popupImgPlace.textContent = name;
    super.open();
  }
}