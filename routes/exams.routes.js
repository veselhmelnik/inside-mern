const {Router} = require('express');
const Exam = require('../models/Exam');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const exams = await Exam.find();
        res.json(exams);
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
});
router.post('/add', async (req, res) => {

})

module.exports = router;