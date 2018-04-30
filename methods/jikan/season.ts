module.exports = (year:Number,season:String) => {
    const rp = require('request-promise-native');
    let seasonS:String = '';

    if(season) {
        seasonS = '/' + season;
    }

    return new Promise( (res, rej) => {
        rp(`https://api.jikan.moe/season/${year}${seasonS}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej("Error") )
    });
}