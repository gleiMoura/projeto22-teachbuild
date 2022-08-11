import joi from "joi";
import { SigninType } from "../repositories/authRepository";

const signinSchema = joi.object<SigninType>({
    type: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
});

export default signinSchema;