const initialCards = [
  {
    name: 'Новокосино',
    link: 'https://raw.githubusercontent.com/nivnikoff/mesto/main/images/Novokosino.jpg'
  },
  {
    name: 'Гагра',
    link: 'https://raw.githubusercontent.com/nivnikoff/mesto/main/images/Gagra.jpg'
  },
  {
    name: 'Чёрное Море',
    link: 'https://raw.githubusercontent.com/nivnikoff/mesto/main/images/BlackSea.jpg'
  },
  {
    name: 'Краснодарский Край',
    link: 'https://raw.githubusercontent.com/nivnikoff/mesto/main/images/KrasnodarskiyKray.jpg'
  },
  {
    name: 'Адыгея',
    link: 'https://raw.githubusercontent.com/nivnikoff/mesto/main/images/Adigeya.jpg'
  },
  {
    name: 'Приокские Зори',
    link: 'https://raw.githubusercontent.com/nivnikoff/mesto/main/images/PriokskieZori.jpg'
  }
];

const elementsTemplate = document.querySelector('#element-template').content;
const elementsList = document.querySelector('.elements');

const popupImg = document.querySelector('.popup_type_img');
const popupImgPic = popupImg.querySelector('.popup__image');
const popupImgPlace = popupImg.querySelector('.popup__place');

const popupEdit = document.querySelector('.popup_type_edit');
const nameEditInput = popupEdit.querySelector('.popup__input-text_type_name');
const descriptionEditInput = popupEdit.querySelector('.popup__input-text_type_description');
const editForm = popupEdit.querySelector('.popup__form');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const nameProfile = document.querySelector(".profile__name");
const descriptionProfile = document.querySelector(".profile__description");

const popupAdd = document.querySelector('.popup_type_add');
const addForm = popupAdd.querySelector('.popup__form');
const inputPlace = popupAdd.querySelector('.popup__input-text_type_place');
const inputLink = popupAdd.querySelector('.popup__input-text_type_link');
const addSubmitButton = popupAdd.querySelector('.popup__submit-button');

const setPopupOpen = (popupElement) => {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

const setPopupClose = (popupElement) => {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

const createCard = (data) => {
  const card = elementsTemplate.querySelector('.element').cloneNode(true);
  const cardName = card.querySelector('.element__name');
  const cardPic = card.querySelector('.element__pic');
  const cardLikeButton = card.querySelector('.element__like-button');
  const cardDeleteButton = card.querySelector('.element__delete-button');

  cardName.textContent = data.name;
  cardPic.src = data.link;
  cardPic.alt = data.name;

  cardLikeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active')
  });

  cardDeleteButton.addEventListener('click', function () {
    card.remove()
  });

  cardPic.addEventListener('click', function () {
    popupImgPic.src = data.link;
    popupImgPic.alt = data.name;
    popupImgPlace.textContent = data.name;
    setPopupOpen(popupImg);
  });

  return card;
};

const renderCard = (card) => {
  elementsList.prepend(card);
};

const renderInitialCards = () => {
  initialCards.forEach(function (data) {
    const cardNode = createCard(data);
    renderCard(cardNode);
  });
};

window.onload = renderInitialCards;

const editFormSubmitHandler = (evt) => {
  evt.preventDefault();
  nameProfile.textContent = nameEditInput.value;
  descriptionProfile.textContent = descriptionEditInput.value;
  setPopupClose(popupEdit);
}

const addFormSubmitHandler = (evt) => {
  evt.preventDefault();
  const newCardData = {
    name: inputPlace.value,
    link: inputLink.value
  };
  const newCardNode = createCard(newCardData);
  renderCard(newCardNode);
  setPopupClose(popupAdd);
  addForm.reset();
  addSubmitButton.setAttribute('disabled', 'disabled');
  addSubmitButton.classList.add('popup__submit-button_disabled');
};

editButton.addEventListener('click', () => {
  nameEditInput.value = nameProfile.textContent;
  descriptionEditInput.value = descriptionProfile.textContent;
  setPopupOpen(popupEdit);
});
editForm.addEventListener('submit', editFormSubmitHandler);

addButton.addEventListener('click', () => setPopupOpen(popupAdd));
addForm.addEventListener('submit', addFormSubmitHandler);

document.addEventListener('mousedown', (evt) => {
  if ((evt.target.classList.contains('popup__overlay')) || (evt.target.classList.contains('popup__close-button'))){
    const closestPopup = evt.target.closest('.popup');
    if (closestPopup.classList.contains('popup_type_edit')) {
      setPopupClose(popupEdit);
    };
    if (closestPopup.classList.contains('popup_type_add')) {
      setPopupClose(popupAdd);
    };
    if (closestPopup.classList.contains('popup_type_img')) {
      setPopupClose(popupImg);
    };
  }
});

const closeByEscape = (evt) => {
  if (evt.key === 'Escape'){
    const closingPopup = document.querySelector('.popup_opened');
    if (closingPopup) {
    setPopupClose(closingPopup);
  };
  }
};