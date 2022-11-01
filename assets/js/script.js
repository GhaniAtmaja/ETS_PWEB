'use strict';

$(document).ready(function() {
  $('#login-form').validate({ });
});

function goToHome(){
  movePage("index.html");
  return true;
}

function movePage(pageName){
  window.location.assign(pageName);
}