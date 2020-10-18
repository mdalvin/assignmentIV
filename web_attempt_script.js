let selectedRow = null;

function onFormSubmit(){
    let formData = readFormData();
    if (selectedRow == null) {
        insertNewrecord(formData);
    } else {
        updateRecord(formData)
    }
    resetForm();
}

function readFormData(){
    let formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["dateOfBirth"] = document.getElementById("dateOfBirth").value;
    formData["emailAddress"] = document.getElementById("emailAddress").value;
    formData["age"] = document.getElementById("age").value;
    formData["studentId"] = document.getElementById("studentId").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["city"] = document.getElementById("city").value;
    formData["hobbies"] = document.getElementById("hobbies").value;
    return formData;
}

function insertNewrecord(data){
    let table = document.getElementById("studentInfo").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.dateOfBirth;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.emailAddress;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.age;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.studentId;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.gender;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.city;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.hobbies;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<button onClick = "onEdit(this)">Edit</button> | 
                       <button onClick = "onDelete(this)">Delete</button>`;
}

function resetForm(){
    document.getElementById("fullName").value;
    document.getElementById("dateOfBirth").value;
    document.getElementById("emailAddress").value;
    document.getElementById("age").value;
    document.getElementById("studentId").value;
    document.getElementById("gender").value;
    document.getElementById("city").value;
    document.getElementById("hobbies").value;
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("dateOfBirth").value = selectedRow.cells[1].innerHTML;
    document.getElementById("emailAddress").value = selectedRow.cells[2].innerHTML;
    document.getElementById("age").value = selectedRow.cells[3].innerHTML;
    document.getElementById("studentId").value = selectedRow.cells[4].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[5].innerHTML;
    document.getElementById("city").value = selectedRow.cells[6].innerHTML;
    document.getElementById("hobbies").value = selectedRow.cells[7].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.dateOfBirth;
    selectedRow.cells[2].innerHTML = formData.emailAddress;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.studentId;
    selectedRow.cells[5].innerHTML = formData.gender;
    selectedRow.cells[6].innerHTML = formData.city;
    selectedRow.cells[7].innerHTML = formData.hobbies;
}

function onDelete(td){
    if (confirm('Are you sure you want to delete this entry?')){
        row = td.parentElement.parentElement;
        document.getElementById("studentInfo").deleteRow(row.rowIndex);
        resetForm();
    }
}