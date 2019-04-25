export interface SearchFilter {
    page?: Number;
    limit?: Number;
}

export default (type:string,query:string,filter?:SearchFilter) => {
    const rp = require('request-promise-native');
    let queryS:String = '';
    let pageS:String = '';
    let limitS:String = ''; 

    if(query) {
        queryS = '?q=' + query;
        if (filter && filter.page) pageS = '&page=' + filter.page;
        if (filter && filter.limit) limitS = '&limit=' + filter.limit;
    }

    return new Promise( (res, rej) => {        
        rp(global['jikanBaseUrl']+`/search/${type}${queryS}${pageS}${limitS}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej(`Error: ${err}`) )
    });
}
