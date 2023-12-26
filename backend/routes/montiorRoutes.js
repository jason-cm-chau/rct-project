const express = require('express')
const router = express.Router()
const {addMonitor,getMonitor, updateMonitor, deleteMonitor} = require('../controllers/monitorController')

// const {protect} = require('../middleware/authMiddleware')

// router.route('/').get(protect, getComputer).post(protect, addComputer)
// router.route('/:id').put(protect, updateComputer).delete(protect, deleteComputer)


router.route('/').get(getMonitor).post(addMonitor)
router.route('/:id').put(updateMonitor).delete(deleteMonitor)

module.exports = router