export class BaseModelservice {

    async create(modelName: string, objectToInstert: any) {
        return await global[modelName].create(objectToInstert)
    }
    async findOne(modelName: string, queryOptions: any) {
        return await global[modelName].findOne({ where: queryOptions })
    }

    async findAll(modelName: string) {
        return await global[modelName].findAll();
    }

    async findAllWithOptions(modelName: string, queryOptions: any) {
        return await global[modelName].findAll({ where: queryOptions })
    }

    async findAndJoin(modelName: string, queryOptions: any, joinOption: any) {
        
        let modelToJoinWith = joinOption.join.modelName
        let condition = joinOption.join.On;
        await Mobile_users.findOne({
            where: queryOptions, include: [
                { model: global[modelToJoinWith], where: condition }
            ]
        })
    }


}

module.exports = new BaseModelservice();