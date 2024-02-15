const express = require('express')
const router = express.Router()
const {addMonitor,getMonitor, updateMonitor, deleteMonitor} = require('../controllers/monitorController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getMonitor).post(protect, addMonitor)
router.route('/:id').put(protect, updateMonitor).delete(protect, deleteMonitor)

module.exports = router