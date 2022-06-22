let editButton = document.querySelector('.profile__edit-button');
let popupEdit = document.querySelector('.popup-edit');
let closeEditButton = document.querySelector('.popup-edit__close-button');
let formElement = document.querySelector('.popup-edit__form');
let nameInput = document.querySelector('.popup-edit__input-text_type_name');
let descriptionInput = document.querySelector('.popup-edit__input-text_type_description');
let nameProfile = document.querySelector(".profile__name");
let descriptionProfile = document.querySelector(".profile__description");
let addButton = document.querySelector('.profile__add-button');
let popupAdd = document.querySelector('.popup-add');
let closeAddButton = document.querySelector('.popup-add__close-button');

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

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  popupEdit.classList.remove('popup-edit_opened');
}

editButton.addEventListener('click', openPopupEdit);
closeEditButton.addEventListener('click', closePopupEdit);
formElement.addEventListener('submit', formSubmitHandler);
addButton.addEventListener('click', openPopupAdd);
closeAddButton.addEventListener('click', closePopupAdd);