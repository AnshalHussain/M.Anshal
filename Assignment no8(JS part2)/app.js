// ===== Task 1: Signup Form =====
const signupForm = document.getElementById("signupForm");
const formOutput = document.getElementById("formOutput");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  formOutput.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
  `;
});

// ===== Task 2: Read More Button =====
const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("moreText");

readMoreBtn.addEventListener("click", function () {
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    readMoreBtn.textContent = "Read less";
  } else {
    moreText.style.display = "none";
    readMoreBtn.textContent = "Read more";
  }
});

// ===== Task 3: Student Table =====
const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable").querySelector("tbody");
const editForm = document.getElementById("editForm");
const editName = document.getElementById("editName");
const editAge = document.getElementById("editAge");
const updateBtn = document.getElementById("updateBtn");
let editingRow = null;

studentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("studentName").value;
  const age = document.getElementById("studentAge").value;

  const row = studentTable.insertRow();
  row.insertCell(0).textContent = name;
  row.insertCell(1).textContent = age;

  const actionsCell = row.insertCell(2);

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", function () {
    row.remove();
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", function () {
    editingRow = row;
    editName.value = row.cells[0].textContent;
    editAge.value = row.cells[1].textContent;
    editForm.style.display = "block";
  });

  actionsCell.appendChild(delBtn);
  actionsCell.appendChild(editBtn);

  studentForm.reset();
});

updateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (editingRow) {
    editingRow.cells[0].textContent = editName.value;
    editingRow.cells[1].textContent = editAge.value;
    editForm.style.display = "none";
  }
});