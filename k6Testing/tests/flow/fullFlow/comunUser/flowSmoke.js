import { BaseChecks , BaseRest, ENDPOINTS, testConfig, } from '../../../../support/base/baseTest.js';
import { sleep } from 'k6';
import moviePost from '../../../../support/communs/moviePost.js'

export const options = testConfig.options.scenarios.smokeTestFlow
const baseChecks = new BaseChecks;
const baseUri = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseUri);

export function setup() {
    moviePost()
}


export default function() {
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)

    const filme = resGet.json()
    const movieGet = filme[Math.floor(Math.random() * filme.length)]

    const resGetId = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT + `/${movieGet._id}`);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const payload = {
        movieId: movieGet._id,
        userId: movieGet._id + 'User',
        seatNumber: getRandomInt(99),
        price: getRandomInt(60),
        showtime: '2024-09-25T18:08:47.428Z'
    }
    const resPost = baseRest.post(ENDPOINTS.TICKET_ENDPOINT, payload)
    sleep(1)
    

    baseChecks.checkStatusCode(resGet, 200)

    baseChecks.checkStatusCode(resPost, 201)

    baseChecks.checkStatusCode(resGetId, 200)
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