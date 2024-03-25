import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  connectionString:
    "postgresql://saif.navneettoptech:l3bqYNC6IVPi@ep-throbbing-hall-a5ujuley.us-east-2.aws.neon.tech/100x_class?sslmode=require",
});

async function createUserTable() {
  try {
    await client.connect();
    const result = await client.query(
      `CREATE TABLE users (
          name varchar(250),
          address varchar(500),
          phoneNumber varchar(20),
          age INT
      )`
    );
    console.log("Table created successfully!");
    console.log("result: ", result);
  } catch (error) {
    console.error("Error creating table:", error);
  } finally {
    await client.end();
  }
}

// createUserTable();

async function insertData() {
  try {
    await client.connect();
    // using sql injection method to insert data into table , for safety reason , do ready about sql injection
    const insertData = `INSERT INTO users (name , address,phoneNumber,age) VALUES($1,$2,$3,$4)`;
    const values = [
      "35 year old guy",
      "35 year old guy's address",
      9876543210,
      35,
    ];
    // for (let i = 0; i < 5; i++) {
    await client.query(insertData, values);
    // }
    // console.log("result: ", result);
  } catch (error) {
    console.log("error happened: ", error);
  } finally {
    await client.end();
  }
}

// insertData();

async function deleteAllData() {
  try {
    client.connect();
    const deleteQuery = `DELETE FROM users`;
    let result = await client.query(deleteQuery);
    console.log("result: ", result);
  } catch (error) {
    console.log("error: ", error);
  } finally {
    client.end();
  }
}

// deleteAllData();

async function findData() {
  try {
    client.connect();
    let findData = `SELECT * FROM users WHERE age > $1`;
    const parameter = [15];
    let result = await client.query(findData, parameter);
    const foundData = result?.rows;
    if (foundData.length > 0) {
      console.log("congratulations we found the match", foundData);
    } else {
      console.log("no data found with parameters", parameter);
    }
  } catch (error) {
    console.log("error: ", error);
  } finally {
    client.end();
  }
}
// findData();
