/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fruits').truncate()//truncate resets primamry keys
  await knex('fruits').insert([
    {fruit_name: 'apple', avg_weight_oz: 12.5, delicious: null, color: 'red'},
    {fruit_name: 'orange', avg_weight_oz: 4.03, delicious: true, color: 'orange'},//sqlite does NOT have boolean but it is ok to put them because it gets changed in the database into an integer: 1 = TRUE and 0 = FALSE!!
    {fruit_name: 'pear', avg_weight_oz: 10.2, delicious: 0, color: 'green'},
  ]);//we NEVER write IDs. We let the database do it FOR US
};
