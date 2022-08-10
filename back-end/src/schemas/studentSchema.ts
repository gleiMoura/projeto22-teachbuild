import joi from "joi";

const studentSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    image: joi.string().uri().required(),
    text: joi.string().required(),
    mbtiId: joi.number().required(),
    password: joi.string().required()
});

export default studentSchema;