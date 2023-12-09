/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr() {
  elt = document.getElementById("counter");
  endNbr = 500;
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
 function incNbrRec(i, endNbr, elt) {
   if (i <= endNbr) {
     elt.innerHTML = String(i).concat("%");
     setTimeout(function() {//Delay a bit before calling the function again.
       incNbrRec(i + 1, endNbr, elt);
     }, 0.001);
   }
 }

 function fadeOnClick() {
  link = document.getElementById("study-link");
  link.classList.add("fadeOnClick")
 }

 function validateEmail() {
  emailField = document.getElementById("email-field")
  emailError = document.getElementById("email-error")

  if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
  {
    emailError.innerHTML = "Please Enter A Valid Email";
    return false;
  }
  emailError.innerHTML = "";
  return true;
 }

 function passwordMatch() {
  password = document.getElementById("pass")
  confirmPassword = document.getElementById("check-pass")
  passwordError = document.getElementById("pass-error")

  if (confirmPassword.value !== password.value)
  {
    passwordError.innerHTML = "Passwords Do Not Match"
    return false;
  }
  passwordError.innerHTML = ""
  return true;
 }

 function passwordLength() {
  password = document.getElementById("pass")
  passwordError = document.getElementById("length-error")
  passwordLen = password.value
  passwordLen = passwordLen.length

  if (passwordLen < 7)
  {
    passwordError.innerHTML = "Password Length Must Be More Than 6 Characters"
    return false;
  }

  passwordError.innerHTML = ""
  return true;
 }

 function slideIndexOut() {
  body = document.querySelector("body")
  body.classList.add("slide-out-left")
 }



