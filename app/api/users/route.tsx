import { currentUser } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function Post(req:NextRequest) {
    const user = await currentUser();
}