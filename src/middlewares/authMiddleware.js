require('dotenv').config()
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {

    try {
        const Authorization = req.header("Authorization")

        if (Authorization) {

            const token = Authorization.split("Bearer ")[1]

            jwt.verify(token, process.env.JWT_SECRET)

            const { email } = jwt.decode(token)

            req.user = {
                email
            }

            next()
        } else {
            throw new Error('Authorization')
        }

    } catch (error) {
        next(error)
    }
}

module.exports = {
    authMiddleware
}

