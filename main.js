const figlet = require('figlet')
const chalk = require('chalk')
let array = require('./sterotypes.json')
let array2 = require('./sterotypes2.json')

const ignoreChars = /[^!-~]/;

function rainbow(str, offset) {
	if (!str || str.length === 0) {
		return str;
	}

	const hueStep = 360 / str.replace(ignoreChars, '').length;

	let hue = offset % 360;
	const chars = [];
	for (const c of str) {
		if (c.match(ignoreChars)) {
			chars.push(c);
		} else {
			chars.push(chalk.hsl(hue, 100, 50)(c));
			hue = (hue + hueStep) % 360;
		}
	}

	return chars.join('');
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function animateString(str) {
	console.log();
	for (let i = 0; i < 360 * 5; i++) {
		console.log('\u001B[1F\u001B[G ', rainbow(str, i));
		await sleep(10); // eslint-disable-line no-await-in-loop
	}
}

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
            animateString(`${data}\n\nI'm a ${name} so I must ${desc}.\n\n`)
            console.log()
        }
    })
};

array.map((a) => {
    array2.map((a) => {
        PRINT(a.name, a.desc)
        array.push(array2)
    });
    PRINT(a.name, a.desc)
});