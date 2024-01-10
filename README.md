

## LevelUp-Weather-Chat: 프로젝트 소개
"LevelUp-Weather-Chat"는 AI 챗봇과의 통합을 통해 날씨 정보를 제공하는 웹 애플리케이션입니다. 이 프로젝트는 "레벨업 리액트 프로그래밍 with Next.js" 책의 12장에서 상세하게 다루어집니다. 본 프로젝트는 현대적인 웹 기술과 AI 챗봇을 결합하여 사용자에게 새로운 상호작용 방식을 제공합니다.

## 기능 설명

- **웹 애플리케이션 스타일링 및 메인 레이아웃 구성**: 사용자 친화적인 UI/UX 디자인을 적용하고 메인 레이아웃을 구성합니다.
- **OpenAI API와 버셀 AI SDK 알아보기**: AI 챗봇을 구현하기 위해 필요한 OpenAI API와 Vercel AI SDK에 대한 이해를 높입니다.
- **날씨 대화에서 구조화된 데이터 추출**: OpenAI의 Functions를 사용하여 날씨 관련 대화에서 구조화된 데이터를 추출합니다.
- **챗봇 UI 구현**: 현재 날씨 정보를 제공하는 챗봇의 컴포넌트 UI를 구현합니다.
- **날씨 AI 챗봇 구현 완성**: 사용자 질문에 대한 날씨 정보를 제공하는 AI 챗봇을 완성합니다.
- **추가적인 고려사항**: 프로젝트 확장 및 개선을 위한 추가적인 아이디어와 방향을 제시합니다.

"LevelUp-Weather-Chat" 프로젝트를 통해 사용자는 AI 기술을 활용한 실시간 날씨 정보 제공 서비스의 구현 방법을 학습하고, 이를 통해 웹 애플리케이션 개발의 심도 있는 지식을 얻을 수 있습니다.


## 기술 스택

"LevelUp-Weather-Chat" 프로젝트는 AI 기능과 스트리밍 채팅 UI를 구축하기 위해 다음과 같은 기술 스택과 라이브러리를 사용합니다:

- **리액트 (React)**: 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리
- **타입스크립트 (TypeScript)**: 자바스크립트에 정적 타입 기능을 추가하는 언어
- **Next.js**: 서버 사이드 렌더링 및 정적 사이트 생성을 지원하는 리액트 프레임워크

### AI 및 스트리밍 라이브러리:
- **버셀 AI SDK**: AI 기반의 스트리밍 텍스트 및 채팅 UI를 구축하기 위한 라이브러리. SWR 기반의 리액트, 스벨트, 뷰, 솔리드를 지원하며, LangChain, OpenAI, Anthropic, Cohere, Hugging Face, Fireworks, Replicate 등 다양한 AI 서비스와의 통합을 지원합니다. Node.js, 서버리스, 엣지 런타임 환경에서 사용 가능하며, 스트리밍 응답 후 데이터베이스 저장 콜백 기능을 포함합니다.
- **OpenAI Node API Library**: 자바스크립트 환경에서 OpenAI REST API에 접근하기 위한 라이브러리. 타입스크립트를 포함하며, OpenAPI 사양을 기반으로 생성되었습니다. GPT-3 등 OpenAI의 자연어 처리 모델을 활용하여 웹 애플리케이션에 AI 기능을 통합할 수 있습니다.

이러한 기술 스택과 라이브러리는 "LevelUp-Weather-Chat" 프로젝트의 AI 챗봇 통합과 스트리밍 채팅 UI 구축에 필수적입니다.


## 환경 변수 설정

"LevelUp-Weather-Chat" 프로젝트를 실행하기 위해서는 특정 환경 변수들이 필요합니다. 이를 위해서는 다음 단계를 따라야 합니다.

