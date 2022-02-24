import axios from 'axios';
import * as queryString from 'query-string';

class http {
    instance = null

    constructor(props) {
        this.instance = axios.create(props);
        this.requestInterceptors();
        this.responseInterceptors();
    }

    cancel() {
        const source = axios.CancelToken.source();
        return source;
    }

    requestInterceptors() {
        this.instance.interceptors.request.use(
            function(config) {
                return config;
            },
            function(error) {
                return Promise.reject(error);
            });
    }

    responseInterceptors() {
        this.instance.interceptors.response.use(
            function(response) {
                // Any status code that lie within the range of 2xx cause this function to trigger
                // Do something with response data
                return response.data;
            },
            function(error) {
                return Promise.reject(error);
            });
    }

    get(url, params = {}, config = {}) {
        const queryUrl = queryString.stringifyUrl({
            url: url,
            query: params
        });
        return this.instance.get(queryUrl, config);
    }
    post(url, params = {}, config = {}) {
        return this.instance.post(url, params, config);
    }
    put(url, params, config) {
        return this.instance.put(url, params, config);
    }
    delete(url, params, config) {
        return this.instance.put(url, params, config);
    }
}

const client = new http({
    baseURL: "/api"
});

export default client;