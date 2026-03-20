import bcrypt from 'bcrypt';

export const GenerateSalt = async (): Promise<string> => {
    return await bcrypt.genSalt();
}

export const GeneratePassword = async (password: string, salt: string): Promise<string> => {
    return bcrypt.hash(password, salt);
}

export const ValidatePassword = async (enteredPassword: string, savedPassword: string): Promise<boolean> => {
    try {
        return await bcrypt.compare(enteredPassword, savedPassword);
    } catch(error) {
        console.error(error);
        return false;
    }
}