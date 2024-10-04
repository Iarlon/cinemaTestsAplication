import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../base/baseTest.js';

export const options = { vus: 1, duration: "1s", iterations: 1 };
const baseChecks = new BaseChecks();
const baseUri = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseUri);

export function deleteAll() {
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT);
    
    baseChecks.checkStatusCode(resGet, 200);

    const movies = resGet.json();

    if (movies && movies.length > 0) {
        const movieIds = movies.map(movie => movie._id);
        
        console.log(`Excluindo filmes que sobraram...`);

        movieIds.forEach(id => {
            const resDel = baseRest.del(`${ENDPOINTS.MOVIE_ENDPOINT}/${id}`);
            baseChecks.checkStatusCode(resDel, 200);
        });
    }
}

export default function () {
}
