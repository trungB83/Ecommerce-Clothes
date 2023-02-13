import multer from 'multer';
import uniqid from 'uniqid';
import path from 'path';
const __dirname = path.resolve();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'src/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + uniqid() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
export default upload;
