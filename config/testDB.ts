import mongoose from 'mongoose'

const MONGO_URI='mongodb+srv://admin:jan172004@vandor.hsxbxp2.mongodb.net/?appName=vandor'

mongoose.connect(MONGO_URI).then(() => {
    console.log("Successfully connected to mongoDB!")
    process.exit(0);
})
.catch((err: unknown) => {
    const msg = err instanceof Error ? err.message : String(err);   
    console.error("Failed to connect to mongoDB!", msg);
    process.exit(1);
});