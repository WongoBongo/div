
class Employee {
    constructor(name, surname, age, position, organization, hasChildren, startDate) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.position = position;
        this.organization = organization;
        this.hasChildren = hasChildren;
        this.startDate = startDate;
    }
}

class Worker extends Employee {
    constructor(name, surname, age, position, organization, hasChildren, startDate) {
        super(name, surname, age, position, organization, hasChildren, startDate);
    }
}

class Engineer extends Employee {
    constructor(name, surname, age, position, organization, qualification, hasChildren, startDate) {
        super(name, surname, age, position, organization, hasChildren, startDate);
        this.qualification = qualification;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const employeeForm = document.getElementById('employeeForm');
    const employeeTableBody = document.getElementById('employeeTableBody');

    function saveEmployee() {
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const age = document.getElementById('age').value;
        const position = document.getElementById('position').value;
        const organization = document.getElementById('organization').value;
        const entityType = document.getElementById('entityType').value;
        const qualification = entityType === 'Engineer' ? document.getElementById('qualification').value : '-';
        const hasChildren = document.getElementById('children').checked ? 'Да' : 'Нет';
        const startDate = document.getElementById('startDate').value;

        let newEmployee;
        if (entityType === 'Worker') {
            newEmployee = new Worker(name, surname, age, position, organization, hasChildren, startDate);
        } else {
            newEmployee = new Engineer(name, surname, age, position, organization, qualification, hasChildren, startDate);
        }

        const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        savedEmployees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(savedEmployees));

        updateTable();
    }

    function deleteEmployee(index) {
        const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        savedEmployees.splice(index, 1);
        localStorage.setItem('employees', JSON.stringify(savedEmployees));

        updateTable();
    }

    function updateTable() {
        employeeTableBody.innerHTML = '';

        const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];

        savedEmployees.forEach((employee, index) => {
            const newRow = employeeTableBody.insertRow();
            Object.values(employee).forEach(value => {
                newRow.insertCell().textContent = value;
            });

            const deleteCell = newRow.insertCell();
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.addEventListener('click', function () {
                deleteEmployee(index);
            });
            deleteCell.appendChild(deleteButton);
        });
    }

    const saveButton = document.getElementById('saveButton');
    if (saveButton) {
        saveButton.addEventListener('click', saveEmployee);
    }

    updateTable();
});

function entityTypeChanged() {
    const entityType = document.getElementById('entityType').value;
    const qualificationInput = document.getElementById('qualification');
    const childrenInput = document.getElementById('children');

    if (entityType === 'Engineer') {
        qualificationInput.style.display = 'block';
        childrenInput.style.display = 'block';
    } else {
        qualificationInput.style.display = 'none';
        childrenInput.style.display = 'none';
    }
}
