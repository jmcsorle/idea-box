// Query selectors
var userTitle = document.querySelector('#title');
var userBody = document.querySelector('#body');
var saveButton = document.querySelector('#save-button');
var savedCardsGrid = document.querySelector('.saved-cards-grid');

// Data model:
var savedIdeas = [];

// Event listeners
saveButton.addEventListener("click", saveIdea);
userTitle.addEventListener("input", toggleSaveButton);
userBody.addEventListener("input", toggleSaveButton);

function createIdea() {
    return {
        id: Date.now(),
        title: userTitle.value,
        body: userBody.value
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
            <h2 class="idea-card-title">${ideaCard.title}</h2>
            <p class="idea-card-body">${ideaCard.body}</p>
        `;
        savedCardsGrid.appendChild(ideaCardElement);
    }
}


function toggleSaveButton() {
    if (userTitle.value === '' || userBody.value === '') {
        saveButton.disabled = true;
    } else {
        saveButton.disabled = false;
    }
}
