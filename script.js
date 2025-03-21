const form = document.getElementById('scouting-form');
const teamNumberInput = document.getElementById('teamNumber');
const scoreInput = document.getElementById('score');
const resultsList = document.getElementById('results-list');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const teamNumber = teamNumberInput.value;
  const score = scoreInput.value;

  // Create list item for team data
  const listItem = document.createElement('li');
  listItem.textContent = `Team ${teamNumber}: ${score} points`;

  // Append to results list
  resultsList.appendChild(listItem);

  // Clear form inputs
  teamNumberInput.value = '';
  scoreInput.value = '';
});
