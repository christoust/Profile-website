document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.querySelector(".login");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var username = document.querySelector('input[type="text"]').value;
      var password = document.querySelector('input[type="password"]').value;
  
      var userData = JSON.parse(localStorage.getItem("userData"));
  
      if (userData && userData.username === username && userData.password === password) {
        alert("Login successful");
        window.location.href="landingpages/profile.html"
      } else {
        alert("Invalid username or password");
      }
    });
  });

  function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("pass").value;
    let submitBtn = document.getElementById("submitBtn");

    if (username.trim() !== "" && password.trim() !== "") {
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.setAttribute("disabled", "disabled");
    }
}