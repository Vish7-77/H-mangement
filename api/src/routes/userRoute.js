const express = require("express");
const { signUpUser, signInUser, getUserData, getAllDocs, saveDocsPosition } = require("../controllers/userController");
const { auth } = require("../auth");
const router = express.Router();

router.post("/signup", signUpUser);
router.post("/signin", signInUser);
router.get("/me", auth, getUserData);
router.get("/doctors", auth, getAllDocs);
router.put("/doctor", auth, saveDocsPosition);

module.exports = router;
