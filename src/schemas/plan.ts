import Joi from 'joi';
import joi from 'joi';

const planSchema = joi.object({
    name: Joi.string().required(),
    minutes: Joi.number().required(),
    timestamps: Joi.any().forbidden()
});

export { planSchema };