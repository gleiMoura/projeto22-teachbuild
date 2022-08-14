import jwt from "jsonwebtoken";

export default function verifyToken(authorization: string) {
    if (!authorization) {
        throw {
            response: {
                message: "Authorization problem",
                status: 422
            }
        }
    }

    const token = authorization?.replace("Bearer ", "");

    jwt.verify(token, process.env.SECRET, (err) => {
        if (err) {
            throw {
                response: {
                    message: "Invalid authentication!",
                    status: 401
                }
            }
        };
    });
};