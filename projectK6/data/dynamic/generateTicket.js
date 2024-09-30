const { faker } = require('./lib/node_modules/@faker-js/faker/dist/locale/pt_BR.cjs');
const fs = require('fs')


const quantidade = process.argv[2] || 1;

const tickets = [];

for(let i = 0; i < quantidade; i++) {
    const ticket = {
        ticketId: faker.database.mongodbObjectId(),
        userId: faker.database.mongodbObjectId(),
        seatNumber: faker.number.int({ min: 0, max: 99 }),
        price: faker.number.int({ min: 0, max: 60 }),
        showtime: '2024-09-25T18:08:47.428Z'
      }
    tickets.push(ticket)
}

const data = {
    tickets: tickets
}


fs.writeFileSync('ticket.json', JSON.stringify(data, null, 2), error => {
	if(error) {
		console.error(error)
	}
})