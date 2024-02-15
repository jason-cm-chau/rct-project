const express = require('express')
const router = express.Router()
const {registerUser,getUser, loginUser} = require('../controllers/userController.js')

const {protect} = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getUser, protect)


module.exports = router