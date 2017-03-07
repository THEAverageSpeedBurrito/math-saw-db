
exports.up = function(knex, Promise) {
  return knex.schema.createTable('components', (table) => {
    table.increments();
    table.integer('project').references('id').inTable('projects').onDelete('CASCADE').index();
    table.string('name').defaultTo('');
    table.integer('length').notNullable().defaultTo(1);
    table.integer('width').notNullable().defaultTo(1);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('components');
};
