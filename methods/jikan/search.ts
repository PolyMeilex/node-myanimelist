module.exports = (type:String,query:String,page:Number) => {
    const rp = require('request-promise-native');
    let queryS:String = '';
    let pageS:String = '';

    if(query) {
        queryS = '/' + query;
        if(page) pageS = '/' + page;
    }

    return new Promise( (res, rej) => {        
        rp(`https://api.jikan.moe/search/${type}${queryS}${pageS}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej("Error") )
    });
}