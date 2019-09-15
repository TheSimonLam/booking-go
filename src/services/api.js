export default class Api {

    endpoint = "https://www.rentalcars.com/LocationAutocomplete.do?&preflang=en&domain=rc.com&cor=gb";
    numberOfResults = 6;
    static instance;

    constructor(){
        if(Api.instance){return Api.instance;}
        Api.instance = this;
    }

    getPickUpLocations = (input) => {
        return fetch(this.endpoint + `&rows=${this.numberOfResults}&term=${input}`, {
            method: 'GET'
        }).then(response => response.json())
            .catch(err => {return err});
    };
}