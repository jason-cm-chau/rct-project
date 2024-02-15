const express = require('express')
const router = express.Router()
const {addComputer,getComputer, updateComputer, deleteComputer} = require('../controllers/computerController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getComputer).post(protect, addComputer)
router.route('/:id').put(protect, updateComputer).delete(protect, deleteComputer)

module.exports = router