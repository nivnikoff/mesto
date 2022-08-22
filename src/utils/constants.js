export const initialCards = [
    {
      place: 'Новокосино',
      link: 'https://raw.githubusercontent.com/nivnikoff/mesto/main/src/images/Novokosino.jpg'
    },
    {
      place: 'Гагра',
      link: 'https://raw.githubusercontent.com/nivnikoff/mesto/main/src/images/Gagra.jpg'
    },
    {
      place: 'Чёрное Море',
      link: 'https://raw.githubusercontent.com/nivnikoff/mesto/main/src/images/BlackSea.jpg'
    },
    {
      place: 'Краснодарский Край',
      link: 'https://raw.githubusercontent.com/nivnikoff/mesto/main/src/images/KrasnodarskiyKray.jpg'
    },
    {
      place: 'Адыгея',
      link: 'https://raw.githubusercontent.com/nivnikoff/mesto/main/src/images/Adigeya.jpg'
    },
    {
      place: 'Приокские Зори',
      link: 'https://raw.githubusercontent.com/nivnikoff/mesto/main/src/images/PriokskieZori.jpg'
    }
  ];

export const popupImgPic = document.querySelector('.popup__image');
export const popupImgPlace = document.querySelector('.popup__place');

export const popupEdit = document.querySelector('.popup_type_edit');
export const nameEditInput = popupEdit.querySelector('.popup__input-text_type_name');
export const descriptionEditInput = popupEdit.querySelector('.popup__input-text_type_description');
export const formEdit = popupEdit.querySelector('.popup__form');

export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const nameProfile = document.querySelector(".profile__name");
export const descriptionProfile = document.querySelector(".profile__description");

export const popupAdd = document.querySelector('.popup_type_add');
export const formAdd = popupAdd.querySelector('.popup__form');
export const inputPlace = popupAdd.querySelector('.popup__input-text_type_place');
export const inputLink = popupAdd.querySelector('.popup__input-text_type_link');
export const buttonAddSubmit = popupAdd.querySelector('.popup__submit-button');

export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input-text_error'
};