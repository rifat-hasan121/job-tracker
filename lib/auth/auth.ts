import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!, {
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
});

export const clientPromise: Promise<MongoClient> = client.connect();

const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client,
    }),
    emailAndPassword: {
        enabled: true,
    }
});
