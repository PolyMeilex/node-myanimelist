module.exports = (id:number,request:string) => {
    const rp = require('request-promise-native');
    let requestS:String = '';
    let parameterS:String = '';

    if(request) {
        requestS = '/' + request;
    }

    return new Promise( (res, rej) => {
        rp(global['jikanBaseUrl']+`/manga/${id}${requestS}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej(`Error: ${err}`) )
    });
}