### OpenAI 설정
1. OpenAI의 API를 사용하기 위해서는 먼저 [OpenAI의 결제 계정 활성화 페이지](https://platform.openai.com/account/billing/overview)에서 결제 계정을 활성화해야 합니다.
2. 그 후, [OpenAI의 API 키 관리 페이지](https://platform.openai.com/account/api-keys)에서 OpenAI API 키를 생성합니다.
3. 생성된 API 키를 `OPENAI_API_KEY` 환경 변수로 설정합니다.
   ```
   OPENAI_API_KEY="your-openai-api-key"
   ```

### OpenWeatherMap 설정
1. OpenWeatherMap API 키를 받기 위해서는 OpenWeatherMap 웹사이트에서 계정을 등록하고 API 키를 생성해야 합니다.
2. 생성된 OpenWeatherMap API 키를 `NEXT_PUBLIC_OPENWEATHERMAP_KEY` 환경 변수로 설정합니다.
   ```
   NEXT_PUBLIC_OPENWEATHERMAP_KEY="your-openweathermap-api-key"
   ```

### 환경 변수 설정

"LevelUp-Weather-Chat" 프로젝트를 로컬 환경에서 개발하려면 특정 환경 변수가 필요합니다. 이 변수들은 프로젝트의 구성과 실행에 중요한 역할을 합니다.

#### 설정 방법
1. 프로젝트의 루트 디렉토리에서 `.env.example` 파일을 찾습니다.
2. 이 파일을 `.env.local`로 복사합니다.
   ```
   cp .env.example .env.local
   ```
3. `.env.local` 파일을 열고 필요한 환경 변수들을 실제 환경에 맞게 채웁니다.
4. `.env.local` 파일에 입력된 환경 변수들은 로컬 개발 환경에 적용됩니다.

### 주의 사항:
- 환경 변수에는 민감한 정보가 포함되므로 이를 공개하지 않도록 주의해야 합니다.
- `.env.local` 파일에 이러한 변수들을 저장하고 프로젝트에 포함시키지 않도록 해야 합니다.
- 이러한 설정을 통해 AI 챗봇과 날씨 정보 기능이 올바르게 작동합니다.

## 설치 및 실행 방법
1. 필요한 소프트웨어: Node.js, npm
2. 저장소 복제
3. 의존성 설치
   ```
   npm install
   ```
4. 로컬 서버 실행
   ```
   npm run dev
   ```
5. 브라우저에서 `http://localhost:3000` 접속


## 문제 해결 및 Q/A
본 프로젝트 뿐만 아니라 "레벨업 리액트 프로그래밍 with Next.js" 책에 대한 모든 질문과 답변은 [https://reactnext-central.xyz/levelup](https://reactnext-central.xyz/levelup) 웹 페이지에서 진행됩니다. 이 페이지를 통해 궁금한 점을 해결하고 다른 사용자들과 지식을 공유할 수 있습니다.


## 라이선스 및 저작권 정보
본 프로젝트는 MIT 라이선스 하에 제공됩니다. 자세한 내용은 `license.md` 파일을 참조하세요.

## 참고 자료

본 "LevelUp-Weather-Chat" 프로젝트는 [Vercel SDK 문서](https://sdk.vercel.ai/docs)에 있는 코드를 기반으로 개발되었습니다. 이 문서에서 제공하는 기본적인 라이브러리 사용법과 날씨 관련 기본 예제가 본 프로젝트 개발의 출발점이 되었습니다.

### 본 프로젝트에서의 추가 구현 사항
- **실시간 날씨 연결**: Vercel SDK의 기본 예제를 확장하여 실제 날씨 정보를 실시간으로 연결하고 사용자에게 제공합니다.
- **날씨 아이콘 추가**: 날씨 상황에 따라 다양한 아이콘을 표시하는 기능을 추가하여, 사용자 인터페이스를 더욱 직관적이고 풍부하게 만들었습니다.
- **OpenAI를 통한 메시지 해석**: 사용자의 메시지를 OpenAI가 해석하여, 그에 맞는 날씨 정보를 제공합니다.
- **리액트 날씨 컴포넌트 강화**: 기존 예제의 리액트 컴포넌트를 강화하여, 날씨 데이터를 더욱 효과적으로 시각화합니다.
- **클라이언트사이드 AI Function Handler 사용**: 실시간 날씨 정보와 OpenAI의 해석된 메시지를 결합하여 표시하기 위해 클라이언트사이드 AI Function Handler를 활용합니다.

이러한 추가 기능들은 "LevelUp-Weather-Chat" 프로젝트를 독특하고 혁신적인 AI 기반 날씨 정보 제공 서비스로 발전시켰습니다.