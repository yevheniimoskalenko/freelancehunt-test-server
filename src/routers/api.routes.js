const { Router } = require("express");
const router = Router();

const { rss, fetchId } = require("../controllers/rss.controllers");

router.get("/rss", rss);
router.get("/fetchId/:id", fetchId);

module.exports = router;
