import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function GET() {
  return NextResponse.json({
    name: "Saif Ur Rahman",
    email: "saif@ntt.com",
  });
}

// in post man api should like this
//  http://localhost:3000/api/admindetails?name="md sohel"

export async function POST(req: NextRequest) {
  try {
    // this is how to access body values
    const body = await req.json();
    console.log("body: ", body);
    const user = await prisma.adminDeatils.create({
      data: { usserName: body.username, email: body.email },
    });

    // // this is how to access req headers
    // const authorization = req.headers.get("authorization");
    // console.log("authorization: ", authorization);

    // // this is how to access req parameters
    // const nameParams = req.nextUrl.searchParams.get("name");
    // console.log("nameParams: ", nameParams);

    return NextResponse.json({
      details: user,
      // authorization: authorization,
      // params: nameParams,
    });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json(
      {
        message: "something went wrong",
      },
      {
        status: 400,
      }
    );
  }
}
