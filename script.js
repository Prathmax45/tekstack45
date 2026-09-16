// Global array to store customer objects
let customers = [
    {name: 'John Doe', email: '', age: 35, height: 160, weight: 65},
    {name: 'Krishnan', email: '', age: 30, height: 170, weight: 73}
];

function submitData() {
    // Capture user inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (name && age && height && weight) {
        // Organize them into an object
        const customer = {
            name: name,
            email: email,
            age: age,
            height: height,
            weight: weight
        };

        // Store them in a global array
        customers.push(customer);
        
        // Display data
        displayData();
    } else {
        alert('Please fill in all the required fields (Name, Age, Height, Weight).');
    }
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
}

function displayData() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear current table rows

    // Loop through the global array and display in the table
    customers.forEach(customer => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = customer.name;
        row.appendChild(nameCell);
        
        const ageCell = document.createElement('td');
        ageCell.textContent = customer.age;
        row.appendChild(ageCell);
        
        const heightCell = document.createElement('td');
        heightCell.textContent = customer.height;
        row.appendChild(heightCell);
        
        const weightCell = document.createElement('td');
        weightCell.textContent = customer.weight;
        row.appendChild(weightCell);

        tableBody.appendChild(row);
    });
}

// Initial display of data when the page loads
displayData();
