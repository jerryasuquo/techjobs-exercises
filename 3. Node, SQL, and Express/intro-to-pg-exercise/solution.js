/*
Exercise
    * Write the necessary function to find a student by its id. This function should return the found student.
    * Write the necessary function to update a student. This function should return the updated student.
    * Write the necessary function to delete a student. This function should return the updated student.
    * Modify the students table so that null names can not be inserted.
*/

const { Client } = require("pg");
const dotenv = require("dotenv");
const client = new Client({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

dotenv.config();
client.connect();

async function findStudentById(id) {
  try {
    const result = await client.query("SELECT * FROM students WHERE id=($1)", [
      id,
    ]);
    console.log(result.rows);
    await client.end();
  } catch (e) {
    console.log(e.message);
  }
}

// findStudentById(1);

async function updateStudentById(newVal, id) {
  try {
    const result = await client.query(
      "UPDATE students SET name=$1 WHERE id=$2 RETURNING *",
      [newVal, id]
    );
    console.log(result.rows);
    await client.end();
  } catch (e) {
    console.log(e.message);
    await client.end();
  }
}

// updateStudentById('Elie', 1)

async function deleteStudentsById(id) {
  try {
    const result = await client.query(
      "DELETE FROM students WHERE id=$1 RETURNING *",
      [id]
    );
    console.log(result.rows);
    await client.end();
  } catch (e) {
    console.log(e);
    await client.end();
  }
}
// deleteStudentsById(2)

/*
Modifying the students table to reject null names:
ALTER TABLE students
ALTER COLUMN name
SET NOT NULL;
*/
