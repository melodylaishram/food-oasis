const router = require("express").Router();
const faqController = require("../controllers/faq-controller");

router.get("/", faqController.getAll);
router.get("/language/:language", faqController.getAllByLanguage);
router.get("/faq/:id", faqController.getById);
router.get("/identifier/:identifier", faqController.getByIdentifier);
router.post("/", faqController.post);
router.put("/faq/:id", faqController.put);
router.delete("/", faqController.remove);

module.exports = router;
