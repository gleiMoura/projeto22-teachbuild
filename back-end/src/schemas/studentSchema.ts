import joi from "joi";
import { studentType } from "../repositories/authRepository.js";

const studentSchema = joi.object<studentType>({
    name: joi.string().required(),
    email: joi.string().required(),
    image: joi.string().uri().required(),
    text: joi.string().required(),
    mbtiId: joi.number().required(),
		disciplineId: joi.number().required(),
    password: joi.string().required()
});

export default studentSchema;