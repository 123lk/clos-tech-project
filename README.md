# CLOS Technical Project

## Project Brief

1. Create a new github repo
Fork your hello-soda code base (https://github.com/123lk/hello-soda)
2. Introduce react router
The URL in the address bar should change as the user selects different people
3. Introduce redux state management
The list of available people should be stored within state.
State should be maintained as different people are selected.
4. Ability to add a person
Introduce functionality to add a person.
Be conscious of what you should do with react router and redux state.
Note:
The new person doesn’t have to persisted between application restarts. Don’t worry about this.
Don’t worry about functionality for removing a person.
5. Introduce externalised configuration for the react application
The data that drives the application is defined within a people.json file.
Lets assume that the people.json file is the data for dev mode. I’d like to see a second file called people_prod.json which contains the people data for production mode. There should be a config file that defines whether the application is running in dev or prod mode. Just changing the mode and restarting the application should present the corresponding set of people, all without changing the react code underneath.

## Installation 
You will need to have Node.js installed to view this program.  Type the below command into the terminal to check if you already have node installed;
```
$node -v
```
If you already have node installed it will tell you which version (e.g. v7.7.4).  If you need to install node.js please follow this link <https://nodejs.org/en/>.

To install all the dependencies please enter the following command into the terminal once you have navigated into the root directory; 
```
$npm install
```

To start the program enter the following command;
```
$npm start
```

Once compiled the program will be running on <http://localhost:3000/>

## Testing
To run the tests, enter the following command into the terminal;
```
$npm test
```

## Built With
[React](https://facebook.github.io/react/) - javascript library for building user interfaces

[Bootstrap](http://getbootstrap.com/css/) - front-end framework

[Google Fonts](https://fonts.google.com/) - font directory

[Font Awesome](http://fontawesome.io/) - icon directory
