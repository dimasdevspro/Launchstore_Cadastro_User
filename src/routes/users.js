const express = require('express')
const routes = express.Router()

const SessionController = require('../app/controllers/SessionController')
const UserController = require('../app/controllers/UserController')

const Validator = require('../app/validators/user')
// // login/logout
// routes.get('/login', Sessioncontroller.loginForm)
// routes.post('/login', Sessioncontroller.login)
// routes.post('/logout', Sessioncontroller.logout)

// // reset password / forgot
// routes.get('/forgot-passowrd', Sessioncontroller.forgotForm)
// routes.get('/password-reset', Sessioncontroller.resetForm)
// routes.post('/forgot-passowrd', Sessioncontroller.forgot)
// routes.post('/password-reset', Sessioncontroller.reset)

// // user register

routes.get('/register', UserController.registerForm)
routes.post('/register', Validator.post, UserController.post)

routes.get('/', UserController.show)
// routes.put('/', UserController.update)
// routes.delete('/', UserController.delete)


module.exports = routes