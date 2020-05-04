module.exports = (req, res, next) => {
    if(!req.user) {
        return res.status(401).end({ error: 'You must login!' })
    }
    next()
}