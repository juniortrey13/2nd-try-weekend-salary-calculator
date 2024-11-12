console.log("Hellow World!");
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