document.getElementsByName('signin-button').disabled = true;
document.getElementsByName('email').addEventListeener("input", enableButton);

function enableButton() {
  document.getElementsByName('signin-button').disabled = false;
}
