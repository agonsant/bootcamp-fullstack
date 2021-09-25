import express from 'express';
import counter from './counter.middleware.js';

const router = express.Router();


router.use(counter);
router.use(counter);
router.use(counter);
router.get('/',counter,counter,[counter,counter,counter], (req, res) => {
    res.send(`HE pasado por ${req.midCounter ?? 0} middlewares`);
})

export default router;