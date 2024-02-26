function solve() {
  event.preventDefault(); 
  let username = document.getElementById("username").value;
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let password = document.getElementById("password").value;
  let repassword = document.getElementById("repassword").value;
  let dob = document.getElementById("dob").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;

  let flag = 1;

  if (password !== repassword) {
    flag = 0;
    alert("Passwords do not match. Please re-enter.");
    document.getElementById("password").value = "";
    document.getElementById("repassword").value = "";
  }

  let passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/;

  if (!passwordRegex.test(password)) {
    flag = 0;
    alert(
      "Password must be at least 8 characters long and include at least one number, one alphabet, and one symbol."
    );
  }

  var userData = {
    username: username,
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    gender: gender,
    password: password,
  };
  try {
    localStorage.setItem("userData", JSON.stringify(userData));
    if (flag) {
      alert("Form submitted");
      window.location.href = "../landingPages/profile.html";
    }
  } catch (e) {
    console.error("Error storing data in localStorage:", e);
  }
}
