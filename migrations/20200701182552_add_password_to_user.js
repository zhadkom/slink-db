exports.up = function (knex) {
  return knex.schema.table('users', (table) => {
    table.text('password')
  })
}

exports.down = function (knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('password')
  })
}
