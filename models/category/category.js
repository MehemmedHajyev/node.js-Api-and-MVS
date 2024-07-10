class Category {
    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.code = row.code;
        this.deleted = row.deleted;
        this.parent_id = row.parent_id;
    }

    static mapAll(dbRows) {
        const rows = [];
        for (const row of dbRows) {
            const category = new Category(row);
            rows.push(category);
        }
        return rows;
    }

    static mapOne(row) {
        const category = new Category(row);
        return category;
    }
}

module.exports = Category;