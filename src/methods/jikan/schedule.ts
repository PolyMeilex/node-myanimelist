export default (day:string) => {
    const rp = require('request-promise-native');

    return new Promise( (res, rej) => {
        rp(global['jikanBaseUrl']+`/schedule/${day}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej(`Error: ${err}`) )
    });
}