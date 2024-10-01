import { sleep } from 'k6';
import { BaseChecks , BaseRest, ENDPOINTS, testConfig, } from '../../../../support/base/baseTest.js';
import moviePost from '../../../movies/create/moviePost.js';

export const options = {...testConfig.options.scenarios.smokeTestChangeMovie}
const baseChecks = new BaseChecks;
const baseUri = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseUri);

export function setup () {
    moviePost()
    
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)

    baseChecks.checkStatusCode(resGet, 200)
    
    return {filme: resGet.json()}
}

export default function(data) {
    const movies = data.filme
    let movie = movies[Math.floor(Math.random() * movies.length)];

    const payload = {
        title: `modificadooooo`,
        description: `Descrição modificada`,
        launchdate: 'launchDate',
        showtimes: ['oneDayAfterLaunchDate']
    }
     
    const resPut = baseRest.put(ENDPOINTS.MOVIE_ENDPOINT + `/${movie._id}`, payload)
    baseChecks.checkStatusCode(resPut, 200)
    sleep(1)
}

export function teardown() {
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT);

    baseChecks.checkStatusCode(resGet, 200);

    const movies = resGet.json();

    if (movies && movies.length > 0) {
        const movieIds = movies.map(movie => movie._id);

        movieIds.forEach(id => {
            console.log(`Excluindo filme com ID: ${id}`);
            const resDel = baseRest.del(ENDPOINTS.MOVIE_ENDPOINT + `/${id}`);
            
            baseChecks.checkStatusCode(resDel, 200);
        });
    }
}