const path = require("path");

const uploadsFolderPath = path.join(
  __dirname,
  "../../public/assets/stations"
);

const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadsFolderPath);
  },
  filename(req, file, cb) {
    cb(
      null,
      // the name of the file is overwritten and will always be the same so that there is always only one file that represents the db
      `stations.csv`
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
      file.mimetype === "text/csv"
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
