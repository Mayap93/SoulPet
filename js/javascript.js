var app6 = new Vue({
  el: '#app-6',
  data: {
    message: ''
  }
})
//favorite color controls which result page to show
function myFunction() {
if (document.forms["colors"].color.value == "blue") {
window.location.href = "results.html"; return false;
}
if (document.forms["colors"].color.value == "orange") {
window.location.href = ""; return false;
}
if (document.forms["colors"].color.value == "black") {
window.location.href = ""; return false;
}
if (document.forms["colors"].color.value == "beige") {
window.location.href = "resultstwo.html"; return false;
}
if (document.forms["colors"].color.value == "green") {
window.location.href = ""; return false;
}
if (document.forms["colors"].color.value == "") {
  alert("You'll have to choose your favorite color"); return false;
}
}
