const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const telephoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");

/**
 * 
 * VALIDATORS
 *  
 */

// Can only contain letters a-z in lowercase
function isValidUsername(username) {
  const username_rule = /^[a-z]+$/;
  let valid_username = username_rule.test(username);
  return valid_username;
}

// Must contain a lowercase, uppercase letter and a number
function isValidPassword(password) {
  const lowercase_rule = /[a-z]/;
  const uppercase_rule = /[A-Z]/;
  const number_rule = /\d/;
  let lowercase = lowercase_rule.test(password);
  let uppercase = uppercase_rule.test(password);
  let number = number_rule.test(password);
  let valid_password = lowercase && uppercase && number;
  return valid_password;
}

// The telephone number must be in the format of (555) 555-5555
function isValidTelephone(telephone) {
  const phone_rule = /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/;
  let valid_phone = phone_rule.test(telephone);
  return valid_phone;
}

// Must be a valid email address
function isValidEmail(email) {
  const email_rule = /[^@]+@[a-z]+\.[a-z]{2,}/i;
  let valid_email = email_rule.test(email);
  return valid_email;
}

/**
 * 
 * FORMATTING FUNCTIONS
 * 
 */

function formatTelephone(text) {
  const phone_rule = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
  let phone_format = '($1) $2-$3';
  return text.replace(phone_rule, phone_format);
}

/**
 * 
 * SET UP EVENTS
 * 
 */

function showOrHideTip(show, element) {
  // show element when show is true, hide when false
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

usernameInput.addEventListener("input", createListener(isValidUsername));

passwordInput.addEventListener("input", createListener(isValidPassword));

telephoneInput.addEventListener("input", createListener(isValidTelephone));
telephoneInput.addEventListener("blur", e => {
  e.target.value = formatTelephone(e.target.value);
});


emailInput.addEventListener("input", createListener(isValidEmail));
