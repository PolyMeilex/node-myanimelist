module.exports = (id:Number,request:String) => {
    const rp = require('request-promise-native');
    let requestS:String = '';
    

    if(request) {
        requestS = '/' + request;
    }

    return new Promise( (res, rej) => {
        rp(global['jikanBaseUrl']+`/character/${id}${requestS}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej("Error") )
    });
}