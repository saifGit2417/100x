// Import the pg library
const { Client } = require("pg");

// to run postgres sql in docker locally run bel0w command
// any request coming to 5435 in my machine will go to 5432 to docker image running postgresql
// docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5435:5432 postgres

/*
below are common command to run docker

any image/software you wanna run in docker search for its image name on docker hub and run command like below

docker run image-name >>>>> docker run mongo
if you want to ruyn docker in background then add -d after run this means detached mode

docker run -d mongo

==========PORT MAPPING===========
how to make sure some request coming to your local machine will redirect to docker container
for that we have to do port mapping .. below is the command for that
docker run -d -p 27017:27017 mongo >>> docker run in detached mode i.e in background application 
-p stands for port mapping any request coming to 27017 to my local will get redirect to 27017 to my docker image that run mongo image

=========FIND HOW MANY IMAGE RUNNING IN MY DOCKER LOCALLY============
docker ps >>>>>>>> will give you the list of all images running locally
docker kill image_id >>> it wil that particular image runing on docker locally


*/

// Define your connection string (replace placeholders with your actual data)
const connectionString =
  "postgresql://postgres:mysecretpassword@localhost:5435/postgres";

// Create a new client instance with the connection string
const client = new Client({
  connectionString: connectionString,
});

// Connect to the database
client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected to the database");
  }
});

// Run a simple query (Example: Fetching the current date and time from PostgreSQL)
client.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows[0]);
  }

  // Close the connection
  client.end();
});
