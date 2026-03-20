import type { Request, Response, NextFunction} from 'express'
import type { CreateVandorInput } from '../dto/Vandor.dto.ts'
import { Vandor } from '../models/Vandor.ts';
import { GeneratePassword, GenerateSalt } from '../utility/PasswordUtility.ts';

const findVandor = async (id: string | undefined, email?: string) => {

    if(email) return Vandor.findOne({ email });
    if(id) return Vandor.findById(id);
    return null;
}

export const CreateVandor = async (req: Request, res: Response, next: NextFunction) => {

    const { name, address, pincode, foodType, email, 
        password, ownerName, phone } = <CreateVandorInput>req.body;

    const existingVandor = await findVandor(undefined, email);

    if(existingVandor !== null) {
        return res.json({ "message": 'A vandor already exists with that email ID'});
    }

    const salt = await GenerateSalt();
    const userPassword = await GeneratePassword(password, salt);

    const CreateVandor = await Vandor.create({
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: userPassword,
        salt: salt,
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailability: false,
        coverImages: [],

    })

    return res.json(CreateVandor);
    
}

export const GetVandors = async (req: Request, res: Response, next: NextFunction) => {

    const vandors = await Vandor.find();

    if(vandors !== null) {
        return res.json(vandors);
    }

    return res.json({ "Message": "Vandors data not available"});
    
}

export const GetVandorById = async (req: Request<{ id: string}>, res: Response, next: NextFunction) => {

    const { id } = req.params;

    const vandor = await findVandor(id);

    if(vandor !== null) {
        return res.json(vandor);
    }

    return res.json({ "Message": "Vandors data not available"});
    
}