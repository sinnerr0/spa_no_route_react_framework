import 'whatwg-fetch';

/**
 * 네트워크 통신 모듈
 * @param {string} method GET/POST
 * @param {string } url
 * @param {object} requestData
 * @param {object} headers
 * @param {number} timeout
 * @returns {promise}
 */
export default function (method = 'GET', url, requestData = {}, headers, timeout = 0) {
    let body;
    if(requestData){
        if (method && method.toUpperCase() === 'POST') {
            body = JSON.stringify(requestData);
        } else {
            // url params generating
            url += '?' + Object.keys(requestData).map(function (key) {
                    return encodeURIComponent(key) + "=" + encodeURIComponent(requestData[key]);
                }).join('&');
        }
    }
    let promise;
    if (timeout > 0) {
        let fetchPromise = fetch(url, {method: method, headers: headers, body: body});
        let cancelpromise = new Promise(function (resolve, reject) {
            setTimeout(() => reject(new Error('request timeout')), timeout);
        });
        promise = Promise.race([fetchPromise, cancelpromise]);
    } else {
        promise = fetch(url, {method: method, headers: headers, body: body});
    }
    return promise;
}