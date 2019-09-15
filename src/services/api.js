export default class Api {

    static instance;

    constructor(){
        if(Api.instance){return Api.instance;}
        Api.instance = this;
    }

    setUserProfileDetails = (userToken, authEmail, details) => {
        return fetch(this.lambdaUrl + 'users/' + authEmail, {
            method: 'PUT',
            headers: {
                'Authorization': userToken
            },
            body: JSON.stringify(details)
        }).then(response => response.json())
            .catch(err => {return err});
    };
}