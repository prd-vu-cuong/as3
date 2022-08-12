"use strict";

const firstName = document.getElementById("input-firstname");
const lastName = document.getElementById("input-lastname");
const userName = document.getElementById("input-username");
const password = document.getElementById("input-password");
const confirmPassword = document.getElementById("input-password-confirm");

const btnSubmit = document.getElementById("btn-submit");

const users = getFromStore(KEYS.USER);

const isValidUser = (user) => {
  const isInputHasValue = [...document.querySelectorAll("input")].every(
    (input) => input.value.length
  );

  const isUniqUsername = !users.find(
    (storeUser) => storeUser.userName !== user.userName
  );

  const password = user.password;

  return (
    isInputHasValue && isUniqUsername && password === confirmPassword.value
  );
};

const onSaveUser = () => {
  const user = new User(
    firstName.value,
    lastName.value,
    userName.value,
    password.value
  );
  if (isValidUser(user)) {
    users.push(user);
    saveToStore(KEYS.USER, users);
    alert("Dang ky thanh cong");
  } else {
    alert("Du lieu sai. Kiem tra lai du lieu");
  }
};

btnSubmit.addEventListener("click", onSaveUser);
