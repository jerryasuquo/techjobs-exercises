const db = require("../db");
const request = require("supertest");
const app = require("../app");

beforeAll(async () => {
  await db.query("CREATE TABLE students (id SERIAL PRIMARY KEY, name TEXT)");
});

beforeEach(async () => {
  // seed with some data
  await db.query("INSERT INTO students (name) VALUES ('Elie'), ('Matt')");
});

afterEach(async () => {
  await db.query("DELETE FROM students");
});

afterAll(async () => {
  await db.query("DROP TABLE students");
  db.end();
});

describe("GET /students", () => {
  test("It responds with an array of students", async () => {
    const response = await request(app).get("/students");
    expect(response.body.length).toBe(2);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0].name).toBe("Elie");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /students", () => {
  test("It responds with the newly created student", async () => {
    const firstResponse = await request(app).post("/students").send({
      name: "New Student",
    });

    const newStudent = firstResponse.body;
    // make sure we add it correctly
    expect(newStudent).toHaveProperty("id");
    expect(newStudent.name).toBe("New Student");
    expect(firstResponse.statusCode).toBe(200);

    // make sure we have 3 students now
    const secondResponse = await request(app).get("/students");
    expect(secondResponse.body.length).toBe(3);
  });
});

describe("PATCH /students/1", () => {
  test("It responds with an updated student", async () => {
    const newStudentResponse = await request(app).post("/students").send({
      name: "Another one",
    });
    const updatedStudentResponse = await request(app)
      .patch(`/students/${newStudentResponse.body.id}`)
      .send({ name: "updated" });
    expect(updatedStudentResponse.body).toHaveProperty("name");
    expect(updatedStudentResponse.body.name).toBe("updated");
    expect(updatedStudentResponse.body).toHaveProperty("id");
    expect(updatedStudentResponse.statusCode).toBe(200);

    // make sure we have 3 students
    const response = await request(app).get("/students");
    expect(response.body.length).toBe(3);
  });
});

describe("DELETE /students/1", () => {
  test("It responds with a message of Deleted", async () => {
    const newStudent = await request(app).post("/students").send({
      name: "Another one",
    });
    const removedStudent = await request(app).delete(
      `/students/${newStudent.body.id}`
    );
    expect(removedStudent.body).toEqual({ message: "Deleted" });
    expect(removedStudent.statusCode).toBe(200);

    // make sure we still have 2 students
    const response = await request(app).get("/students");
    expect(response.body.length).toBe(2);
  });
});
