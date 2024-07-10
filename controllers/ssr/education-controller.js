const educationService = require('../../services/education-service');

const getEducationView = async (req,res) =>{
    res.render('education/index');
} 

const getEducationAddView = async(req,res) =>{
    const {year,doc_id} = req.query;
    const data = await educationService.getEducationStatisticData(year,doc_id);
    res.render('education/add',{years:getLast30Years(),data:data});
}

function getLast30Years() {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i < 30; i++) {
        years.push({year:currentYear - i});
    }
    return years;
}


module.exports = {
    getEducationAddView,
    getEducationView
}