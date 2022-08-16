import joi from "joi";

const requestSchema = joi.object({
    teacherId: joi.number().required(),
    hourstart: joi.string().regex(/([01]?[0-9]|2[0-3]):[0-5][0-9]/).required(),
    valid: joi.boolean(),
    day: joi.string().max(3).required()
});

export default requestSchema;