const express = require('express')
const router = express.Router()
const {registerUser,getUser, loginUser} = require('../controllers/userController.js')

const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/profile', protect, getUser)


module.exports = router