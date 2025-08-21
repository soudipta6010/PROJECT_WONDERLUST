// Using Joi for server side schema validation

const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().allow("", null),
        image: Joi.object({
            filename: Joi.string().allow("", null),
            url: Joi.string()
            .uri()
            .allow('')
            .default("https://images.unsplash.com/photo-1721369483526-62f48a00b949?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D")
        }),
        price: Joi.number().required().min(0),
        location: Joi.string().required(),
        country: Joi.string().required(),
        reviews: Joi.array().items(Joi.string()) 
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    }).required()
});