function handleSubmit() {

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const address = document.getElementById("address").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const email = document.getElementById("email").value.trim();

    let gender = "";
    const genders = document.getElementsByName("gender");
    for (let g of genders) {
        if (g.checked) {
          gender = g.value;
    }
  }

  let techStack = [];
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(cb => {
    if (cb.checked) {
      techStack.push(cb.value);
    }
  });

  if (
    name === "" ||
    age === "" ||
    gender === "" ||
    country === "" ||
    techStack.length === 0 ||
    address === "" ||
    telephone === "" ||
    email === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  if (isNaN(age) || age <= 0) {
    alert("Age must be a valid number");
    return;
  }

  if (!/^\d+$/.test(telephone)) {
    alert("Telephone must contain only numbers");
    return;
  }

  if (!email.includes("@")) {
    alert("Invalid email format");
    return;
  }

  const tableBody = document.querySelector("#resultTable tbody");
  const row = tableBody.insertRow();

  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = age;
  row.insertCell(2).innerText = gender;
  row.insertCell(3).innerText = country;
  row.insertCell(4).innerText = techStack.join(", ");
  row.insertCell(5).innerText = address;
  row.insertCell(6).innerText = telephone;
  row.insertCell(7).innerText = email;

  // Reset form after submit
  document.getElementById("userForm").reset();
}