import Joi from 'joi';
import joi from 'joi';

const simulationSchema = joi.object({
    origin: Joi.string().required(),
    destination: Joi.string().required(),
    minutes: Joi.number().required(),
    id_plan: Joi.string().guid().required()
});

export { simulationSchema as simulationSchema }