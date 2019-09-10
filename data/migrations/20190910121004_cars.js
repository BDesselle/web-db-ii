exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string("vin").unique().notNullable;
    tbl.string("title_status").notNullable;
    tbl.integer("mileage").notNullable;
    tbl.integer("year").notNullable;
    tbl.string("make").notNullable;
    tbl.string("model").notNullable;
    tbl.string("transmission_type").notNullable;
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("car-dealer");
};
