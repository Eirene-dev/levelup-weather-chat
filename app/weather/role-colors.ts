import { Message } from 'ai/react';

export const roleToColorMap: Record<Message['role'], string> = {
  system: 'text-red-500',
  user: 'text-black',
  function: 'text-gray-500',
  tool: 'text-purple-500',
  assistant: 'text-blue-500',
  data: 'text-orange-500',
};
