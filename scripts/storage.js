"use strict";
const KEYS = {
  USER: "user",
};

const getFromStore = (key) => {
  const strValue = localStorage.getItem(key);
  if (strValue) {
    return JSON.parse(strValue);
  }
  return [];
};

const saveToStore = (key, val) => {
  const jsonValue = JSON.stringify(val);

  localStorage.setItem(key, jsonValue);
};
