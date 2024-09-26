const { faker } = require('./lib/node_modules/@faker-js/faker');
const fs = require('fs')


const quantidade = process.argv[2] || 1;

const movies = [];

const launchDate = faker.date.future({ years: 1, refDate: '2024-09-26T14:03:51.880Z' });

const oneDayAfterLaunchDate = new Date(launchDate);
oneDayAfterLaunchDate.setDate(oneDayAfterLaunchDate.getDate() + 1);


for(let i = 0; i < quantidade; i++) {
    const movie = {
        title: `${faker.word.adjective()} ${faker.word.noun()}`,
        description: `Descrição do movie: ${faker.lorem.sentence()}`,
        launchdate: launchDate,
        showtimes: [oneDayAfterLaunchDate]
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