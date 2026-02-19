// Profile Image Preview
document.getElementById("profileInput").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    document.getElementById("profilePreview").src = URL.createObjectURL(file);
  }
});

// Form Validation
document.getElementById("bioForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop submit first

  // 1. Personal Information
  let name = document.getElementById("name").value.trim();
  let dob = document.getElementById("dob").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let marital = document.getElementById("marital").value;
  let height = document.getElementById("height").value.trim();
  let weight = document.getElementById("weight").value.trim();
  let blood = document.getElementById("blood").value.trim();
  let nationality = document.getElementById("nationality").value.trim();

  if (name === "" || !/^[A-Za-z\s]{3,50}$/.test(name)) {
    alert("Personal Info: Enter valid name");
    return;
  }

  if (dob === "") {
    alert("Personal Info: Select Date of Birth");
    return;
  }

  if (age === "" || age < 18 || age > 65) {
    alert("Personal Info: Age must be between 18 and 65");
    return;
  }

  if (gender === "") {
    alert("Personal Info: Select Gender");
    return;
  }

  if (marital === "") {
    alert("Personal Info: Select Marital Status");
    return;
  }

  if (height !== "" && !/^[4-7]'[0-9]{1,2}$/.test(height)) {
    alert("Personal Info: Height format should be like 5'7");
    return;
  }

  if (weight !== "" && !/^[0-9]{2,3}$/.test(weight)) {
    alert("Personal Info: Enter valid weight");
    return;
  }

  if (blood !== "" && !/^(A|B|AB|O)[+-]$/.test(blood)) {
    alert("Personal Info: Enter valid blood group (e.g. B+)");
    return;
  }

  if (nationality === "") {
    alert("Personal Info: Enter nationality");
    return;
  }

  // 2. Education & Career
  let qualification = document.getElementById("qualification").value.trim();
  let profession = document.getElementById("profession").value.trim();
  let organization = document.getElementById("organization").value.trim();
  let income = document.getElementById("income").value.trim();

  if (qualification === "") {
    alert("Education Section: Enter qualification");
    return;
  }

  if (profession === "") {
    alert("Education Section: Enter profession");
    return;
  }

  if (organization === "") {
    alert("Education Section: Enter organization name");
    return;
  }

  if (income !== "" && !/^[0-9]+$/.test(income)) {
    alert("Education Section: Enter valid income");
    return;
  }

  // 3. Family Details
  let father = document.getElementById("father").value.trim();
  let mother = document.getElementById("mother").value.trim();
  let siblings = document.getElementById("siblings").value.trim();
  let familyType = document.getElementById("familyType").value;

  if (father === "") {
    alert("Family Section: Enter father's name");
    return;
  }

  if (mother === "") {
    alert("Family Section: Enter mother's name");
    return;
  }

  if (siblings !== "" && !/^[0-9]+$/.test(siblings)) {
    alert("Family Section: Enter valid number of siblings");
    return;
  }

  if (familyType === "") {
    alert("Family Section: Select family type");
    return;
  }

  // 4. Contact Information
  let address = document.getElementById("address").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let email = document.getElementById("email").value.trim();

  if (address.length < 10) {
    alert("Contact Section: Enter full address");
    return;
  }

  if (!/^01[3-9][0-9]{8}$/.test(mobile)) {
    alert("Contact Section: Enter valid Bangladesh mobile number");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Contact Section: Enter valid email");
    return;
  }

  // 5. Partner Preference
  let ageRange = document.getElementById("ageRange").value.trim();
  let prefHeight = document.getElementById("prefHeight").value.trim();
  let prefEdu = document.getElementById("prefEdu").value.trim();

  if (ageRange !== "") {
    if (!/^[0-9]{2}-[0-9]{2}$/.test(ageRange)) {
      alert("Partner Section: Age range format should be 22-28");
      return;
    }

    let parts = ageRange.split("-");
    if (parseInt(parts[0]) >= parseInt(parts[1])) {
      alert("Partner Section: Invalid age range");
      return;
    }
  }

  if (prefHeight !== "" && !/^[4-7]'[0-9]{1,2}$/.test(prefHeight)) {
    alert("Partner Section: Height format like 5'6");
    return;
  }

  if (prefEdu === "") {
    alert("Partner Section: Enter preferred education");
    return;
  }

  // All Sections Valid
  alert("Form Submitted Successfully!");
  this.submit();
});
