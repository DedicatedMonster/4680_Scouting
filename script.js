const form = document.getElementById('scouting-form');
const teamNumberInput = document.getElementById('teamNumber');
const scoreInput = document.getElementById('score');
const resultsList = document.getElementById('results-list');
const algeNet = document.getElementById('results-list');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const teamNumber = teamNumberInput.value;
  const score = scoreInput.value;
  const alge = alageInput.value;
  // Create list item for team data
  const listItem = document.createElement('li');
  listItem.textContent = `Team ${teamNumber}: ${score}: ${alge}: points`;
    
  // Append to results list
  resultsList.appendChild(listItem);

  // Clear form inputs
  teamNumberInput.value = '';
  scoreInput.value = '';
  algeNet.value = '';
});
const form = document.getElementById('scouting-form');
const teamNumberInput = document.getElementById('teamNumber');
const scoreInput = document.getElementById('score');
const resultsList = document.getElementById('results-list');
const alageInput = documennt.getElementById('alge');
// Load saved data from localStorage
window.onload = function() {
  const savedData = JSON.parse(localStorage.getItem('scoutingData'));
  if (savedData) {
    savedData.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `Team ${item.teamNumber}: ${item.score} points`;
      resultsList.appendChild(listItem);
    });
  }
};

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

  // Save data in localStorage
  const scoutingData = JSON.parse(localStorage.getItem('scoutingData')) || [];
  scoutingData.push({ teamNumber, score });
  localStorage.setItem('scoutingData', JSON.stringify(scoutingData));

  // Clear form inputs
  teamNumberInput.value = '';
  scoreInput.value = '';
});
