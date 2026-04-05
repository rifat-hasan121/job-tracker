import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI;


interface MongoooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global{
    var mongoose: MongoooseCache | undefined;

}

let cache: MongoooseCache = global.mongoose || {conn:null, promise:null};

if (!global.mongoose) {
    
    global.mongoose=cache;
}

async function connectDB() {
    if (!MONGODB_URI) {
    throw new Error("Please add your MongoDB URI to .env.local");
}

    if (cache.conn) {
        return cache.conn;
    }
    if (!cache.promise) {
        const opts={
            bufferCommands:false,
        }
        cache.promise=mongoose.connect(MONGODB_URI,opts).then((mongoose)=>mongoose);
    }
    try {
        cache.conn=await cache.promise;
    } catch (error) {
        cache.promise=null;
        throw error;
    }
    return cache.conn;
}

export default connectDB;