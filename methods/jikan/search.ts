module.exports = (type:String,query:String,page:Number,limit:Number) => {
    const rp = require('request-promise-native');
    let queryS:String = '';
    let pageS:String = '';
    let limitS:String = '';

    if(query) {
        queryS = '/' + query;
        if(page) pageS = '&page=' + page;
        if(limit) limitS = '&limit=' + limit
    }

    return new Promise( (res, rej) => {        
        rp(global['jikanBaseUrl']+`/search/${type}?q=${queryS}${pageS}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej("Error") )
    });
}