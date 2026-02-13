const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const articleController = require("../controllers/articleControoler");

router.get("/articles", authMiddleware, articleController.list);
router.get("/my", authMiddleware, articleController.myArticles);

router.get("/create", authMiddleware, articleController.showForm);
router.post("/create", authMiddleware, articleController.create);

router.get("/edit/:id", authMiddleware, articleController.edit);
router.post("/update/:id", authMiddleware, articleController.update);

router.get("/delete/:id", authMiddleware, articleController.delete);

module.exports = router;
