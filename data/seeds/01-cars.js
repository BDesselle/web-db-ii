exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "BACHG64X08R803808",
          title_status: "Clean",
          mileage: 125000,
          year: 2000,
          make: "BMW",
          model: "Z3",
          transmission_type: "Manual"
        },
        {
          vin: "1GNKRJKD0EJ233017",
          title_status: "Clean",
          mileage: 86000,
          year: 2001,
          make: "Ford",
          model: "Mustang",
          transmission_type: "Manual"
        },
        {
          vin: "KMHTC4AE9EU714727",
          title_status: "Rebuilt",
          mileage: 190000,
          year: 1995,
          make: "Mazda",
          model: "RX7",
          transmission_type: "Manual"
        },
        {
          vin: "3GCPKTE26DG281193",
          title_status: "Clean",
          mileage: 900,
          year: 2019,
          make: "Cadillac",
          model: "CTS-V",
          transmission_type: "Manual"
        },
        {
          vin: "SCBZP14CXTCX50394",
          title_status: "Clean",
          mileage: 1200,
          year: 2019,
          make: "Dodge",
          model: "Charger",
          transmission_type: "Automatic"
        },
        {
          vin: "1FMCU04112KA71263",
          title_status: "Clean",
          mileage: 37000,
          year: 2006,
          make: "Nissan",
          model: "350z",
          transmission_type: "Manual"
        },
        {
          vin: "JH4KA4670KC024543",
          title_status: "Salavaged",
          mileage: 320000,
          year: 1995,
          make: "Acura",
          model: "Integra",
          transmission_type: "Automatic"
        },
        {
          vin: "JH4DA9360PS004131",
          title_status: "Clean",
          mileage: 100,
          year: 2020,
          make: "BMW",
          model: "M2",
          transmission_type: "Automatic"
        },
        {
          vin: "1FVACWCS96HV81220",
          title_status: "Clean",
          mileage: 95000,
          year: 1995,
          make: "BMW",
          model: "325i",
          transmission_type: "Manual"
        },
        {
          vin: "WDBJF65J1YB039105",
          title_status: "Clean",
          mileage: 210000,
          year: 1994,
          make: "Nissan",
          model: "240sx",
          transmission_type: "Manual"
        }
      ]);
    });
};
