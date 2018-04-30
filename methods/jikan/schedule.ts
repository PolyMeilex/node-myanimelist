module.exports = (day:String) => {
    const rp = require('request-promise-native');

    return new Promise( (res, rej) => {
        rp(`https://api.jikan.moe/schedule/${day}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej("Error") )
    });
}