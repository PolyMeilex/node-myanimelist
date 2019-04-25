export default (producer_id:number,page?:number) => {
    const rp = require('request-promise-native');
    let pageS:String = '';
    

    if(page) {
        pageS = '/' + page;
    }

    return new Promise( (res, rej) => {
        rp(global['jikanBaseUrl']+`/producer/${producer_id}${pageS}`)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej(`Error: ${err}`) )
    });
}