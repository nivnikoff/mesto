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
const closeImgButton = popupImg.querySelector('.popup__close-button');
const popupImgPic = popupImg.querySelector('.popup__image');
const popupImgPlace = popupImg.querySelector('.popup__place');

const popupEdit = document.querySelector('.popup_type_edit');
const closeEditButton = popupEdit.querySelector('.popup__close-button');
const nameEditInput = popupEdit.querySelector('.popup__input-text_type_name');
const descriptionEditInput = popupEdit.querySelector('.popup__input-text_type_description');
const editFormElement = popupEdit.querySelector('.popup__form');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const nameProfile = document.querySelector(".profile__name");
const descriptionProfile = document.querySelector(".profile__description");

const popupAdd = document.querySelector('.popup_type_add');
const closeAddButton = popupAdd.querySelector('.popup__close-button');
const addFormElement = popupAdd.querySelector('.popup__form');

const setPopupOpen = (popupElement) => {
  popupElement.classList.add('popup_opened');
};

const setPopupClose = (popupElement) => {
  popupElement.classList.remove('popup_opened');
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
    popupImgPic.src = cardPic.src;
    popupImgPic.alt = cardPic.alt;
    popupImgPlace.textContent = cardName.textContent;
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
  const inputPlace = popupAdd.querySelector('.popup__input-text_type_place');
  const inputLink = popupAdd.querySelector('.popup__input-text_type_link');
  const newCardData = {
    name: inputPlace.value,
    link: inputLink.value
  };
  const newCardNode = createCard(newCardData);
  renderCard(newCardNode);
  setPopupClose(popupAdd);
};

editButton.addEventListener('click', () => {
  nameEditInput.value = nameProfile.textContent;
  descriptionEditInput.value = descriptionProfile.textContent;
  setPopupOpen(popupEdit);
});
editFormElement.addEventListener('submit', editFormSubmitHandler);
closeEditButton.addEventListener('click', () => setPopupClose(popupEdit));

addButton.addEventListener('click', () => setPopupOpen(popupAdd));
addFormElement.addEventListener('submit', addFormSubmitHandler);
closeAddButton.addEventListener('click', () => setPopupClose(popupAdd));

closeImgButton.addEventListener('click', () => setPopupClose(popupImg));