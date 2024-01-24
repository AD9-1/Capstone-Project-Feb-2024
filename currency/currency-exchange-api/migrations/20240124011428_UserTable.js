exports.up = function (knex) {
  return knex.schema.createTable("registerUser", (table) => {
    table.increments("id").primary();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.date("dob").notNullable();
    table.string("send_money"); // Use decimal or integer based on your needs
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("registerUser");
};
