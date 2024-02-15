const express = require('express')
const router = express.Router()
const {addParts,getParts, updateParts, deleteParts} = require('../controllers/partsController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getParts).post(protect, addParts)
router.route('/:id').put(protect, updateParts).delete(protect, deleteParts)

module.exports = router