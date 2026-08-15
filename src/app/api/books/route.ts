import { NextResponse } from "next/server";

import booksData from "@/data/data.json";

export async function GET() {
    return NextResponse.json(booksData)
}