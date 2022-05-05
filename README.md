## Cupcake World!
_This program is a basic CRUD app centered around CUPCAKES! The app uses **Python** and **Flask** server-side, has basic API endpoints centered around the CRUD functionality, and manipulates the DOM with **AJAX requests** to the API using **Jquery** and **JS**. The frontend is lightly styled with **Bootstrap** and a **styles.css** file in the **/static** folder. The app also uses **PostGreSQL**, and needs a database named `cupcakes` to run correctly._

### Requirements and Dependencies:
This app uses PostgreSQL and connects to a database named `cupcakes`. Be sure to create this database:
```
sql
CREATE DATABASE cupcakes
```
Run the following commands in the terminal to run the app:
1. `python3 -m venv venv` to create a virtual environment
2. 3. `source venv/bin/activate` to activate the virtual environment
3. `pip3 install -r requirements.txt` to install the current dependencies within the venv
4. `flask run` to start the flask server and run the program

If you would like to start the program with prepopulated data to play around with, please run the following command in ipython:

1. `%run seed.py` to run the seed file and fill the database with dummy data

### Playing with the App:
Each Cupcake in the database has:
    - A flavor
    - A rating
    - A size (Small, Medium, Large)
    - An image URL
  
1. Clicking 'Cupcake World' in the navbar will redirect you to the home page
2. Clicking 'Add Cupcake' in the navbar will bring you down to the Add Cupcake Form at the bottom of the page
3. The search bar will return query results for cupcakes loosely matching the search term provided either by flavor, rating, or size.
4. You can delete any cupcake from the database, or view the cupcakes main page to edit its information.

### Tests
_This app is tested using **unittest**. Each API endpoint's functionality is tested, as well as the routes rendering html templates._

**tests.py** connects to a database named `cupcakes_test`. Be sure to create this database before running the tests file.
