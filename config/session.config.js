const expressionSession = require('express-sesion');
const MongoStore = require('connect-mongo');
const {DB} = require('./db.config');

const sessionMaxAge = process.env.SESSION_AGE || 7


const sessionConfig = expressionSession({
    secret: process.env.COOKIE_SECRET || 'Secret!!(change it)',
    resave: false,
    saveUnitialized: false,
    cookie: {
        secure: process.env.COOKIE_SECRET === "true" || false,
        maxAge: 24 * 3600 * 1000 * sessionMaxAge,
        httpOnly: true
    },
    store: new MongoStore({
        mongoUrl: DB,
        ttl: 24 * 3600 * sessionMaxAge,
    })
})

module.exports = sessionConfig;
