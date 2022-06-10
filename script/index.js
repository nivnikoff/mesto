let editButton = document.querySelector('.profile__edit-button');
let popupEdit = document.querySelector('.popup-edit');
let closeButton = document.querySelector('.popup-edit__close-button');

function openPopup() {
  popupEdit.classList.add('popup-edit_opened');
}

function closePopup() {
  popupEdit.classList.remove('popup-edit_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup-edit__form');
let nameInput = document.querySelector('.popup-edit__name');
let descriptionInput = document.querySelector('.popup-edit__description');
let nameProfile = document.querySelector(".profile__name");
let descriptionProfile = document.querySelector(".profile__description");

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInput.value;
  descriptionInput.value;
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  popupEdit.classList.remove('popup-edit_opened');
}

formElement.addEventListener('submit', formSubmitHandler);