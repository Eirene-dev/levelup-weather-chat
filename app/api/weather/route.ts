import {
  OpenAIStream,
  StreamingTextResponse,
  experimental_StreamData,
} from 'ai';
import OpenAI from 'openai';
import { type ChatCompletionCreateParams } from 'openai/resources/index.mjs';

// OpenAI API 클라이언트 생성
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// edge 런타임 설정
export const runtime = 'edge';

// 함수 정의
const functions: ChatCompletionCreateParams.Function[] = [
  {
    name: 'get_current_weather',
    description: 'Get the current weather.',
    parameters: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          description: 'The city and state, e.g. Seoul',
        },
        nation: {
          type: 'string',
          description: 'The country or nation of the location, e.g. S.Korea',
        },
        format: {
          type: 'string',
          enum: ['celsius', 'fahrenheit'],
          description: 'The temperature unit to use. Infer this from the users location.',
        },
        info: {
          type: 'string',
          description: 'the language of the nation, e.g. 한국어',
        },
      },
      required: ['location', 'nation', 'format', 'info'],
    },
  },
];

// POST 요청 처리
export async function POST(req: Request) {
  const { messages } = await req.json();

  // OpenAI 챗 완성 요청 생성
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-0613',
    stream: true,
    messages,
    functions,
  });

  // 스트리밍 데이터 초기화
  const data = new experimental_StreamData();
  const stream = OpenAIStream(response, {
    // 함수 호출 처리 콜백
    experimental_onFunctionCall: async ({ name, arguments: args }, createFunctionCallMessages) => {
      // 서버에서 처리 시 날씨 정보 처리 로직
    },
    onCompletion(completion) {
      console.log('completion', completion);
    },
    onFinal(completion) {
      data.close();
    },
    experimental_streamData: true,
  });

  return new StreamingTextResponse(stream, {}, data);
}
