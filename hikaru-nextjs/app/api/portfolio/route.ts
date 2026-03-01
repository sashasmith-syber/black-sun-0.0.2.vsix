import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { PortfolioData } from "@/types/portfolio";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "portfolio.json");
    const fileContents = await readFile(filePath, "utf8");
    const data: PortfolioData = JSON.parse(fileContents);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading portfolio data:", error);
    return NextResponse.json(
      { error: "Failed to load portfolio data" },
      { status: 500 }
    );
  }
}
