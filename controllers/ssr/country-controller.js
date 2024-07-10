const CountryAddDTO = require('../../models/country/country-add-dto');
const CountryUpdateDTO = require('../../models/country/country-edit-dto');
const countryService = require('../../services/country-service');

const getCountryView = async (req, res) => {
    const result = await countryService.getAllCountries();
    if (result.success)
        res.render('country/index', {data:result.data});
    else
        res.render('country/index');

}

const getCountryAddView = async (req,res) =>{
    res.render('country/add');
}

const getCountryEditView = async (req,res) =>{
    const id = req.params.id;
    const result = await countryService.getOneCountry(id);
    if(result.success)
        res.render('country/edit',{data:result.data});
}

const addCountry = async (req,res) =>{
    const countryAddDto = new CountryAddDTO(req.body);
    const result = await countryService.addCountry(countryAddDto);
    if(result.success)
       res.redirect('/countries');

}

const updateCountry = async (req,res) =>{
    const countryUpdateDto = new CountryUpdateDTO(req.body);
    const result = await countryService.updateCountry(countryUpdateDto);
    if(result.success)
        res.redirect('/countries');

}

const deleteCountry = async (req,res) =>{
    const id = req.params.id;
    const result = await countryService.deleteCountry(id);

    if(result.success)
        res.redirect('/countries');
}

module.exports = {
    getCountryView,
    getCountryAddView,
    getCountryEditView,
    addCountry,
    updateCountry,
    deleteCountry
}