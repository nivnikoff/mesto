export default class UserInfo {
  constructor(profileName, profileDescription, profileAvatar) {
    this._profileName = document.querySelector(profileName);
    this._profileDescription = document.querySelector(profileDescription);
    this._profileAvatar = document.querySelector(profileAvatar);
  }
  getUserInfo() {
    const userInfo = {};
    userInfo.name = this._profileName.textContent;
    userInfo.description = this._profileDescription.textContent;
    return userInfo;
  }
  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileDescription.textContent = data.about;
  }
  setUserAvatar(data) {
    this._profileAvatar.src = data.avatar;
  }
}