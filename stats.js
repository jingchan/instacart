let Knex = require('knex');
let moment = require('moment');

let args = process.argv.slice(2);
let startDate = args[0];
let endDate = args[1];
console.log(`Finding data between dates: ${startDate} and ${endDate}`);

let knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: 'db/applicants.sqlite3'
  },
  useNullAsDefault: true,
})

knex.raw(`SELECT COUNT(*) as count, DATE(created_at, 'weekday 0', '-6 day') as week, workflow_state FROM applicants WHERE DATE(created_at)>= DATE('${startDate}') AND DATE(created_at) <= DATE('${endDate}') GROUP BY week, workflow_state`)
.then((res) => {
  if(res.length > 0){
    let cols = Object.keys(res[0]);
    console.log(cols.join(' | '));
    res.forEach(row => {
      console.log(cols.map(c => row[c]).join(' | '));
    });
  }
})
.then(() => knex.destroy())
