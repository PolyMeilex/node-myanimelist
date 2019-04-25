module.exports = (year:number,season:string) => {
    const rp = require('request-promise-native');
    let seasonS:String = '';

    if(season) {
        seasonS = '/' + season;
    }

    return new Promise( (res, rej) => {
        rp(global['jikanBaseUrl']+`/season/${year}${seasonS}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej(`Error: ${err}`) )
    });
}