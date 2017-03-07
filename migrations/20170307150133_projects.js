
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table) => {
    table.increments();
    table.string('code').notNullable();
    table.string('name').notNullable().defaultTo('');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
