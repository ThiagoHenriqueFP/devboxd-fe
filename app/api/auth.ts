/* eslint-disable @typescript-eslint/no-explicit-any */
import { authOptions } from "@/auth.config"; // Adjust the import path if needed
import NextAuth from "next-auth";
import { NextRequest } from "next/server";

const handler = async (
  req: NextRequest,
  { params }: { params: { nextauth: string[] } }
) => {
  return NextAuth(req as any, { params } as any, authOptions);
};

export { handler as GET, handler as POST };
