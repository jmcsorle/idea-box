// Query selectors
var userTitle = document.querySelector('#title');
var userBody = document.querySelector('#body');
var saveButton = document.querySelector('#save-button');
var savedCardsGrid = document.querySelector('.saved-cards-grid');


// Data model:
var savedIdeas = [];
var favoriteIdeas = [];

// Event listeners
saveButton.addEventListener("click", saveIdea);
userTitle.addEventListener("input", toggleSaveButton);
userBody.addEventListener("input", toggleSaveButton);

function createIdea() {
    return {
        id: Date.now(),
        title: userTitle.value,
        body: userBody.value,
        favorite: false
    };
}

function saveIdea(event) {
    event.preventDefault();

    if (userTitle.value === '' || userBody.value === '') {
        return;
    }

    var idea = createIdea();
    savedIdeas.unshift(idea);
    displayIdea();

    userTitle.value = '';
    userBody.value = '';
    saveButton.disabled = true;
}

function displayIdea() {
    savedCardsGrid.innerHTML = "";

    for (var i = 0; i < savedIdeas.length; i++) {
        var ideaCard = savedIdeas[i];
        var ideaCardElement = document.createElement("div");
        ideaCardElement.classList.add("idea-card");
        ideaCardElement.innerHTML = `
            <div class="icon-container" data-index="${i}">
              <img class="star-icon icons" src="assets/star.svg" alt="favorite"></img>
              <img class="delete-icon icons" src="assets/delete.svg" alt="delete"></img>
            </div>
            <div class="idea-container">
              <h2 class="idea-card-title">${ideaCard.title}</h2>
              <p class="idea-card-body">${ideaCard.body}</p>
            </div>
        `;
        savedCardsGrid.appendChild(ideaCardElement);
    }

    // Add event listeners to delete icons
    var starIcon = document.querySelectorAll('.star-icon');
    starIcon.forEach(function(icon) {
      icon.addEventListener('click', favoriteIdea);
    });

    var deleteIcons = document.querySelectorAll('.delete-icon');
    deleteIcons.forEach(function(icon) {
        icon.addEventListener('dblclick', deleteIdea);
    });

}

function toggleSaveButton() {
    if (userTitle.value === '' || userBody.value === '') {
        saveButton.disabled = true;
    } else {
        saveButton.disabled = false;
    }
}

function deleteIdea(event) {
    var index = parseInt(event.target.getAttribute('data-index'));
    savedIdeas.splice(index, 1);
    displayIdea();
}

function favoriteIdea(event) {
  var index = parseInt(event.target.getAttribute('data-index'));
  favoriteIdeas.push(index, 1)
  displayIdea(); 
}