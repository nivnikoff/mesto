export const popupEdit = document.querySelector('.popup_type_edit');
export const nameEditInput = popupEdit.querySelector('.popup__input-text_type_name');
export const descriptionEditInput = popupEdit.querySelector('.popup__input-text_type_description');
export const formEdit = popupEdit.querySelector('.popup__form');

export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonAvatar = document.querySelector('.profile__avatar-edit');

export const popupAdd = document.querySelector('.popup_type_add');
export const formAdd = popupAdd.querySelector('.popup__form');

export const popupAvatar = document.querySelector('.popup_type_avatar');
export const formAvatar = popupAvatar.querySelector('.popup__form');

export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input-text_error'
};

export const apiOptions = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-49',
  headers: {
    authorization: '16dadc86-51a9-479c-a538-34094c10e064',
    'Content-Type': 'application/json'
  }
};