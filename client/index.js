import axios from 'axios';


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
            function (config) {
                // Do something before request is sent
                return config;
            },
            function (error) {
                // Do something with request error
                return Promise.reject(error);
            });
    }

    responseInterceptors() {
        this.instance.interceptors.response.use(
            function (response) {
                // Any status code that lie within the range of 2xx cause this function to trigger
                // Do something with response data
                return response.data;
            },
            function (error) {
                // Any status codes that falls outside the range of 2xx cause this function to trigger
                // Do something with response error
                return Promise.reject(error);
            });
    }

    get(url, params, config) {
        return this.instance.get(url, {
            params: params,
            ...(config ?? {}),
        });
    }
    post(url, params, config) {
        return this.instance.post(url, {
            data: params,
            ...(config ?? {}),
        });
    }
    put(url, params, config) {
        return this.instance.put(url, {
            data: params,
            ...(config ?? {}),
        })
    }
    delete(url, params, config) {
        return this.instance.put(url, {
            data: params,
            ...(config ?? {}),
        })
    }
}

export default http;

