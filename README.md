# IdeaBox

## Abstract:
The IdeaBox app is a web-based application that allows users to input an idea title and description, and save these ideas in a card for later. Users can also save idea cards, delete idea cards, and filter to display all saved cards. 

## Installation Instructions:
[IdeaBox](https://jmcsorle.github.io/idea-box/) works in a browser, but if you would like to build your own version, you can clone the repository to your local machine as follows:

1. Go to the [IdeaBox](https://github.com/jmcsorle/idea-box).

2. Select the "fork" option on the upperright and follow the prompts to save a fork to your GitHub account:
<img width="532" alt="image of github fork button" src="https://user-images.githubusercontent.com/7227063/243205594-971fd24b-4cdf-4861-8e37-65c1c46d3a1d.png">

3. Once you have forked the repository, choose the "Code" drop down to copy the SSH key for cloning:

    ![image](https://user-images.githubusercontent.com/7227063/243205687-99544707-a35c-4085-9e06-6e4fc2cef2aa.png)

4. Open your preferred command-line interface tool (e.g. Terminal) and create a directory where you would like to clone the repository.

5. Change directories into the directory your created.

6. Without the brackets, type [git clone], type a space, then use Command-v on a Mac, or Control-v on PC/Android to past in the SSH key you copied in step 3.

## Preview of App:
<img width="600" alt="image of ideaBox page displaying 2 idea cards, one favorited" src="https://github.com/jmcsorle/idea-box/assets/104571445/b34039c6-e9d1-4ca3-9f93-9239d6353bb5">

## Context:
The IdeaBox project was assigned in the fourth week of Mod 1, and the alloted time to complete this project was about 5 days. The project was assigned as a group project, with groups consisting of 3 or 4 members. All members were front end, Mod 1 students at Turing. 

## Contributors:
Jan McSorle https://github.com/jmcsorle
Alex Peterson - https://github.com/apete12
Avery Berryman - https://github.com/Averyberryman
Dan Lavery - https://github.com/wlavery22

## Learning Goals:
The learning goals of this project included: 
- Write clean HTML and CSS to match a provided comp.
- Build an understanding of how to separate the data model from the DOM model.
- Incorporate & iterate over arrays in order to filter what is being displayed
- Implement concepts of DRYness, SRP, and purity while crafting clean code with small, efficient functions. 

## Wins + Challenges:
- A challenge included deciding how to store and display favorited cards without creating conflicts in the data model. We originally created a global variable called favorited ideas, intending to store an array of favorited cards. However, this created a conflict when trying to access stored favorited cards while also updating the data model and DOM. We problem solved this by creating a key-value pair, favorite: false, stored in our card template object ( within the createCard function). We then could access and manipulate this favorited status via the data model in a function that filtered through all cards. For this, we also used an array called favoritedCards that was stored in our filterFavorites function. 

- Another challenge was attempting to display the star image through CSS, stored as a background image in CSS. However, this resulted in a broken image because the alt text could not find the image in CSS. This not only resulted in the design not matching the comp, but also produced an issue with accessibility as screen readers cannot read CSS at all. Therefore, the star icon was not identifiable to screen readers and this functionality would not be available to a screen reader user. This was fixed by creating a key-value pair in the card template object for src: link. This allowed us to interpolate the src link into our .innerHTML of the cards, and we could change the value using dot notation. This was definitely a win!

