import express from 'express';
import type { Request, Response, NextFunction} from 'express'
import { VandorLogin } from '../controllers/VandorController.ts';

const router = express.Router();

router.post('/login', VandorLogin);
router.get('/', (req: Request, res: Response, next: NextFunction) => {

    return res.json({message: 'Hello from vendor route'});
})

export { router as VandorRoute};