import OpenAI from 'openai';
import { Message } from './grok';

export type { Message };

// llama.cpp --server (and any OpenAI-compatible local endpoint) integration.
// Set LOCAL_LLM_BASE_URL in .env.local to point at your running server,
// e.g. http://localhost:8080/v1 for llama.cpp default.
const client = new OpenAI({
  apiKey: process.env.LOCAL_LLM_API_KEY || 'local', // required by SDK; ignored by most local servers
  baseURL: process.env.LOCAL_LLM_BASE_URL || 'http://localhost:8080/v1',
});

const MODEL = process.env.LOCAL_LLM_MODEL || 'local-model';

/**
 * Send a chat request to a locally running LLM server.
 * @param messages - Conversation history
 * @param temperature - Sampling temperature (0–1)
 * @param maxTokens - Maximum tokens to generate
 * @returns Generated text
 */
export async function chatLocal(
  messages: Message[],
  temperature: number = 0.7,
  maxTokens: number = 1024
): Promise<string> {
  try {
    const completion = await client.chat.completions.create({
      model: MODEL,
      messages,
      temperature,
      max_tokens: maxTokens,
    });
    return completion.choices[0]?.message?.content ?? 'No response generated';
  } catch (error) {
    console.error('Local LLM Error:', error);
    throw new Error('Failed to generate response from local LLM');
  }
}

/**
 * Stream a response from a locally running LLM server.
 * @param messages - Conversation history
 * @param temperature - Sampling temperature (0–1)
 * @returns Async generator yielding content chunks
 */
export async function* streamLocal(
  messages: Message[],
  temperature: number = 0.7
): AsyncGenerator<string, void, unknown> {
  try {
    const stream = await client.chat.completions.create({
      model: MODEL,
      messages,
      temperature,
      stream: true,
    });
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content ?? '';
      if (content) yield content;
    }
  } catch (error) {
    console.error('Local LLM Streaming Error:', error);
    throw new Error('Failed to stream response from local LLM');
  }
}
