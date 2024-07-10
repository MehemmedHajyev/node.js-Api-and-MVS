const pool = require('../config/db');
const Country = require('../models/country/country');
const { DATA_LISTED_SUCCESSFULLY, DATA_ADDED_SUCCESSFULLY, DATA_UPDATED_SUCCESSFULLY, DATA_DELETED_SUCCESSFULLY } = require('../utils/constants/messages');
const { SuccessResult } = require('../utils/results/result');

const getAllCountries = async () =>{
    const result = await pool.query('select * from countries c where c.deleted = 0 order by c.sort_code');
    return new SuccessResult(DATA_LISTED_SUCCESSFULLY,Country.mapAll(result.rows));
}

const getOneCountry = async id =>{
    const result = await pool.query('select * from countries c where c.deleted = 0 and c.id = $1',[id]);
    return new SuccessResult(DATA_LISTED_SUCCESSFULLY,Country.mapOne(result.rows[0]));
}

const addCountry = async country =>{
    const result = await pool.query('insert into countries(sort_code,name) values ($1,$2) returning *',[country.sortCode,country.name]);
    return new SuccessResult(DATA_ADDED_SUCCESSFULLY,result.rows[0]);
}

const updateCountry = async country =>{
    const result = await pool.query('update countries set sort_code = $1,name = $2 where id = $3 returning *',[country.sortCode,country.name,country.id]);
    return new SuccessResult(DATA_UPDATED_SUCCESSFULLY,Country.mapOne(result.rows[0]));
}

const deleteCountry = async id =>{
    const result = await pool.query('update countries set deleted = id where id = $1',[id]);
    return new SuccessResult(DATA_DELETED_SUCCESSFULLY);
}




module.exports = {
    getAllCountries,
    getOneCountry,
    addCountry,
    updateCountry,
    deleteCountry
}