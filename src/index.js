import './pages/index.css';
import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';
import {
  initialCards,
  popupImgPic,
  popupImgPlace,
  nameEditInput,
  descriptionEditInput,
  buttonEdit,
  buttonAdd,
  nameProfile,
  descriptionProfile,
  settings
} from './scripts/utils.js';

// Валидация форм

const formList = Array.from(document.querySelectorAll(settings.formSelector)).forEach((formElement) => {
  const validatedForm = new FormValidator (settings, formElement);
  validatedForm.enableValidation();
  return validatedForm;
});

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
    console.log(card)
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
  nameEditInput.value = nameProfile.textContent;
  descriptionEditInput.value = descriptionProfile.textContent;
  popupEditUserInfo.open();
});

buttonAdd.addEventListener('click', () => {
  popupAddCard.open();
});