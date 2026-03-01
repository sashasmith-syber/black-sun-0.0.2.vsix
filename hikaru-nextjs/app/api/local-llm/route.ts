import { NextRequest, NextResponse } from 'next/server';
import { chatLocal, Message } from '@/lib/local-llm';

export const runtime = 'nodejs'; // local server calls require Node.js runtime (not edge)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, temperature, maxTokens } = body;

    // Validate request
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // Validate that local LLM is configured
    if (!process.env.LOCAL_LLM_ENABLED || process.env.LOCAL_LLM_ENABLED !== 'true') {
      return NextResponse.json(
        { error: 'Local LLM not enabled. Set LOCAL_LLM_ENABLED=true in .env.local' },
        { status: 503 }
      );
    }

    // Generate response from local LLM server
    const response = await chatLocal(
      messages as Message[],
      temperature || 0.7,
      maxTokens || 1024
    );

    return NextResponse.json({
      success: true,
      response,
      provider: 'local-llm',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Local LLM API Error:', error);

    return NextResponse.json(
      {
        error: 'Failed to generate response from local LLM',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(_request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
