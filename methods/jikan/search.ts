module.exports = (type:String,query:String,filter:SearchFilter) => {
    const rp = require('request-promise-native');
    let queryS:String = '';
    let pageS:String = '';
    let limitS:String = ''; 

    if(query) {
        queryS = '?q=' + query;
        if(filter.page) pageS = '&' + filter.page + '=';
        if(filter.limit) limitS = '&' + filter.limit + '=';
    }

    return new Promise( (res, rej) => {        
        rp(global['jikanBaseUrl']+`/search/${type}${queryS}${pageS}${limitS}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej("Error") )
    });
}

interface SearchFilter {
    page?: Number;
    limit?: Number;
}