import { UserRole } from "@prisma/client";
import NextAuth ,  { type DefaultSession }  from "next-auth";
export type ExtendUser = DefaultSession["user"] & {
  
  role : UserRole
}


declare module "next-auth" {
  interface Session {
    user : ExtendUser;
  } 
}

import {JWT } from "next-auth/jwt";
declare module "next-auth/jwt" {
    interface JWT {
      user? : "ADMIN" | "USER";
    } 
  }
