exports.up = function (knex) {
  return knex.schema.createTable('role', (table) => {
    table.increments()
    table.text('name').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('role')
}
