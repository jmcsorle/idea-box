
// Query selectors
var userTitle = document.querySelector('#title');
var userBody = document.querySelector('#body');
var saveButton = document.querySelector('#save-button');
var savedCardsGrid = document.querySelector('.saved-cards-grid');


// Data model:
var savedIdeas = [];


// Event listeners
saveButton.addEventListener("click", function(event){
    event.preventDefault();
    saveIdea();
    displayIdea();
});


userTitle.addEventListener("input", toggleSaveButton);
userBody.addEventListener("input", toggleSaveButton);

savedCardsGrid.addEventListener("click", function(event) {
    if(event.target.classList.contains('white-star')){
        favoriteIdea(event);
    }else if(event.target.classList.contains('orange-star')){
        unFavoriteIdea(event);
    }else if(event.target.classList.contains('delete-icon')){
        deleteIdea(event);
    }
});

// Functions:
function createIdea() {
    return {
        id: Date.now(),
        title: userTitle.value,
        body: userBody.value,
        favorite: false,
        class: 'white-star',
        src: 'assets/star.svg'
    };
}

function saveIdea(event) {   
    var idea = createIdea();

    savedIdeas.push(idea);
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
            <div class="icon-container" id="${ideaCard.id}">
              <img class="${ideaCard.class}" src="${ideaCard.src}" ></img>
              <img class="delete-icon icons" src="assets/delete.svg" alt="delete"></img>
            </div>
            <div class="idea-container">
              <h2 class="idea-card-title">${ideaCard.title}</h2>
              <p class="idea-card-body">${ideaCard.body}</p>
            </div>
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

function deleteIdea(event){
    for(var i= 0; i<savedIdeas.length; i++){
        if(event.target.classList.contains('delete-icon') && parseInt(event.target.parentElement.getAttribute('id')) === savedIdeas[i].id){
        savedIdeas.splice(i, 1);
        }
    }
    displayIdea();
}

function favoriteIdea(event) {
   for (var i = 0; i < savedIdeas.length; i++) {
        if(event.target.classList.contains('white-star') && parseInt(event.target.parentElement.getAttribute('id')) === savedIdeas[i].id){
            savedIdeas[i].favorite = true;
            savedIdeas[i].class = "orange-star"
            savedIdeas[i].src = "assets/star-active.svg"
            console.log(savedIdeas[i].class)
        }
   }
   displayIdea();
}

function unFavoriteIdea(event){
    for (var i = 0; i < savedIdeas.length; i++) {
        if(event.target.classList.contains('orange-star') && parseInt(event.target.parentElement.getAttribute('id')) === savedIdeas[i].id){
        savedIdeas[i].favorite = false;
        savedIdeas[i].class = "white-star"
        savedIdeas[i].src = "assets/star.svg"

        }
    }
    displayIdea();
}
