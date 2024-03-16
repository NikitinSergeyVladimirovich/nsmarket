'use server';

import { NextResponse } from "next/server";
import { QueryTypes } from "sequelize";
import sequelize from "@/app/service/db";
import { User } from "@/app/models/assositions";
import { Product } from "@/app/models/assositions";

export async function GET(req, { params }) {
  if (req.method !== "GET") {
      return new NextResponse(JSON.stringify({ success: false, error: "Method Not Allowed" }), {
          status: 405,
          headers: {
            "Content-Type": "application/json",
          },
      });
  }
  const products = await Product.findAll();
  return new NextResponse(JSON.stringify({ products }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
});


}
