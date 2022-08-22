import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  popupImgPic,
  popupImgPlace,
  nameEditInput,
  descriptionEditInput,
  formEdit,
  buttonEdit,
  buttonAdd,
  formAdd,
  settings
} from '../utils/constants.js';

// Валидация форм

const validatedEditForm = new FormValidator (settings, formEdit);
validatedEditForm.enableValidation();
const validatedAddForm = new FormValidator (settings, formAdd);
validatedAddForm.enableValidation();

// Экземпляр персональной информации

const userInfo = new UserInfo ('.profile__name', '.profile__description')

// Экземплры попапов

const popupWithImage = new PopupWithImage ('.popup_type_img', popupImgPic, popupImgPlace);
popupWithImage.setEventListeners();

const popupEditUserInfo = new PopupWithForm ('.popup_type_edit', 
  {
    handleFormSubmit: (data) => {
      userInfo.setUserInfo(data)
    }
  }, 
'.popup__form'
);
popupEditUserInfo.setEventListeners();

const popupAddCard = new PopupWithForm ('.popup_type_add', 
  {
    handleFormSubmit: (card) => {
    сardsList.addItem(createCardInstance(card));
  }
  }, 
'.popup__form'
);
popupAddCard.setEventListeners();

// Создание карточек

const createCardInstance = ({place, link}) => {
  const cardInstance = new Card (
    {
      place,
      link,
      handleCardClick: () => {
        popupWithImage.open(place, link);
      },
    },
    '#element-template'
  );
  const cardInstanceElement = cardInstance.generateCard();
  return cardInstanceElement;
}

const сardsList = new Section (
  {
    items: initialCards,
    renderer: (card) => {
    сardsList.addItem(createCardInstance(card));
    }
  },
  '.elements'
);

const renderInitialCards = () => {
  сardsList.renderItems();
};

window.onload = renderInitialCards;

// Слушатели кнопок

buttonEdit.addEventListener('click', () => {
  validatedEditForm.hideInputErrorMessages();
  const {name, description} = userInfo.getUserInfo();
  nameEditInput.value = name;
  descriptionEditInput.value = description;
  popupEditUserInfo.open();
});

buttonAdd.addEventListener('click', () => {
  validatedAddForm.hideInputErrorMessages();
  validatedAddForm.toggleButtonState();
  popupAddCard.open();
});