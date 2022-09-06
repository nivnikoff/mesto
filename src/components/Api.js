export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }
  _checkServerResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then((res) => this._checkServerResponse(res))
  }
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then((res) => this._checkServerResponse(res))
  }
  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then((res) => this._checkServerResponse(res));
  }
  newCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then((res) => this._checkServerResponse(res));
  }
  deleteCard(cardID) {
    return fetch(`${this._url}/cards/${cardID}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => this._checkServerResponse(res));
  }
  addLike(cardID) {
    return fetch(`${this._url}/cards/${cardID}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then((res) => this._checkServerResponse(res));
  }
  removeLike(cardID) {
    return fetch(`${this._url}/cards/${cardID}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => this._checkServerResponse(res));
  }
  editAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then((res) => this._checkServerResponse(res));
  }
}