var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};

  formData["nomor"] = document.getElementById("nomor").value;
  formData["customer"] = document.getElementById("customer").value;
  formData["product"] = document.getElementById("product").value;
  formData["price"] = document.getElementById("price").value;
  formData["status"] = document.getElementById("status").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);

  cell2 = newRow.insertCell(0);
  cell2.innerHTML = data.nomor;
  cell1 = newRow.insertCell(1);
  cell1.innerHTML = data.customer;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.product;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.price;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.status;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("nomor").value = "";
  document.getElementById("customer").value = "";
  document.getElementById("product").value = "";
  document.getElementById("price").value = "";
  document.getElementById("status").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("nomor").value = selectedRow.cells[0].innerHTML;
  document.getElementById("customer").value = selectedRow.cells[1].innerHTML;
  document.getElementById("product").value = selectedRow.cells[2].innerHTML;
  document.getElementById("price").value = selectedRow.cells[3].innerHTML;
  document.getElementById("status").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.nomor;
  selectedRow.cells[1].innerHTML = formData.customer;
  selectedRow.cells[2].innerHTML = formData.product;
  selectedRow.cells[3].innerHTML = formData.price;
  selectedRow.cells[4].innerHTML = formData.status;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("customer").value == "") {
    isValid = false;
    document.getElementById("customerValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("customerValidationError")
        .classList.contains("hide")
    )
      document.getElementById("customerValidationError").classList.add("hide");
  }
  return isValid;
}
