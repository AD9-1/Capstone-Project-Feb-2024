
exports.seed = async function (knex) {
  await knex("registerUser").del();
  await knex("registerUser").insert([
    { id: 1, email: "aparna@gmail.com", password: "aparna", dob: "1991-09-29" },
    { id: 2, email: "john@gmail.com", password: "john", dob: "1982-08-24" },
    { id: 3, email: "jack", password: "Jacki", dob: "2000-05-01" },
  ]);
};
