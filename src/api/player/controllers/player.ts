import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::player.player', ({strapi}) => ({
    async findOne(ctx){
        const {id} = ctx.params
        const entity = await strapi.db.query('api::player.player').findOne({
            where: {slug: id},
            populate: ['image', 'competitions'],
            });
     const sanitizedEntity = await this.sanitizedOutput(entity, ctx)
     return this.transformResponse(sanitizedEntity);
    },
}))