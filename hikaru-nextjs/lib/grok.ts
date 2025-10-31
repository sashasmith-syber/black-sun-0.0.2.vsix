import OpenAI from 'openai';

// Initialize OpenAI client with Grok API endpoint
const openai = new OpenAI({
  apiKey: process.env.GROK_API_KEY || '',
  baseURL: 'https://api.x.ai/v1',  // xAI endpoint for Grok
});

export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

/**
 * Generate a response from Grok AI
 * @param messages - Array of conversation messages
 * @param temperature - Controls randomness (0-1)
 * @param maxTokens - Maximum tokens in response
 * @returns AI-generated response
 */
export async function generatePrompt(
  messages: Message[],
  temperature: number = 0.7,
  maxTokens: number = 1024
): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'grok-beta',
      messages,
      temperature,
      max_tokens: maxTokens,
    });

    return completion.choices[0]?.message?.content || 'No response generated';
  } catch (error) {
    console.error('Grok AI Error:', error);
    throw new Error('Failed to generate response from Grok AI');
  }
}

/**
 * Stream a response from Grok AI
 * @param messages - Array of conversation messages
 * @returns Async generator for streaming response
 */
export async function* streamPrompt(
  messages: Message[],
  temperature: number = 0.7
): AsyncGenerator<string, void, unknown> {
  try {
    const stream = await openai.chat.completions.create({
      model: 'grok-beta',
      messages,
      temperature,
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        yield content;
      }
    }
  } catch (error) {
    console.error('Grok AI Streaming Error:', error);
    throw new Error('Failed to stream response from Grok AI');
  }
}

/**
 * Get a simple chat completion
 * @param userMessage - User's message
 * @param systemPrompt - Optional system prompt
 * @returns AI response
 */
export async function chat(
  userMessage: string,
  systemPrompt?: string
): Promise<string> {
  const messages: Message[] = [];
  
  if (systemPrompt) {
    messages.push({
      role: 'system',
      content: systemPrompt,
    });
  }
  
  messages.push({
    role: 'user',
    content: userMessage,
  });

  return generatePrompt(messages);
}
