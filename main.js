const figlet = require('figlet')
let array = require('./sterotypes.json')

async function PRINT(name, desc) {
    console.log()
    let ascii = figlet(name, {
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted'
      },
      function(err, data) {
        if (err) {
          console.error
        } else {
            return data
        }
    })
    console.log(`${figlet(name, {
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted'
      },
      function(err, data) {
        if (err) {
          console.error
        } else {
            return data
        }
    })}\nI'm a ${name} so I must ${desc}.`)
};

array.map((a) => {
    PRINT(a.name, a.desc)
});