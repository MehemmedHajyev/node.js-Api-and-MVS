const pool = require('../config/db');

const getEducationStatisticData = async (year,doc_id) =>{
    const result = await pool.query('select * from FN_GETSTATISTICDETAILS($1,$2);',[year,doc_id]);
    return result.rows;
}

module.exports = {
    getEducationStatisticData
}