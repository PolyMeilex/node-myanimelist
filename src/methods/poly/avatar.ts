export default (name:string) =>{
    const rp = require('request-promise-native');
    const cheerio = require('cheerio');

    return new Promise( (res, rej) => {
        rp(`https://myanimelist.net/profile/${name}`)
        .then( res => cheerio.load(res) )
        .then( $ => $('img','div.user-image') )
        .then( img => img.attr('src') )
        .then( url => res(url) )
        .catch( err => rej("Image Not Found") )
    });
}