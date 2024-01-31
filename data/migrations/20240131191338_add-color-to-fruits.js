/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.table('fruits', table => {
        table.string('color', 50).defaultTo('green')
    })
};
//Had to add a second migration file to add the color because for instance when a database or application is out of development and into the production stage you can NOT migrate down!!!!!!! This would be your only option to add nex things!
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.table('fruits', table => {
        table.dropColumn('color')
    })
};
