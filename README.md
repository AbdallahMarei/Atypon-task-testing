The application uses useEffect to fetch from the api provided and then displays the recipes gotten from the api.
I chose 50 recipes to fetch from the api and I used pagination to display the recipes to not overcrowd the page with recipes.
The number of recipes per page is 6.

I used bootstrap to structure my project.

//////Api key
I hid my api key in an env file so you will have to use your own api key in the home-page.js as well as the detailed-recipe.jsx.

The search feature was used as follows:

1- On form submit the input will be used when fetching from the api.

2- I chose 2 recipes to fetch from the api when using the search.

3- The 2 recipes found will be displayed on the page and the pagination will be removed automatically.

4- There is a reset button to remove the recipes searched for and display all the recipes previously gotten from the api.

All recipes have a more info button to display it in details in another page using useParams.
Inside the detailed page I used the id gotten from the url and used useEffect to fetch the recipe from the api and display it on the page.
There is a button to go back to the main page with all the recipes.

I also made a function that filters all the available recipes on the main page, I commented this function however you can you use it instead of the other search function. If there are no recipes found an alert will pop up.


/////////Test Cases:

1- If anything other than letters is entered inside the search field an alert will pop up and the search field will be emptied (using regex).

2- If nothing is entered inside the search field an alert will pop up.

3- The input will be trimmed and lowered case.

4- If the user inputs a recipe or any other word that doesn't exist an alert will pop up and the search field will be emptied.  

