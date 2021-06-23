********************************************************************
Restaurant finder App
********************************************************************

App Overview-

This App is a restaurant finder that allows user to search for restaurants according to a food name for example:- Pizza, Pasta etc.
the app allows the user to view a list of restaurants that serve a particular food according to 3 categories i.each
-Pocket friendly (Less expensive restaurants).
-Lifestyle (Medium expensive restaurants).
-Exotic (Very expensive restaurants).
A user may then view their rating and the number of review for the restaurant. He/she can then call the restaurant to place the order.

********************************************************************
How to install App.
********************************************************************

1.) Make sure you are connected over the Internet.
2.) Create a account on expo by visiting expo.io.
3.) Open the folder containing the code and run commond prompt in the folder.
4.) Use "npm install" to install all the packages.
5.) Use "yarn start"/"npm start" to start the expo-cli server.
6.) On successful start a metro bundler will open up in your default browser if it does not check the command prompt for 
    what port the metro bundler is running on and use it to open the metro bundler on your browser 
    for me it is  http://localhost:19002, it maybe different for you.
7.) If necessary you may install the tunnel connection by clicking on it to install.
8.) install Expo go on your android or iOS device.
9.) For android device you can scan the QR code provided on the bottom left of the screen to run the App in Expo go.
10.) For iOS device use send link with email to send a link that will allow you to run the App on Expo on your iOS device.
    - you may be prompt to enter your expo account credentials to send the link to an email address, however it is a one time process
      once authenticated you will not be prompt for your credentials again.
11.) Make sure the devices are connected on the same network.
12.) Click on the App running on your Expo go in the Recently in development section, if the app is successfully running it will show a green dot next to it.
13.) Enjoy :)

********************************************************************
Technology used
********************************************************************

-Firebase for authentication and signing up users.
-React Native expo.

********************************************************************
library used
********************************************************************

-axios.


********************************************************************
What I have done so firebase
********************************************************************



1.) Using a free API called Yelp which is US based for getting Information about restaurants,
 This API allows the user to filter search restaurants according to the how expensive each restaurant are.

2.) The App is divide into 4 major folders.
    -api.
    -screens folder.
    -components folder.
    -hooks.


3.) api folder the actual file necessary to connect to the yelp API.
    -yelp.js uses the help of axios to connect to the url of the API. however the connection is not called 
     it is just the initialisation with all the necessary details required for a succesful connection.

4.) screens folder consists of all the logic behind how the UI should be rendered in my case
    -IndexScreen.js contains code regarding how the first screen UI should look like when the app is opened.
        -i.e the login screen of the App.
    -HomeScreen.js contains code regarding the screen a user must see on succesful login to the App.
        -i.e a default set of data taken from the API and displayed to the user.
    -SignupScreen.js contains code written for the UI of the signup screen.
        -i.e the screen takes in the user's full name, email and password and authenticates it with firebase which means if 
         if a users account is existing it.
    -DetailsScreen.js contains UI code for displaying additional information about the Restaurant selected by the user.

5.) components folder contains all the extra logic required for rendering out the actual data we recieve from the API.
    -DetailsCard.js contains logic behind the rendering of the actual data onto the DetailsScreen.
    -ResultList.js is required to get a set of 3 different results according t hw expensive a restaurant is.
    -ResultCard.js contains the logic behind rendering of each card in the ResultList.js.
    -SearchBar.js is the code for the actual search bar that is used within the HomeScreen.js file. it used for searching for 
     restaurant that sell a particular type of food for example- pizza, pasta etc.

6.) hooks folder contains a custom defined file that is responsible for actually getting the data from the API.
    -useResult.js uses the yelp.js file to make a connection to the API and get the data back by default a food category is selected so that
     when the user logs in he/she is presented with some actual restaurant data, but as the user used the search bar to search for restaurants
     selling a particular food the useResult file is called again to recieve the data according to the user query.

7.) The App.js is the actual file that runs when the app is installed and it contains the navigation routes for each screen as 
    well as the Initial Route for the screen.


