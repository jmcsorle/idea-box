// Query selectors
var userTitle = document.querySelector('#title');
var userBody = document.querySelector('#body');
var saveButton = document.querySelector('#save-button');

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
    savedIdeas.push(idea);
    console.log(savedIdeas);
    event.preventDefault();
}
