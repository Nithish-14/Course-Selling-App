import mongoose from 'mongoose';

let alreadyDone = false;

export async function dbConnect() {
    if (alreadyDone) {
        return;
    }

    console.log("dbconnect")

    alreadyDone = true;
    await mongoose.connect('mongodb+srv://Nithish:1LTdXIsuPOuV22a8@cluterlearn.fukerl6.mongodb.net/?retryWrites=true&w=majority&appName=CluterLearn', { dbName: "courses" });
}