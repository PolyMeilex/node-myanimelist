module.exports = () => {
    const rp = require('request-promise-native');

    return new Promise( (res, rej) => {
        rp(global['jikanBaseUrl']+`/season/archive`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej("Error") )
    });
}