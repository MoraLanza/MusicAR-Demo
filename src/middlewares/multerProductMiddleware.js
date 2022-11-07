const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, ('./public/image/products'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
      }
});
const multerProductMiddleware = multer({storage});

module.exports = multerProductMiddleware;