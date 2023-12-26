const express = require('express')
const router = express.Router()
const {addParts,getParts, updateParts, deleteParts} = require('../controllers/partsController')

// const {protect} = require('../middleware/authMiddleware')

// router.route('/').get(protect, getComputer).post(protect, addComputer)
// router.route('/:id').put(protect, updateComputer).delete(protect, deleteComputer)


router.route('/').get(getParts).post(addParts)
router.route('/:id').put(updateParts).delete(deleteParts)

module.exports = router