import { auth, clientPromise } from "@/lib/auth/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest } from "next/server";

const handler = toNextJsHandler(auth);

export async function GET(req: NextRequest) {
    await clientPromise;
    return handler.GET(req);
}

export async function POST(req: NextRequest) {
    await clientPromise;
    return handler.POST(req);
}