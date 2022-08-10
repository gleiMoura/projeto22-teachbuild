import joi from "joi";

export interface SigninType {
    type: string,
    email: string,
    password: string,
}

const signinSchema = joi.object<SigninType>({
    type: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
});

export default signinSchema;