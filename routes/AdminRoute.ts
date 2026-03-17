import express from 'express'
import type { Request, Response, NextFunction } from 'express';
import { CreateVandor, GetVandor, GetVandorById } from '../controllers/AdminController.ts';
import { getConstantValue } from 'typescript';

const router = express.Router();

router.post('/vandor', CreateVandor);
router.post('/vandors', GetVandor);
router.post('/vandor/:id', GetVandorById);


router.get('/', (req: Request, res: Response, next: NextFunction) => {

    return res.json({message: 'Hello from admin route'});
});

export { router as AdminRoute};

