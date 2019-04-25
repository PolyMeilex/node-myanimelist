export default (username:string,request?:string,argument?:any,argument2?:any) => {
    const rp = require('request-promise-native');
    let requestS:String = '';

    let argumentS:String = '';
    let argument2S:String = '';

    if(request) {
        requestS = '/' + request;
        if(argument) {
            argumentS = '/' + argument;

            if(argument2) {
                argument2S = '/' + argument2;
            }
        }
    }

    return new Promise( (res, rej) => {
        rp(global['jikanBaseUrl']+`/user/${username}${requestS}${argumentS}${argument2S}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej("Error, Maybe friends page don't exsist? ") )
    });
}