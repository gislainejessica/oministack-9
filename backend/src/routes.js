const express = require('express')
const multer = require('multer')

const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/sessionController')
const SpotController = require('./controllers/spotController')
const DashboardController = require('./controllers/dashboardController')
const ReservaController = require('./controllers/reservaController')

const routes = express.Router()
const upload =  multer(uploadConfig)

routes.post('/sessions', SessionController.store)

routes.post('/spots', upload.single('imagem'), SpotController.store)
routes.get('/spots', SpotController.index)

routes.post('/spots/:spot_id/reserva', ReservaController.store)
routes.get('/dashboard', DashboardController.show)

module.exports = routes