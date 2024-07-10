class CountryUpdateDTO{
    constructor(requestData){
        this.id = requestData.id;
        this.sortCode = requestData.sortCode;
        this.name = requestData.name;
    }
}

module.exports = CountryUpdateDTO;