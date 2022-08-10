import joi from "joi";

export interface Singin {
    email: String,
    password: String
}

const signinSchema = joi.object<Singin>({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export default signinSchema;