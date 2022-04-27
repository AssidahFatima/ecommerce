
const express = require("express");
const router = express.Router();
const categoryController = require('../../../controller/dashboard/CategoriesController');
const multer = require("multer");
const path = require('path');


// Image Upload setting
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/uploads/'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/all-category", categoryController.getAllCategory);
router.post(
  "/add-category",
  upload.single("cImage"),
  categoryController.postAddCategory
);
router.post("/edit-category", categoryController.postEditCategory);
router.post(
  "/delete-category",categoryController.getDeleteCategory
);

module.exports = router;














































/*const express = require("express");
const router = express.Router();
const categoryCtrl = require('../../../controller/dashboard/CategoriesController');


router.route('/category')
    .get(categoryCtrl.getCategories)
    .post( categoryCtrl.createCategory);

router.route('/category/:id')
    .delete( categoryCtrl.deleteCategory)
    .put( categoryCtrl.updateCategory);


module.exports = router;*/