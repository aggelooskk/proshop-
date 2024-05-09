import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename(req, file, cb) {
    cb(
      null,
      `$(file.fieldname)-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function chechFileType(req, file, cb) {
  const filetypes = /jpg|jpeg|png/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error("Images only!"), false);
  }
}

const upload = multer({ storage });

router.post("/", upload.single("image"), (req, res) => {
  res.send({
    message: "Image uploaded successfully",
    image: `/${req.file.path}`,
  });
});

export default router;
