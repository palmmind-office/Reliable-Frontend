const multer  = require('multer')
const upload = multer()
const uploadSingle = upload.fields([
    { name: 'attachment', maxCount: 1 },
    { name: 'pan_copy', maxCount: 1 }
])

module.exports = uploadSingle