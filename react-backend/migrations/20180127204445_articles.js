exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', table => {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.string('title').notNullable()
    table.string('summary').notNullable()
    table.string('body', 200000).notNullable()
    table.string('image_url').notNullable().defaultsTo('https://images.unsplash.com/photo-1475440197469-e367ec8eeb19?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d07e497e8f90af29b9c3da6a02dfa4ea&auto=format&fit=crop&w=1950&q=80')
    table.string('sport').notNullable()
    table.integer('views').notNullable().defaultsTo(0)
    table.integer('likes').notNullable().defaultsTo(0)
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('articles')
};
