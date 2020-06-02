const jwt = require('../lib/jwt')

function auth ( request, respopnse, next){
    console.log('auth middleware')
    const { authorization : token } = request.headers
    console.log(' token: ', token)

    try {
        const decodedToken = jwt.verify(token)
        console.log('decodedToken:'), decodedToken
        next()
    } catch (error) {
        respopnse.status(401)
        respopnse.json({
            success: false,
            message: 'Unauthorized'
        })
    }
}

module.exports = auth