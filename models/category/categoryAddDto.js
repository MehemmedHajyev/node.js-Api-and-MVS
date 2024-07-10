class CategoryAddDTO{
    constructor(requestData){
        this.code = requestData.code;
        this.name = requestData.name;
        this.parentId = requestData.parentId;
    }
}

module.exports = CategoryAddDTO;