// Query selectors
var userTitle = document.querySelector('#title');
var userBody = document.querySelector('#body');
var saveButton = document.querySelector('#save-button');
var savedCardsGrid = document.querySelector('.saved-cards-grid');

// Data model:
var savedIdeas = [];

// Event listeners
saveButton.addEventListener("click", saveIdea);

function createIdea() {
    return {
        id: Date.now(),
        title: userTitle.value,
        body: userBody.value
    };
}

function saveIdea() {
    var idea = createIdea();
    savedIdeas.unshift(idea);
    console.log(savedIdeas);
    event.preventDefault();
}
function displayIdea () {
savedCardsGrid.innerHTML = "";

for (var i = 0; i < savedIdeas.length; i++) {
    var ideaCard = savedIdeas[i];
    var ideaCardElement = document.createElement("div");
    ideaCardElement.classList.add("idea-card");
    ideaCardElement.innerHTML = `
      <h2 class="idea-card-title">${userTitle.value}</h2>
      <p class="idea-card-body">${userBody.value}</p>
      `;
    savedCardsGrid.appendChild(ideaCardElement);
  }
}
