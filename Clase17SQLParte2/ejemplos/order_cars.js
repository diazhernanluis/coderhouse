const {options} = require("./options/MariaDB");
const knex = require("knex")(options);


knex.from("cars").select("name", "price").orderBy("price", "desc")
    .then( rows => {
        for(row of rows){
            console.log(`${row["name"]}: ${row["price"]}`)
        }
    })
    .catch( e => {console.log(e); throw e;})
    .finally( () => knex.destroy())
