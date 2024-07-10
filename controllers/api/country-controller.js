const CountryAddDTO = require('../../models/country/country-add-dto');
const countryService = require('../../services/country-service');

const getAllCountries = async(req,res)=>{
    const result = await countryService.getAllCountries();
    if(!result.success)
        res.status(400).json(result);
    else
        res.status(200).json(result);
}

const addCountry = async(req,res) =>{
    const countryAddDTO = new CountryAddDTO(req.body);
    const result = await countryService.addCountry(countryAddDTO);
    if(!result.success)
        res.status(400).json(result);
    else
        res.status(201).json(result);
}

module.exports = {
    getAllCountries,
    addCountry
}