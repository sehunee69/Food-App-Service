import express from 'express';
import type { Request, Response, NextFunction} from 'express'

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {

    return res.json({message: 'Hello from vendor route'});
})

export { router as VandorRoute};