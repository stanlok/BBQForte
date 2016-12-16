"# BBQForte"

This was the collaborative web application created during my Spring 2016 semester at UMass Amherst, CS 326.
Other contributors: Ka Wo Fong, Jess Hendricks, Logan Rennick, Brendan Kelly, Matthew Zenzie

1) Run npm install in both "BBQForte/client" and "BBQForte/server".

2) Install MongoDB.

3) Create a folder named workshop-7-data in the parent directory "BBQForte/". This will store the data and be used by MongoDB.

4) Start the database with: $ mongod --dbpath workshop-7-data.
   NOTE: If you are on Windows, run "C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --dbpath workshop-7-data instead.

5) Run $ npm run watch in "BBQForte/client".

6) Run $ node src/server.js in "BBQForte/server".

7) Open a web browser and go to http://localhost:3000 to visualize the web app.
