const { Router } = require("express");
const { requireAuth } = require("../middleware/auth");

const router = Router();

router.get("/", (req, res) => {
  res.json({ status: "ok", version: "1.0.0" });
});

router.get("/auth", requireAuth, (req, res) => {
  res.json({
    status: "ok",
    user: { id: req.user.id, email: req.user.email },
  });
});

module.exports = router;
