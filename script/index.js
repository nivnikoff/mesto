const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const closeEditButton = document.querySelector('.popup-edit__close-button');
const formElement = document.querySelector('.popup-edit__form');
const nameInput = document.querySelector('.popup-edit__input-text_type_name');
const descriptionInput = document.querySelector('.popup-edit__input-text_type_description');
const nameProfile = document.querySelector(".profile__name");
const descriptionProfile = document.querySelector(".profile__description");
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const closeAddButton = document.querySelector('.popup-add__close-button');
const likeButton = document.querySelector('.element__like-button');
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

function openPopupEdit() {
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
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
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  popupEdit.classList.remove('popup-edit_opened');
}

window.onload = initialCards.forEach(function (element) {
  const elementsCard = elementsTemplate.cloneNode(true);

  elementsCard.querySelector('.element__name').textContent = element.name;
  elementsCard.querySelector('.element__pic').src = element.link;
  elementsCard.querySelector('.element__pic').alt = element.name;

  elementsCard.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active')});

  elementsList.prepend(elementsCard);
});

// function addElement (element) { 
  
  // elementsCard = elementsTemplate.cloneNode(true);

  // elementsCard.querySelector('.element__name').textContent = element.name;
  // elementsCard.querySelector('.element__pic').src = element.link;
  // elementsCard.querySelector('.element__pic').alt = element.name;

  // elementsList.prepend(elementsCard);
// }

editButton.addEventListener('click', openPopupEdit);
closeEditButton.addEventListener('click', closePopupEdit);
formElement.addEventListener('submit', editFormSubmitHandler);

addButton.addEventListener('click', openPopupAdd);
closeAddButton.addEventListener('click', closePopupAdd);

