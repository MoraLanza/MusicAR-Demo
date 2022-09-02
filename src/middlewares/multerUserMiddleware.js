const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, ('./public/image/users'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
      }
});
const multerUserMiddleware = multer({storage});

module.exports = multerUserMiddleware;