'use server';
import { NextResponse } from "next/server";
import { QueryTypes } from "sequelize";
import sequelize from "@/app/service/db";
import {Test} from "@/app/models/test.model"
// import { Product } from "@/app/models/products.model";

export async function GET(req, { params }) {
  console.log('123', Test); 
  if (req.method !== "GET") {
      return new NextResponse(JSON.stringify({ success: false, error: "Method Not Allowed" }), {
          status: 405,
          headers: {
            "Content-Type": "application/json",
          },
      });
  }

}
