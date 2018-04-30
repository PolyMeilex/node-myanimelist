module.exports = (type:String,page:Number,subtype:String) => {
    const rp = require('request-promise-native');

    let pageS:String = '';
    let subtypeS:String = '';

    if(page) {
        pageS = '/' + page;
        if(subtype) {
            subtypeS = '/'+subtype;
        }
    }

    return new Promise( (res, rej) => {
        rp(`https://api.jikan.moe/top/${type}${pageS}${subtypeS}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej("Error") )
    });
}