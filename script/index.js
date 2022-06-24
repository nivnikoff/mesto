const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const closeEditButton = popupEdit.querySelector('.popup__close-button');
const editFormElement = popupEdit.querySelector('.popup__form');
const nameEditInput = popupEdit.querySelector('.popup__input-text_type_name');
const descriptionEditInput = popupEdit.querySelector('.popup__input-text_type_description');
const nameProfile = document.querySelector(".profile__name");
const descriptionProfile = document.querySelector(".profile__description");

const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
const closeAddButton = popupAdd.querySelector('.popup__close-button');
const addFormElement = popupAdd.querySelector('.popup__form');
const placeAddInput = popupAdd.querySelector('.popup__input-text_type_place');
const linkAddInput = popupAdd.querySelector('.popup__input-text_type_link');

const popupImg = document.querySelector('.popup_type_img');
const closeImgButton = popupImg.querySelector('.popup__close-button');
const popupImgPic = popupImg.querySelector('.popup__image');
const popupImgName = popupImg.querySelector('.popup__place');

const elementsTemplate = document.querySelector('#element-template').content;
const elementsList = document.querySelector('.elements');

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

window.onload = initialCards.forEach(function (element) {
  const elementsCard = elementsTemplate.querySelector('.element').cloneNode(true);

  elementsCard.querySelector('.element__name').textContent = element.name;
  elementsCard.querySelector('.element__pic').src = element.link;
  elementsCard.querySelector('.element__pic').alt = element.name;

  elementsCard.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active')
  });

  elementsCard.querySelector('.element__delete-button').addEventListener('click', function () {
    elementsCard.remove();
  });

  elementsCard.querySelector('.element__pic').addEventListener('click', function () {
    popupImgPic.src = elementsCard.querySelector('.element__pic').src
    popupImgPic.alt = elementsCard.querySelector('.element__pic').alt
    popupImgName.textContent = elementsCard.querySelector('.element__name').textContent
    popupImg.classList.add('popup_opened');
  });

  elementsList.prepend(elementsCard);
});

function openPopupEdit() {
  nameEditInput.value = nameProfile.textContent;
  descriptionEditInput.value = descriptionProfile.textContent;
  popupEdit.classList.add('popup_opened');
}

function closePopupEdit() {
  popupEdit.classList.remove('popup_opened');
}

function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}

function closePopupImg() {
  popupImg.classList.remove('popup_opened');
}

function editFormSubmitHandler (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameEditInput.value;
  descriptionProfile.textContent = descriptionEditInput.value;
  popupEdit.classList.remove('popup_opened');
}

function addFormSubmitHandler (evt) {
  evt.preventDefault();
  const elementsCard = elementsTemplate.querySelector('.element').cloneNode(true);

  elementsCard.querySelector('.element__name').textContent = placeAddInput.value;
  elementsCard.querySelector('.element__pic').src = linkAddInput.value;
  elementsCard.querySelector('.element__pic').alt = placeAddInput.value;

  elementsCard.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active')
  });

  elementsCard.querySelector('.element__delete-button').addEventListener('click', function () {
    elementsCard.remove();
  });

  elementsCard.querySelector('.element__pic').addEventListener('click', function () {
    popupImgPic.src = elementsCard.querySelector('.element__pic').src
    popupImgPic.alt = elementsCard.querySelector('.element__pic').alt
    popupImgName.textContent = elementsCard.querySelector('.element__name').textContent
    popupImg.classList.add('popup_opened');
  });

  elementsList.prepend(elementsCard);
  popupAdd.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopupEdit);
closeEditButton.addEventListener('click', closePopupEdit);
editFormElement.addEventListener('submit', editFormSubmitHandler);

addButton.addEventListener('click', openPopupAdd);
closeAddButton.addEventListener('click', closePopupAdd);
addFormElement.addEventListener('submit', addFormSubmitHandler);

closeImgButton.addEventListener('click', closePopupImg);
