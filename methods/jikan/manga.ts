module.exports = (id:Number,request:String) => {
    const rp = require('request-promise-native');
    let requestS:String = '';
    let parameterS:String = '';

    if(request) {
        requestS = '/' + request;
    }

    return new Promise( (res, rej) => {
        rp(`https://api.jikan.moe/manga/${id}${requestS}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej("Error") )
    });
}