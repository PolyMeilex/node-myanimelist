module.exports = (type:string,genre_id:number,page:number) => {
    const rp = require('request-promise-native');
    let genre_idS:String = '';
    let pageS:String = '';

    if(genre_id) {
        genre_idS = '/' + genre_id;
        if(page) pageS = '/' + page;
    }

    return new Promise( (res, rej) => {
        rp(global['jikanBaseUrl']+`/genre/${type}${genre_idS}${pageS}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej(`Error: ${err}`) )
    });
}