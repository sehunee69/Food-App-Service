import type { Request, Response, NextFunction } from "express";
import type { VandorLoginInput } from "../dto/Vandor.dto.ts";
import { findVandor } from "./AdminController.ts";
import { ValidatePassword } from "../utility/PasswordUtility.ts";

export const VandorLogin = async (req: Request, res: Response, next: NextFunction) => {
    
    const { email, password} = <VandorLoginInput>req.body;

    const existingVandor = await findVandor(undefined, email);

    if(!existingVandor) {
        return res.status(404).json({ message: 'Vendor not found'});
    }

    const isValid = await ValidatePassword(password, existingVandor.password);

    if(!isValid) {
        return res.status(401).json({ message: "Login credentials not valid"});
    }

    return res.json({ message: 'Login Succesful', vendor: existingVandor});
}