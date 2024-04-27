// Import the pg library
const { Client } = require("pg");


// to run postgres sql in docker locally run bel0w command
// any request coming to 5435 in my machine will go to 5432 to docker image running postgresql
// docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5435:5432 postgres



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
