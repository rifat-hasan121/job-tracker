import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI;


interface MongoooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global{
    var mongoose: MongoooseCache | undefined;

}

let cached: MongoooseCache = global.mongoose || {conn:null, promise:null};

if (!global.mongoose) {
    
    global.mongoose=cached;
}

async function connectDB() {
    if (!MONGODB_URI) {
    throw new Error("Please add your MongoDB URI to .env.local");
}

    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts={
            bufferCommands:false,
        }
        cached.promise=mongoose.connect(MONGODB_URI,opts).then((mongoose)=>mongoose);
    }
    try {
        cached.conn=await cached.promise;
    } catch (error) {
        cached.promise=null;
        throw error;
    }
    return cached.conn;
}

export default connectDB;