declare module 'openai' {
  class OpenAI {
    constructor(opts: {
      apiKey: string;
      baseURL?: string;
    });
    chat: {
      completions: {
        create(params: any): Promise<{
          choices: Array<{
            message: {
              content: string;
            };
          }>;
        }>;
      };
    };
  }
  export default OpenAI;
}
