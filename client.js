console.log("Hellow World!");
/////////////// FUNCTION FOR MY SUBMIT BUTTON ////////////////////
// Locating my submitButton on my HTML
const submitButton = document.querySelector('[data-testid="submitButton"]');
// Adding an event listener to the submit button to listen for a click event, this function is gonna run everytime the buton is clicked
submitButton.addEventListener('click', function () {
  // Collecting values from each input field using their data-testid attributes
  // Get the first name entered by the user
  const firstName = document.querySelector('[data-testid="firstNameInput"]').value;
  // Get the last name entered by the user
  const lastName = document.querySelector('[data-testid="lastNameInput"]').value;
  // Get the ID number entered by the user
  const id = document.querySelector('[data-testid="idInput"]').value;
  // Get the job title entered by the user
  const title = document.querySelector('[data-testid="titleInput"]').value;
  // Get the annual salary entered by the user
  const salary = document.querySelector('[data-testid="annualSalaryInput"]').value;
  // Logging out the values to verify they are being collected correctly
  console.log({ firstName, lastName, id, title, salary });
});
// Note for self: one of the reasons we use event listeners instead of onclicks is because you can add, remove or update them without having to touch the DOM and also onclicks you're only limited to one to one action per click while you can add multiple listener to a click with event listener
// Note for self: We’re using querySelector to target specific elements on the page (in this case, the form inputs and button) based on their data-testid attributes.
/////////////// FUNCTION FOR PUTTING MY DATA INTO THE TABLE ////////////////////
// First, I need to get the table body where I'll add new employee rows
const employeeTableBody = document.querySelector('#employeeTable tbody');
// Inside the submit button's event listener, after collecting the input values
submitButton.addEventListener('click', function () {
  // I already collected these values, so now I’ll use them to create a new table row
  const firstName = document.querySelector('[data-testid="firstNameInput"]').value;
  const lastName = document.querySelector('[data-testid="lastNameInput"]').value;
  const id = document.querySelector('[data-testid="idInput"]').value;
  const title = document.querySelector('[data-testid="titleInput"]').value;
  const salary = document.querySelector('[data-testid="annualSalaryInput"]').value;
  // Create a new table row element to hold the employee data
  const row = document.createElement('tr');
  // Now I’ll create a cell for each piece of data and add it to the row
  // First name cell
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = firstName;
  row.appendChild(firstNameCell); // Add the cell to the row
  // Last name cell
  const lastNameCell = document.createElement('td');
  lastNameCell.textContent = lastName;
  row.appendChild(lastNameCell);
  // ID number cell
  const idCell = document.createElement('td');
  idCell.textContent = id;
  row.appendChild(idCell);
  // Job title cell
  const titleCell = document.createElement('td');
  titleCell.textContent = title;
  row.appendChild(titleCell);
  // Annual salary cell
  const salaryCell = document.createElement('td');
  salaryCell.textContent = `$${parseFloat(salary).toFixed(2)}`; // Format the salary as currency
  row.appendChild(salaryCell);
  // Finally, I’ll add the entire row to the table body so it appears on the page
  employeeTableBody.appendChild(row);
}); 
// COMMENTS FOR WHAT IS NEXT BECAUSE I AM NOT DONE YET //
// I have to create the delete button and following that I need to add the logic to be able remove a single employee row
// Create the logic that will add Annual Salary to the total of my existing footer
// Create my styling.css file
// Create the over budget logic
// Create the styling that will make it obvious we are over budget