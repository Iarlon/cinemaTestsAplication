const { faker } = require('./lib/node_modules/@faker-js/faker/dist/locale/pt_BR.cjs');
const fs = require('fs')


const quantidade = process.argv[2] || 1;

const movies = [];

for(let i = 0; i < quantidade; i++) {
    const movie = {
        title: `${faker.food.fruit()} ${faker.internet.domainWord()}`,
        description: `Descrição do movie: ${faker.lorem.sentence()}`,
        launchdate: faker.date.future({ years: 1, refDate: '2024-09-26T14:03:51.880Z' }),
        showtimes: faker.date.future({ years: 1, refDate: '2024-09-26T14:03:51.880Z' })
    }
    movies.push(movie)
}

const data = {
    movies: movies
}


fs.writeFileSync('movie.json', JSON.stringify(data, null, 2), error => {
	if(error) {
		console.error(error)
	}
})