/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('fruits', table => {
        table.increments('fruits_id')//this is the schortcut to created primary ID's
        table.string('fruit_name', 100).notNullable().unique()//.unique makes it where you can't have 2 pieces of data with the same name
        table.float('avg_weight_oz').notNullable()//can use float or decimal
        //notNullable means that to add another record to the table, you HAVE to provide those criterias
        //--production data base is NEVER migrated down because it destroys data. Only development DB is migrated down!
        table.boolean('delicious')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('fruits')
};
