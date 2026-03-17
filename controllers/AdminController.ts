import type { Request, Response, NextFunction} from 'express'
import type { CreateVandorInput } from '../dto/Vandor.dto.ts'
import { Vandor } from '../models/Vandor.ts';

export const CreateVandor = async (req: Request, res: Response, next: NextFunction) => {

    const { name, address, pincode, foodType, email, 
        password, ownerName, phone } = <CreateVandorInput>req.body;

    const CreateVandor = await Vandor.create({
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: password,
        salt: '',
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailability: false,
        coverImages: [],

    })

    return res.json({ name, address, pincode, foodType, email, password, ownerName, phone })
    
}

export const GetVandor = (req: Request, res: Response, next: NextFunction) => {

    
}

export const GetVandorById = (req: Request, res: Response, next: NextFunction) => {

    
}