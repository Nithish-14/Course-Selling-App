import mongoose from 'mongoose';

let alreadyDone = false;

export async function dbConnect() {
    if (alreadyDone) {
        return;
    }

    console.log("dbconnect")

    alreadyDone = true;
    await mongoose.connect('', { dbName: "courses" });
}
