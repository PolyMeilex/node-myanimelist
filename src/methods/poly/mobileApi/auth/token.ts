export default (username:string,password:string,grant_type:string = "password",client_id:string = '6114d00ca681b7701d1e15fe11a4987e') => {
    const rp = require("request-promise-native");
    const baseURL = require("../mobileApis").baseURL;

    const request = { 
        method: 'POST',
        url: baseURL+'auth/token',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        form: {
            client_id,
            username,
            password,
            grant_type
        } 
    };

    return new Promise( (res, rej) => {
        rp(request).then( body =>console.log(body) )
    })   
}