'use strict';

const internals = {};

exports.oneMinute = 60000;
exports.fifteenMinutes = 900000;
exports.oneHour = 3600000;
exports.oneDay = 86400000;
exports.oneYear = 31556900000;

// encode(decode) html text into html entity
exports.decodeHtmlEntity = function (str) {
  const str1 = str.replace('&amp;', '&');
  return str1.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
};

exports.encodeHtmlEntity = function (str) {
  const buf = [];
  for (let i = str.length - 1; i >= 0; i--) {
    buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
  }
  return buf.join('');
};

exports.pad = internals.pad = function (number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
};

exports.castToJSON = function (object) {
  return JSON.parse(JSON.stringify(object));
};

exports.isNormalInteger = function (str) {
  const n = ~~Number(str);
  return String(n) === str && n >= 0;
};

exports.validateEmail = function (email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// create random string
// examples:
//  console.info(randomString(16, 'aA'));  --> will use only alpha (lowercase and uppercase)
//  console.info(randomString(32, '#aA')); --> will use alpha and numbers.
//  console.info(randomString(64, '#A!')); --> will use alpha, numbers and special characters
exports.randomString = internals.randomString = function randomString(length, chars) {
  let mask = '';
  if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
  if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (chars.indexOf('#') > -1) mask += '0123456789';
  if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
  let result = '';
  for (let i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
  return result;
};

