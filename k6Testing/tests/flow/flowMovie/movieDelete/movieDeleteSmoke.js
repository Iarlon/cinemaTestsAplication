import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';
import moviePost from '../../../../support/communs/moviePost.js';

export const options = testConfig.options.scenarios.smokeTestDeleteMovie
const baseChecks = new BaseChecks
const baseUri = testConfig.environment.hml.url
const baseRest = new BaseRest(baseUri)

export function setup() {
    moviePost()
}

export default function() {
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)
    const movies = resGet.json()
    
    let movie = movies[Math.floor(Math.random() * movies.length)];

    const resDel = baseRest.del(ENDPOINTS.MOVIE_ENDPOINT + `/${movie._id}`)
    baseChecks.checkStatusCode(resDel, 200)
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