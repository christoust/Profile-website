document.addEventListener("DOMContentLoaded", function () {
  var userData = JSON.parse(localStorage.getItem("userData"));
  if (userData) {
    var profileDataElement = document.getElementById("profileData");
    profileDataElement.innerHTML = `
        <p><strong>First Name:</strong> ${userData.firstName}</p>
        <p><strong>Last Name:</strong> ${userData.lastName}</p>
        <p><strong>DOB:</strong> ${userData.dob}</p>
        <p><strong>Gender:</strong> ${userData.gender}</p>
      `;
  } else {
    alert("User data not found in local storage.");
  }
});
