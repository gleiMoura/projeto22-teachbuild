import joi from "joi";

const teacherSchema = joi.object({
    name: joi.string().max(40).required,
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    image: joi.string().uri().required(),
    text: joi.string().max(100).required(),
    likeId: joi.number().required(),
    mbtiId: joi.number().required(),
    disciplineId: joi.number().required(),
});

export default teacherSchema;