import './index.css';
import Api from '../components/Api';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'
import UserInfo from '../components/UserInfo.js';
import {
  popupImgPic,
  popupImgPlace,
  nameEditInput,
  descriptionEditInput,
  formEdit,
  buttonEdit,
  buttonAdd,
  buttonAvatar,
  formAdd,
  formAvatar,
  settings,
  apiOptions
} from '../utils/constants.js';

// Валидация форм

const validatedEditForm = new FormValidator (settings, formEdit);
validatedEditForm.enableValidation();
const validatedAddForm = new FormValidator (settings, formAdd);
validatedAddForm.enableValidation();
const validatedAvatarForm = new FormValidator (settings, formAvatar);
validatedAvatarForm.enableValidation();

// Экземпляр api

const api = new Api(apiOptions);

// Экземпляр персональной информации

const userInfo = new UserInfo ('.profile__name', '.profile__description', '.profile__avatar')

// Экземплры попапов

const popupWithImage = new PopupWithImage ('.popup_type_img', popupImgPic, popupImgPlace);
popupWithImage.setEventListeners();

const popupEditUserInfo = new PopupWithForm (
  '.popup_type_edit', 
  {
    handleFormSubmit: (data) => {
      popupEditUserInfo.renderLoading(true);
      api.editUserInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupEditUserInfo.close();
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, 
'.popup__form'
);
popupEditUserInfo.setEventListeners();

const popupAddCard = new PopupWithForm (
  '.popup_type_add', 
  {
    handleFormSubmit: (data) => {
      popupAddCard.renderLoading(true);
      api.newCard(data)
      .then((data) => {
        сardsList.addItem(createCard(data));
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, 
'.popup__form'
);
popupAddCard.setEventListeners();

const popupEditAvatar = new PopupWithForm (
  '.popup_type_avatar',
  {
    handleFormSubmit: (data) => {
      popupEditUserInfo.renderLoading(true);
      api.editAvatar(data)
      .then((res) => {
        userInfo.setUserAvatar(res);
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },
'.popup__form'  
);
popupEditAvatar.setEventListeners();

// const popupConfirm = new PopupWithConfirmation (
//   '.popup_type_confirm',
//   {
//     handleFormSubmit: () => {}
//   },
// '.popup__form'  
// );
// popupEditAvatar.setEventListeners();

// Наполнение страницы

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    console.log(userData);
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);

    console.log(initialCards);
    сardsList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  })

const createCard = (data) => {
  const cardInstance = new Card (
    {
      data,
      handleCardClick: () => {
        popupWithImage.open(data.name, data.link);
      },
    },
    '#element-template'
  );
  const cardInstanceElement = cardInstance.generateCard();
  return cardInstanceElement;
}

const сardsList = new Section (
  {
    items: [],
    renderer: (card) => {
    сardsList.addItem(createCard(card));
    }
  },
  '.elements'
);

// Слушатели кнопок

buttonEdit.addEventListener('click', () => {
  validatedEditForm.hideInputErrorMessages();
  const {name, info} = userInfo.getUserInfo();
  nameEditInput.value = name;
  descriptionEditInput.value = info;
  popupEditUserInfo.open();
});

buttonAdd.addEventListener('click', () => {
  validatedAddForm.hideInputErrorMessages();
  validatedAddForm.toggleButtonState();
  popupAddCard.open();
});

buttonAvatar.addEventListener('click', () => {
  validatedAvatarForm.hideInputErrorMessages();
  validatedAvatarForm.toggleButtonState();
  popupEditAvatar.open();
})