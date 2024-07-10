class User{
    constructor(row){
        this.id = row.id;
        this.username= row.username;
        this.password = row.password;
        this.isActive = row.isActive;
        this.deleted = row.deleted;
    }

    static mapAll(dbRows){
        const rows = [];

        for(const row of dbRows){
            const user = new User(row);
            rows.push(user);
        }

        return rows;
    }

    static mapOne(row){
        const user = new User(row);
        return user;
    }
}