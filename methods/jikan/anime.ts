module.exports = (id:Number,request:String,parameter:Number) => {
    const rp = require('request-promise-native');
    let requestS:String = '';
    let parameterS:String = '';

    if(request) {
        requestS = '/' + request;
        if(parameter) parameterS = '/' + parameter;
    }

    return new Promise( (res, rej) => {
        rp(global['jikanBaseUrl']+`/anime/${id}${requestS}${parameterS}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej("Error") )
    });
}