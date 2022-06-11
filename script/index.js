let editButton = document.querySelector('.profile__edit-button');
let popupEdit = document.querySelector('.popup-edit');
let closeButton = document.querySelector('.popup-edit__close-button');
let formElement = document.querySelector('.popup-edit__form');
let nameInput = document.querySelector('.popup-edit__input-text_name');
let descriptionInput = document.querySelector('.popup-edit__input-text_description');
let nameProfile = document.querySelector(".profile__name");
let descriptionProfile = document.querySelector(".profile__description");

function openPopup() {
  nameProfile.textContent;
  descriptionProfile.textContent;
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
  popupEdit.classList.add('popup-edit_opened');
}

function closePopup() {
  popupEdit.classList.remove('popup-edit_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInput.value;
  descriptionInput.value;
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  popupEdit.classList.remove('popup-edit_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);