const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const closeEditButton = document.querySelector('.popup-edit__close-button');
const editFormElement = document.querySelector('.popup-edit__form');
const nameEditInput = document.querySelector('.popup-edit__input-text_type_name');
const descriptionEditInput = document.querySelector('.popup-edit__input-text_type_description');
const nameProfile = document.querySelector(".profile__name");
const descriptionProfile = document.querySelector(".profile__description");

const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const closeAddButton = document.querySelector('.popup-add__close-button');
const addFormElement = document.querySelector('.popup-add__form');
const nameAddInput = document.querySelector('.popup-add__input-text_type_name');
const linkAddInput = document.querySelector('.popup-add__input-text_type_url');

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

  elementsList.prepend(elementsCard);
});

function openPopupEdit() {
  nameEditInput.value = nameProfile.textContent;
  descriptionEditInput.value = descriptionProfile.textContent;
  popupEdit.classList.add('popup-edit_opened');
}

function closePopupEdit() {
  popupEdit.classList.remove('popup-edit_opened');
}

function openPopupAdd() {
  popupAdd.classList.add('popup-add_opened');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup-add_opened');
}

function editFormSubmitHandler (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameEditInput.value;
  descriptionProfile.textContent = descriptionEditInput.value;
  popupEdit.classList.remove('popup-edit_opened');
}

function addFormSubmitHandler (evt) {
  evt.preventDefault();
  const elementsCard = elementsTemplate.querySelector('.element').cloneNode(true);

  elementsCard.querySelector('.element__name').textContent = nameAddInput.value;
  elementsCard.querySelector('.element__pic').src = linkAddInput.value;
  elementsCard.querySelector('.element__pic').alt = nameAddInput.value;

  elementsCard.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active')});

  elementsCard.querySelector('.element__delete-button').addEventListener('click', function () {
    elementsCard.remove();
  });

  elementsList.prepend(elementsCard);
  popupAdd.classList.remove('popup-add_opened');
}

editButton.addEventListener('click', openPopupEdit);
closeEditButton.addEventListener('click', closePopupEdit);
editFormElement.addEventListener('submit', editFormSubmitHandler);

addButton.addEventListener('click', openPopupAdd);
closeAddButton.addEventListener('click', closePopupAdd);
addFormElement.addEventListener('submit', addFormSubmitHandler);
