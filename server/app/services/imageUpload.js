const path = require("path");

const uploadsFolderPath = path.join(
  __dirname,
  "../../public/assets/images/profilePictures"
);

const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadsFolderPath);
  },
  filename(req, file, cb) {
    cb(
      null,
      `${path.parse(file.originalname).name}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// check the uploaded file type for security reasons
const upload = multer({
  storage,
  // this line limits the file size
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    if (
      // these checks make sure that only these file types are allowed
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Invalid mime type"));
    }
    return null;
  },
});

module.exports = {
  upload,
};
