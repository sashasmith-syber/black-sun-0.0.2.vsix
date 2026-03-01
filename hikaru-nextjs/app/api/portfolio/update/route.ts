import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { writeFile, readFile } from "fs/promises";
import path from "path";
import { authOptions } from "@/lib/auth";
import { PortfolioData } from "@/types/portfolio";

// Input sanitization function
function sanitizeInput(input: any): any {
  if (typeof input === "string") {
    // Remove any potential XSS vectors
    return input
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;");
  }
  
  if (Array.isArray(input)) {
    return input.map(sanitizeInput);
  }
  
  if (typeof input === "object" && input !== null) {
    const sanitized: any = {};
    for (const key in input) {
      sanitized[key] = sanitizeInput(input[key]);
    }
    return sanitized;
  }
  
  return input;
}

// Validation function
function validatePortfolioData(data: any): data is PortfolioData {
  if (!data || typeof data !== "object") return false;
  
  // Validate profile
  if (!data.profile || typeof data.profile !== "object") return false;
  if (typeof data.profile.name !== "string") return false;
  if (typeof data.profile.title !== "string") return false;
  if (typeof data.profile.email !== "string") return false;
  if (typeof data.profile.github !== "string") return false;
  if (typeof data.profile.bio !== "string") return false;
  
  // Validate expertise array
  if (!Array.isArray(data.expertise)) return false;
  
  // Validate projects array
  if (!Array.isArray(data.projects)) return false;
  
  // Validate socialLinks array
  if (!Array.isArray(data.socialLinks)) return false;
  
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    const body = await request.json();
    
    // Validate the data structure
    if (!validatePortfolioData(body)) {
      return NextResponse.json(
        { error: "Invalid data structure" },
        { status: 400 }
      );
    }
    
    // Sanitize the input
    const sanitizedData = sanitizeInput(body);
    
    // Read the current data to create a backup
    const filePath = path.join(process.cwd(), "data", "portfolio.json");
    const backupPath = path.join(process.cwd(), "data", "portfolio.backup.json");
    
    try {
      const currentData = await readFile(filePath, "utf8");
      await writeFile(backupPath, currentData, "utf8");
    } catch (error) {
      console.error("Error creating backup:", error);
    }
    
    // Write the new data
    await writeFile(
      filePath,
      JSON.stringify(sanitizedData, null, 2),
      "utf8"
    );
    
    return NextResponse.json({ 
      success: true, 
      message: "Portfolio updated successfully" 
    });
  } catch (error) {
    console.error("Error updating portfolio data:", error);
    return NextResponse.json(
      { error: "Failed to update portfolio data" },
      { status: 500 }
    );
  }
}
