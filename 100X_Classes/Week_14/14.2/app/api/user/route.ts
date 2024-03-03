import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const cleint = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  cleint.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });
  return Response.json("user signed up");
}
