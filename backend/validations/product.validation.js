import Joi from "joi"

export const createProductSchema = Joi.object({
    name: Joi.string().trim().min(3).required(),
    price: Joi.number().positive().required(),
    image: Joi.string().uri().required()
})

export const updateProductSchema = Joi.object({
    name: Joi.string().trim().min(3),
    price: Joi.number().positive(),
    image: Joi.string().uri()
}).min(1)
