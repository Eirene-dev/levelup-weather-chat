'use client';

import { Message, useChat } from 'ai/react';
import { useEffect, useRef } from 'react';
import WeatherCard from './weather-card';
import { functionCallHandler } from './function-handlers';
import LoadingIndicator from './loading-indicator';
import { roleToColorMap } from './role-colors';
import SubmitButton from './submit-button';

export default function Chat() {
  const { messages, input, isLoading, handleInputChange, handleSubmit, stop } = useChat({
    api: '/api/weather',
    experimental_onFunctionCall: functionCallHandler,
  });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const renderMessages = () => messages.map((m: Message) => (
    <div key={m.id} className={`space-y-4 ${roleToColorMap[m.role]}`}>
      {m.content && <strong>{`${m.role}: `}</strong>}
      {m.role === 'function' ? <WeatherCard data={m.content} /> :
        (m.role !== 'assistant' || m.content) ? m.content : null}
      {m.content && <br />}
    </div>
  ));

  return (
    <div className="flex flex-col items-center justify-between w-full h-screen">
      <div className="w-full h-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col justify-between h-full">
          <div className="overflow-y-auto">
            {messages.length > 0 && renderMessages()}
          </div>
          {isLoading && <LoadingIndicator />}
          <form onSubmit={handleSubmit} className="flex w-full mt-4">
            <input
              ref={inputRef}
              className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
              value={input}
              placeholder="제주도 오늘의 날씨는 어때?"
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <SubmitButton isLoading={isLoading} isDisabled={!input.trim()} onStop={stop} />
          </form>
        </div>
      </div>
    </div>
  );
}
