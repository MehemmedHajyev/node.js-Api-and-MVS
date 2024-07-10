class Country{
    constructor(row){
        this.id = row.id;
        this.sortCode= row.sort_code;
        this.name = row.name;
        this.deleted = row.deleted;
    }

    static mapAll(dbRows){
        const rows = [];
        for(const row of dbRows){
            const country = new Country(row);
            rows.push(country);
        }
        return rows;
    }

    static mapOne(row){
        const country = new Country(row);
        return country;
    }
}

module.exports = Country;