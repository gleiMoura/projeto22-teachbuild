import joi from "joi";
import { teacherType } from "../repositories/teacherRepository.js";

const teacherSchema = joi.object<teacherType>({
    name: joi.string().max(40).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    image: joi.string().uri().required(),
    text: joi.string().max(100).required(),
    mbtiId: joi.number().required(),
    disciplineId: joi.number().required(),
});

export default teacherSchema;