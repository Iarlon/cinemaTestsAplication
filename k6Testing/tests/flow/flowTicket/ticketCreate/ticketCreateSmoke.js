import { sleep } from 'k6';
import { BaseChecks , BaseRest, ENDPOINTS, testConfig, } from '../../../../support/base/baseTest.js';

export const options = {...testConfig.options.scenarios.smokeTestCreateTicket}
const baseChecks = new BaseChecks;
const baseUri = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseUri);

export function setup() {
    const payload = {
            "title": "blueberry short-design",
          "description": "Descrição do movie: Enim natus nulla blanditiis voluptas.",
          "launchdate": "2024-10-12T06:44:30.894Z",
          "showtimes": "k"
        }
    const res = baseRest.post(ENDPOINTS.MOVIE_ENDPOINT, payload)
    baseChecks.checkStatusCode(res, 201)
    
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)

    baseChecks.checkStatusCode(resGet, 200)
    
    return {filme: resGet.json()}
}


export default function(data) {
    const filme = data.filme
    const filmeAleatório = filme[Math.floor(Math.random() * filme.length)]

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const payload = {
        movieId: filmeAleatório._id,
        userId: filmeAleatório._id + 'User',
        seatNumber: getRandomInt(99),
        price: getRandomInt(60),
        showtime: '2024-09-25T18:08:47.428Z'
    }
    
    const res = baseRest.post(ENDPOINTS.TICKET_ENDPOINT, payload)
        
    baseChecks.checkStatusCode(res, 201)
}

export function teardown() {
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT);

    baseChecks.checkStatusCode(resGet, 200);

    const movies = resGet.json();

    if (movies && movies.length > 0) {
        const movieIds = movies.map(movie => movie._id);
        
        console.log(`Excluindo filmes que sobraram...`);

        movieIds.forEach(id => {
            const resDel = baseRest.del(ENDPOINTS.MOVIE_ENDPOINT + `/${id}`);
            
            baseChecks.checkStatusCode(resDel, 200);
        });
    }
}