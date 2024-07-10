const path = require("path");

const imageUploadsFolderPath = path.join(__dirname,"../../public/assets/images/profilePictures");
const csvUploadsFolderPath = path.join(__dirname,"../../public/assets/stations");

const multer = require("multer");

const imageStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, imageUploadsFolderPath);
  },
  filename(req, file, cb) {
    cb(
      null,
      `${path.parse(file.originalname).name}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// check the uploaded file type for security reasons
const uploadImage = multer({
  imageStorage,
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

const csvStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, csvUploadsFolderPath);
  },
  filename(req, file, cb) {
    cb(
      null,
      `${path.parse(file.originalname).name}`
    );
  },
});

// check the uploaded file type for security reasons
const uploadCSV = multer({
  csvStorage,
  // this line limits the file size
  limits: { fileSize: 50000000 },
  fileFilter: (req, file, cb) => {
    if (
      // these checks make sure that only these file types are allowed
      file.mimetype === "text/csv"
    ) {
      cb(null, true);  // DEBUG : I am sure the code goes up to this stage
    } else {
      cb(new Error("Invalid mime type"));
    }
    return null;
  },
});

module.exports = {
  uploadImage,
  uploadCSV
};
