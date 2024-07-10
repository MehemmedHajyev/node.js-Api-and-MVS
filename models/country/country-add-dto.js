class CountryAddDTO{
    constructor(requestData){
        this.sortCode = requestData.sortCode;
        this.name = requestData.name;
    }
}

module.exports = CountryAddDTO;