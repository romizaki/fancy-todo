const express = require('express')
const router = express.Router()
const todoRouter = require('./todo')
const authRouter = require('./auth')
const CalendarController = require('../controllers/calendarController')

router.get('/', (req, res) => {
    res.send('Hello World!')
})  

router.get('/calendar', CalendarController.getCalendar)

router.use('/auth',authRouter)
router.use('/todos', todoRouter)

module.exports = router