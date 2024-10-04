import { BaseService } from "./baseService.js";
import http from 'k6/http';

export class BaseRest extends BaseService {
    constructor(baseUri) {
        super(baseUri);
    }

    post(endpoint, body, headers = {}, params = {}) {
        let uri = this.baseUri + endpoint;
        let options = this.buildOptions(headers, params)
        return http.post(uri, JSON.stringify(body), options)
    }
    
    del(endpoint, headers = {}, params = {}) {
        let uri = this.baseUri + endpoint;
        let options = this.buildOptions(headers, params)
        return http.del(uri, null, options)
    }
    
    get(endpoint, headers = {}, params = {}) {
        let uri = this.baseUri + endpoint;
        let options = this.buildOptions(headers, params)
        return http.get(uri, options)
    }

    put(endpoint, body, headers = {}, params = {}) {
        let uri = this.baseUri + endpoint;
        let options = this.buildOptions(headers, params);
        return http.put(uri, JSON.stringify(body), options);
    }

    buildOptions(headers = {}, params = {}) {
        return {
            headers: Object.assign({'Content-Type': 'application/json' }, headers),
            params: Object.assign({}, params)
        }
    }
}